import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Boolean, DateTime, Uuid
from sqlalchemy.orm import relationship
from ..core.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Uuid, primary_key=True, default=uuid.uuid4)
    admission_number = Column(String(32), unique=True, nullable=False, index=True)
    ktu_reg_id = Column(String(32), unique=True, nullable=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    hashed_password = Column(String(255), nullable=False)
    name = Column(String(128), nullable=False)
    role = Column(String(32), nullable=False, default="student", index=True)
    current_semester = Column(String(8), nullable=False, default="S4")
    department = Column(String(64), nullable=False, default="Computer Science & Engineering")
    college_id = Column(String(32), nullable=False, default="CET_KTU")
    avatar_url = Column(String(512), nullable=True)
    is_active = Column(Boolean, nullable=False, default=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)

    settings = relationship("UserSettings", back_populates="user", uselist=False, cascade="all, delete-orphan")
    sessions = relationship("LabSession", back_populates="user", cascade="all, delete-orphan")
    submissions = relationship("Submission", foreign_keys="Submission.user_id", back_populates="user", cascade="all, delete-orphan")
