import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from ..core.database import Base


class LabSession(Base):
    __tablename__ = "lab_sessions"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String(36), ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    course_id = Column(String(36), ForeignKey("courses.id", ondelete="CASCADE"), nullable=False, index=True)
    experiment_id = Column(String(36), ForeignKey("experiments.id", ondelete="CASCADE"), nullable=False, index=True)
    worker_id = Column(String(36), ForeignKey("worker_nodes.id", ondelete="SET NULL"), nullable=True)
    status = Column(String(32), nullable=False, default="REQUESTED", index=True)  # REQUESTED, PROVISIONING, READY, RUNNING, STOPPED, EXPIRED, FAILED
    idempotency_key = Column(String(128), unique=True, nullable=True, index=True)
    container_id = Column(String(128), nullable=True)
    container_name = Column(String(128), nullable=True)
    pty_token = Column(String(255), nullable=False)
    port = Column(Integer, default=0)
    expires_at = Column(DateTime(timezone=True), nullable=False, index=True)
    allocated_at = Column(DateTime(timezone=True), nullable=True)
    stopped_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)

    user = relationship("User", back_populates="sessions")
    course = relationship("Course", back_populates="sessions")
    experiment = relationship("Experiment", back_populates="sessions")
