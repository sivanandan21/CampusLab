import logging
import uuid
from typing import Dict, Any, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from ..models.audit import AuditEvent

logger = logging.getLogger("campuslab.services.audit")


class AuditService:
    @staticmethod
    async def log_event(
        db: AsyncSession,
        request_id: str,
        event_type: str,
        user_id: Optional[Any] = None,
        admission_number: Optional[str] = None,
        session_id: Optional[Any] = None,
        worker_id: Optional[Any] = None,
        ip_address: Optional[str] = None,
        user_agent: Optional[str] = None,
        details: Optional[Dict[str, Any]] = None,
    ) -> None:
        """Persist audit record safely in a nested savepoint so any failure
        cannot corrupt the caller's main database transaction."""
        logger.info(
            f"AuditEvent: {event_type} | user={admission_number} | req={request_id}",
        )

        try:
            # Parse UUIDs if passed as strings
            u_id = uuid.UUID(str(user_id)) if user_id else None
            s_id = uuid.UUID(str(session_id)) if session_id else None
            w_id = uuid.UUID(str(worker_id)) if worker_id else None

            event = AuditEvent(
                id=uuid.uuid4(),
                request_id=str(request_id),
                user_id=u_id,
                admission_number=str(admission_number) if admission_number else None,
                session_id=s_id,
                worker_id=w_id,
                event_type=str(event_type),
                ip_address=str(ip_address) if ip_address else None,
                user_agent=str(user_agent) if user_agent else None,
                details_json=details or {},
            )

            # Isolated SAVEPOINT: if this fails, ONLY the savepoint is rolled back
            async with db.begin_nested():
                db.add(event)
                await db.flush()
        except Exception as e:
            logger.warning(f"Audit log skipped (non-fatal): {e}")

        # CloudWatch metrics — always fire independently
        try:
            from ..aws.cloudwatch import cloudwatch_metrics
            if event_type == "AUTH_FAILURE":
                cloudwatch_metrics.emit_metric("AuthFailures", 1, unit="Count")
            elif event_type == "CLEANUP_FAILURE":
                cloudwatch_metrics.emit_metric("CleanupFailures", 1, unit="Count")
        except Exception:
            pass


audit_service = AuditService()
