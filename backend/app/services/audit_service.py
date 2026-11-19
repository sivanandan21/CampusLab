import logging
from typing import Dict, Any, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text

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
    ) -> None:
        """Persist audit record in an isolated nested savepoint so any failure
        cannot corrupt the caller's SQLAlchemy session/transaction."""
        import json
        details_str = json.dumps(details or {})

        logger.info(
            f"AuditEvent: {event_type} | user={admission_number} | req={request_id}",
        )

        try:
            # Use a savepoint so a failure here rolls back ONLY the audit insert,
            # leaving the outer transaction (e.g. auth) completely intact.
            async with db.begin_nested():
                await db.execute(
                    text("""
                        INSERT INTO audit_events
                            (request_id, user_id, admission_number, event_type,
                             ip_address, user_agent, details_json)
                        VALUES
                            (:request_id,
                             :user_id::uuid,
                             :admission_number,
                             :event_type,
                             :ip_address,
                             :user_agent,
                             :details_json::jsonb)
                    """),
                    {
                        "request_id": str(request_id),
                        "user_id": str(user_id) if user_id else None,
                        "admission_number": str(admission_number) if admission_number else None,
                        "event_type": str(event_type),
                        "ip_address": str(ip_address) if ip_address else None,
                        "user_agent": str(user_agent) if user_agent else None,
                        "details_json": details_str,
                    },
                )
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
