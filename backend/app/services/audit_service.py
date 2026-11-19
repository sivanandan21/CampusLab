import json
import logging
from typing import Dict, Any, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from ..models.audit import AuditEvent
from ..aws.cloudwatch import cloudwatch_metrics

logger = logging.getLogger("campuslab.services.audit")


class AuditService:
    @staticmethod
    async def log_event(
        db: AsyncSession,
        request_id: str,
        event_type: str,
        user_id: Optional[str] = None,
        admission_number: Optional[str] = None,
        session_id: Optional[str] = None,
        worker_id: Optional[str] = None,
        ip_address: Optional[str] = None,
        user_agent: Optional[str] = None,
        details: Optional[Dict[str, Any]] = None,
    ) -> AuditEvent:
        """Persist audit record and emit CloudWatch metrics where applicable."""
        try:
            details_str = json.dumps(details or {})
            event = AuditEvent(
                request_id=request_id,
                user_id=user_id,
                admission_number=admission_number,
                session_id=session_id,
                worker_id=worker_id,
                event_type=event_type,
                ip_address=ip_address,
                user_agent=user_agent,
                details_json=details_str,
            )
            db.add(event)
            await db.flush()
        except Exception as e:
            logger.warning(f"Audit persistence skipped: {e}")
            event = None

        logger.info(
            f"AuditEvent: {event_type} | user={admission_number} | session={session_id} | req={request_id}",
            extra={
                "request_id": request_id,
                "user_id": user_id,
                "admission_number": admission_number,
                "session_id": session_id,
                "worker_id": worker_id,
                "event_type": event_type,
            },
        )

        try:
            # Trigger specific CloudWatch metric alarms
            if event_type == "AUTH_FAILURE":
                cloudwatch_metrics.emit_metric("AuthFailures", 1, unit="Count")
            elif event_type == "CLEANUP_FAILURE":
                cloudwatch_metrics.emit_metric("CleanupFailures", 1, unit="Count")
        except Exception:
            pass

        return event


audit_service = AuditService()
