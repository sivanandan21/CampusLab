import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Integer, Boolean, DateTime, ForeignKey, Uuid
from sqlalchemy.orm import relationship
from ..core.database import Base


class UserSettings(Base):
    __tablename__ = "user_settings"

    id = Column(Uuid, primary_key=True, default=uuid.uuid4)
    user_id = Column(Uuid, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    terminal_theme = Column(String(32), nullable=False, default="campusslate")
    font_size = Column(Integer, nullable=False, default=14)
    auto_reconnect = Column(Boolean, nullable=False, default=True)
    copy_on_select = Column(Boolean, nullable=False, default=True)
    deadline_reminders = Column(Boolean, nullable=False, default=True)
    grade_alerts = Column(Boolean, nullable=False, default=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)

    user = relationship("User", back_populates="settings")
