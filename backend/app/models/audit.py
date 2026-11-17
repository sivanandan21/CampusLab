import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Text, DateTime, ForeignKey
from ..core.database import Base


class AuditEvent(Base):
    __tablename__ = "audit_events"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    request_id = Column(String(64), nullable=False)
    user_id = Column(String(36), ForeignKey("users.id", ondelete="SET NULL"), nullable=True, index=True)
    admission_number = Column(String(32), nullable=True)
    session_id = Column(String(36), ForeignKey("lab_sessions.id", ondelete="SET NULL"), nullable=True)
    worker_id = Column(String(36), ForeignKey("worker_nodes.id", ondelete="SET NULL"), nullable=True)
    event_type = Column(String(64), nullable=False, index=True)
    ip_address = Column(String(64), nullable=True)
    user_agent = Column(Text, nullable=True)
    details_json = Column(Text, nullable=False, default="{}")
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False, index=True)
