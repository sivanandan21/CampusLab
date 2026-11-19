import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Float, Boolean, Text, DateTime, ForeignKey, Uuid, JSON
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import relationship
from ..core.database import Base


class Submission(Base):
    __tablename__ = "submissions"

    id = Column(Uuid, primary_key=True, default=uuid.uuid4)
    user_id = Column(Uuid, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    session_id = Column(Uuid, ForeignKey("lab_sessions.id", ondelete="SET NULL"), nullable=True)
    experiment_id = Column(Uuid, ForeignKey("experiments.id", ondelete="CASCADE"), nullable=False, index=True)
    course_id = Column(Uuid, ForeignKey("courses.id", ondelete="CASCADE"), nullable=False)
    status = Column(String(32), nullable=False, default="SUBMITTED", index=True)
    score = Column(Float, default=0.0)
    max_score = Column(Float, nullable=False, default=50.0)
    grade = Column(String(8), nullable=True)
    rubric_breakdown_json = Column(JSON().with_variant(JSONB, "postgresql"), nullable=False, default=dict)
    faculty_feedback = Column(Text, nullable=True)
    faculty_reviewer_id = Column(Uuid, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    autocheck_passed = Column(Boolean, nullable=False, default=True)
    artifact_manifest_json = Column(JSON().with_variant(JSONB, "postgresql"), nullable=False, default=list)
    terminal_snapshot = Column(Text, nullable=True)
    submitted_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    graded_at = Column(DateTime(timezone=True), nullable=True)

    user = relationship("User", foreign_keys=[user_id], back_populates="submissions")
    experiment = relationship("Experiment", back_populates="submissions")
