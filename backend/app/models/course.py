import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Integer, Text, DateTime
from sqlalchemy.orm import relationship
from ..core.database import Base


class Course(Base):
    __tablename__ = "courses"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    code = Column(String(16), unique=True, nullable=False, index=True)
    title = Column(String(255), nullable=False)
    semester = Column(String(8), nullable=False, index=True)
    credits = Column(Integer, nullable=False, default=2)
    ltpr = Column(String(16), nullable=False, default="0-0-3-0")
    evaluation = Column(String(32), nullable=False, default="CIA 50 / ESE 50")
    category = Column(String(32), nullable=False, default="PC Practical")
    description = Column(Text, nullable=False)
    topics_json = Column(Text, nullable=False, default="[]")  # stored as JSON text for SQLite/PostgreSQL compatibility
    image_key = Column(String(64), nullable=False)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)

    experiments = relationship("Experiment", back_populates="course", cascade="all, delete-orphan", order_by="Experiment.exp_number")
    sessions = relationship("LabSession", back_populates="course", cascade="all, delete-orphan")
