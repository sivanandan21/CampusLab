from typing import Optional
from datetime import datetime
from pydantic import BaseModel


class SessionCreateRequest(BaseModel):
    course_code: Optional[str] = None
    courseCode: Optional[str] = None
    experiment_id: Optional[str] = None
    experimentId: Optional[str] = None
    idempotency_key: Optional[str] = None

    @property
    def target_course_code(self) -> str:
        return (self.course_code or self.courseCode or "PCCSL407").strip().upper()

    @property
    def target_experiment_id(self) -> str:
        return (self.experiment_id or self.experimentId or "exp-04").strip().lower()


class SessionResponse(BaseModel):
    id: str
    user_id: str
    course_code: str
    experiment_id: str
    status: str
    container_id: Optional[str] = None
    pty_token: str
    expires_at: datetime
    created_at: datetime
    ws_url: str

    class Config:
        from_attributes = True


class SessionStopResponse(BaseModel):
    session_id: str
    status: str
    stopped_at: datetime
    message: str


class TerminalTokenResponse(BaseModel):
    session_id: str
    token: str
    ws_url: str
    expires_in_seconds: int = 2700  # 45 mins
