import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Float, Boolean, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from ..core.database import Base


class Submission(Base):
    __tablename__ = "submissions"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String(36), ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    session_id = Column(String(36), ForeignKey("lab_sessions.id", ondelete="SET NULL"), nullable=True)
    experiment_id = Column(String(36), ForeignKey("experiments.id", ondelete="CASCADE"), nullable=False, index=True)
    course_id = Column(String(36), ForeignKey("courses.id", ondelete="CASCADE"), nullable=False)
    status = Column(String(32), nullable=False, default="SUBMITTED", index=True)  # SUBMITTED, EVALUATING, GRADED, REJECTED
    score = Column(Float, default=0.0)
    max_score = Column(Float, nullable=False, default=50.0)
    grade = Column(String(8), nullable=True)  # S, A+, A, B+, B, C, P, F
    rubric_breakdown_json = Column(Text, nullable=False, default="{}")
    faculty_feedback = Column(Text, nullable=True)
    faculty_reviewer_id = Column(String(36), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    autocheck_passed = Column(Boolean, nullable=False, default=True)
    artifact_manifest_json = Column(Text, nullable=False, default="[]")
    terminal_snapshot = Column(Text, nullable=True)
    submitted_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    graded_at = Column(DateTime(timezone=True), nullable=True)

    user = relationship("User", foreign_keys=[user_id], back_populates="submissions")
    experiment = relationship("Experiment", back_populates="submissions")
