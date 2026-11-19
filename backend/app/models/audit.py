import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Text, DateTime, ForeignKey, Uuid, JSON
from sqlalchemy.dialects.postgresql import JSONB
from ..core.database import Base


class AuditEvent(Base):
    __tablename__ = "audit_events"

    id = Column(Uuid, primary_key=True, default=uuid.uuid4)
    request_id = Column(String(64), nullable=False)
    user_id = Column(Uuid, ForeignKey("users.id", ondelete="SET NULL"), nullable=True, index=True)
    admission_number = Column(String(32), nullable=True)
    session_id = Column(Uuid, ForeignKey("lab_sessions.id", ondelete="SET NULL"), nullable=True)
    worker_id = Column(Uuid, ForeignKey("worker_nodes.id", ondelete="SET NULL"), nullable=True)
    event_type = Column(String(64), nullable=False, index=True)
    ip_address = Column(String(64), nullable=True)
    user_agent = Column(Text, nullable=True)
    details_json = Column(JSON().with_variant(JSONB, "postgresql"), nullable=False, default=dict)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False, index=True)
