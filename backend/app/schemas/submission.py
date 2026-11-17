from typing import List, Optional, Dict, Any
from datetime import datetime
from pydantic import BaseModel


class PresignUploadRequest(BaseModel):
    filename: str
    content_type: str
    file_size_bytes: int
    course_code: str
    experiment_id: str


class PresignUploadResponse(BaseModel):
    upload_url: str
    s3_key: str
    bucket: str
    expires_in_seconds: int
    headers: Dict[str, str] = {}


class ArtifactItem(BaseModel):
    name: str
    s3_key: str
    size: int
    sha256: Optional[str] = None
    content_type: Optional[str] = None


class SubmissionCreateRequest(BaseModel):
    experiment_id: str
    course_code: str
    artifacts: List[ArtifactItem] = []
    terminal_snapshot: Optional[str] = None


class SubmissionResponse(BaseModel):
    id: str
    user_id: str
    experiment_id: str
    course_code: str
    status: str
    score: float
    max_score: float = 50.0
    grade: Optional[str] = None
    rubric_breakdown: Dict[str, float] = {}
    faculty_feedback: Optional[str] = None
    autocheck_passed: bool = True
    artifact_manifest: List[ArtifactItem] = []
    submitted_at: datetime
    graded_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class EvaluationRequest(BaseModel):
    submission_id: str
    score: float
    grade: str
    faculty_feedback: str
    rubric_breakdown: Dict[str, float]
