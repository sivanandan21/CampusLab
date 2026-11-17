from typing import Optional
from pydantic import BaseModel


class UserSettingsResponse(BaseModel):
    terminal_theme: str = "campusslate"
    font_size: int = 14
    auto_reconnect: bool = True
    copy_on_select: bool = True
    deadline_reminders: bool = True
    grade_alerts: bool = True

    class Config:
        from_attributes = True


class UserSettingsUpdateRequest(BaseModel):
    terminal_theme: Optional[str] = None
    font_size: Optional[int] = None
    auto_reconnect: Optional[bool] = None
    copy_on_select: Optional[bool] = None
    deadline_reminders: Optional[bool] = None
    grade_alerts: Optional[bool] = None
