import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Integer, Text, DateTime, ForeignKey, UniqueConstraint, Uuid, JSON
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import relationship
from ..core.database import Base


class Experiment(Base):
    __tablename__ = "experiments"

    id = Column(Uuid, primary_key=True, default=uuid.uuid4)
    course_id = Column(Uuid, ForeignKey("courses.id", ondelete="CASCADE"), nullable=False, index=True)
    exp_slug = Column(String(64), nullable=False, index=True)
    exp_number = Column(Integer, nullable=False, default=1)
    title = Column(String(255), nullable=False)
    question = Column(Text, nullable=False)
    duration_minutes = Column(Integer, nullable=False, default=45)
    environment = Column(String(128), nullable=False, default="Isolated Linux Sandbox")
    objectives_json = Column(JSON().with_variant(JSONB, "postgresql"), nullable=False, default=list)
    practice_skills_json = Column(JSON().with_variant(JSONB, "postgresql"), nullable=False, default=list)
    checklist_steps_json = Column(JSON().with_variant(JSONB, "postgresql"), nullable=False, default=list)
    submission_requirements_json = Column(JSON().with_variant(JSONB, "postgresql"), nullable=False, default=dict)
    sample_starter_code = Column(Text, nullable=True)
    solution_hint = Column(Text, nullable=True)
    initial_cmd = Column(String(255), nullable=True)
    initial_output = Column(Text, nullable=True)
    status = Column(String(32), nullable=False, default="Ready")
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)

    __table_args__ = (
        UniqueConstraint("course_id", "exp_slug", name="uq_course_exp_slug"),
    )

    course = relationship("Course", back_populates="experiments")
    sessions = relationship("LabSession", back_populates="experiment", cascade="all, delete-orphan")
    submissions = relationship("Submission", back_populates="experiment", cascade="all, delete-orphan")
