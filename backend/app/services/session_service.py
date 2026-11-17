import time
import uuid
import secrets
from datetime import datetime, timedelta, timezone
from typing import Optional, Dict, Any
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, and_

from ..models.session import LabSession
from ..models.course import Course
from ..models.experiment import Experiment
from ..models.worker import WorkerNode
from ..models.user import User
from ..core.config import settings
from ..aws.cloudwatch import cloudwatch_metrics
from .worker_client import worker_client
from .audit_service import audit_service


class SessionService:
    @staticmethod
    async def create_or_resume_session(
        db: AsyncSession,
        user: User,
        course_code: str,
        experiment_slug: str,
        idempotency_key: Optional[str] = None,
        request_id: str = "req-default",
    ) -> LabSession:
        """
        Allocate or resume a container workspace with strict idempotency and 45-minute TTL.
        Emits ProvisioningDurationMs and ActiveSessions CloudWatch metrics.
        """
        start_time = time.time()

        # Check existing session with idempotency key
        if idempotency_key:
            stmt = select(LabSession).where(LabSession.idempotency_key == idempotency_key)
            existing = (await db.execute(stmt)).scalar_one_or_none()
            if existing and existing.status in ("READY", "RUNNING", "PROVISIONING"):
                return existing

        # Check existing active session for this user, course & experiment
        course_res = await db.execute(select(Course).where(Course.code == course_code))
        course = course_res.scalar_one_or_none()
        if not course:
            raise ValueError(f"Course {course_code} not found")

        exp_res = await db.execute(
            select(Experiment).where(
                and_(Experiment.course_id == course.id, Experiment.exp_slug == experiment_slug)
            )
        )
        experiment = exp_res.scalar_one_or_none()
        if not experiment:
            # Fallback to first experiment of course
            fallback_res = await db.execute(select(Experiment).where(Experiment.course_id == course.id))
            experiment = fallback_res.scalars().first()
            if not experiment:
                raise ValueError(f"Experiment {experiment_slug} not found for course {course_code}")

        # Check if user already has an active session for this experiment
        now = datetime.now(timezone.utc)
        active_stmt = select(LabSession).where(
            and_(
                LabSession.user_id == user.id,
                LabSession.experiment_id == experiment.id,
                LabSession.status.in_(["READY", "RUNNING", "PROVISIONING"]),
                LabSession.expires_at > now,
            )
        )
        active_session = (await db.execute(active_stmt)).scalar_one_or_none()
        if active_session:
            return active_session

        # Select least loaded worker node from pool
        worker_stmt = (
            select(WorkerNode)
            .where(WorkerNode.status == "HEALTHY")
            .order_by(WorkerNode.active_containers.asc())
        )
        worker = (await db.execute(worker_stmt)).scalars().first()
        worker_id = worker.id if worker else None

        # Create session record in REQUESTED status
        session_id = str(uuid.uuid4())
        pty_token = secrets.token_urlsafe(32)
        expires_at = now + timedelta(minutes=settings.SESSION_TTL_MINUTES)

        session = LabSession(
            id=session_id,
            user_id=user.id,
            course_id=course.id,
            experiment_id=experiment.id,
            worker_id=worker_id,
            status="REQUESTED",
            idempotency_key=idempotency_key or f"sess-{user.admission_number}-{experiment.exp_slug}-{int(time.time())}",
            pty_token=pty_token,
            expires_at=expires_at,
            allocated_at=now,
        )
        db.add(session)
        await db.flush()

        # Contact EC2 worker node to spin up container
        session.status = "PROVISIONING"
        await db.flush()

        cont_info = await worker_client.create_container(
            session_id=session_id,
            user_admission_number=user.admission_number,
            course_code=course.code,
            experiment_slug=experiment.exp_slug,
            environment=experiment.environment,
        )

        session.container_id = cont_info.get("container_id", f"cont-{session_id[:8]}")
        session.container_name = cont_info.get("container_name", f"campuslab-{course.code.lower()}")
        session.status = "READY"
        await db.flush()

        # Update worker container count
        if worker:
            worker.active_containers += 1
            await db.flush()

        # Metrics & Audit
        provision_duration_ms = (time.time() - start_time) * 1000
        cloudwatch_metrics.emit_metric("ProvisioningDurationMs", provision_duration_ms, unit="Milliseconds")
        cloudwatch_metrics.emit_metric("ActiveSessions", 1, unit="Count")

        await audit_service.log_event(
            db=db,
            request_id=request_id,
            event_type="SESSION_ALLOCATED",
            user_id=user.id,
            admission_number=user.admission_number,
            session_id=session_id,
            worker_id=worker_id,
            details={"course": course.code, "experiment": experiment.exp_slug, "duration_ms": provision_duration_ms},
        )

        return session

    @staticmethod
    async def stop_session(db: AsyncSession, session_id: str, user_id: str, request_id: str = "req-stop") -> LabSession:
        """Stop an active session and release its container."""
        stmt = select(LabSession).where(and_(LabSession.id == session_id, LabSession.user_id == user_id))
        session = (await db.execute(stmt)).scalar_one_or_none()
        if not session:
            raise ValueError("Session not found")

        if session.status in ("STOPPED", "EXPIRED"):
            return session

        session.status = "STOPPED"
        session.stopped_at = datetime.now(timezone.utc)

        if session.container_id:
            await worker_client.stop_container(session.container_id)

        # Decrement worker active containers
        if session.worker_id:
            worker_stmt = select(WorkerNode).where(WorkerNode.id == session.worker_id)
            worker = (await db.execute(worker_stmt)).scalar_one_or_none()
            if worker and worker.active_containers > 0:
                worker.active_containers -= 1

        await db.flush()

        await audit_service.log_event(
            db=db,
            request_id=request_id,
            event_type="SESSION_STOPPED",
            user_id=user_id,
            session_id=session_id,
            details={"stopped_at": session.stopped_at.isoformat()},
        )

        return session


session_service = SessionService()
