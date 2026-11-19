import asyncio
import logging
from datetime import datetime, timezone
from sqlalchemy import select, and_, cast, String
from ..core.database import AsyncSessionLocal
from ..models.session import LabSession
from ..models.worker import WorkerNode
from ..services.worker_client import worker_client
from ..services.audit_service import audit_service
from ..aws.cloudwatch import cloudwatch_metrics

logger = logging.getLogger("campuslab.workers.ttl_sweeper")


async def run_ttl_sweeper(interval_seconds: int = 60):
    """Background task expiring stale sessions and releasing container quotas."""
    logger.info("Starting CampusLab TTL Sweeper background task...")

    while True:
        try:
            async with AsyncSessionLocal() as db:
                now = datetime.now(timezone.utc)
                stmt = select(LabSession).where(
                    and_(
                        cast(LabSession.status, String).in_(["READY", "RUNNING", "PROVISIONING"]),
                        LabSession.expires_at <= now,
                    )
                )
                result = await db.execute(stmt)
                expired_sessions = result.scalars().all()

                for session in expired_sessions:
                    logger.info(f"Expiring stale session {session.id} for user {session.user_id}")
                    session.status = "EXPIRED"
                    session.stopped_at = now

                    # Terminate container on worker
                    if session.container_id:
                        try:
                            await worker_client.stop_container(session.container_id)
                        except Exception as e:
                            logger.error(f"Failed to stop container {session.container_id}: {e}")
                            cloudwatch_metrics.emit_metric("CleanupFailures", 1, unit="Count")

                    # Decrement active containers on worker node
                    if session.worker_id:
                        w_stmt = select(WorkerNode).where(WorkerNode.id == session.worker_id)
                        worker = (await db.execute(w_stmt)).scalar_one_or_none()
                        if worker and worker.active_containers > 0:
                            worker.active_containers -= 1

                    await audit_service.log_event(
                        db=db,
                        request_id="sys-ttl-sweeper",
                        event_type="SESSION_EXPIRED",
                        user_id=session.user_id,
                        session_id=session.id,
                        details={"expired_at": now.isoformat()},
                    )

                if expired_sessions:
                    await db.commit()
                    logger.info(f"Swept and expired {len(expired_sessions)} stale sessions.")

        except Exception as e:
            logger.error(f"Error in TTL Sweeper execution: {e}")

        await asyncio.sleep(interval_seconds)
