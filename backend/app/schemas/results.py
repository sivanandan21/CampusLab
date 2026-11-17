from typing import List, Dict, Optional
from pydantic import BaseModel


class CourseResultItem(BaseModel):
    course_code: str
    course_title: str
    grade: str
    cia_score: float
    max_cia_score: float = 50.0
    rubric: Dict[str, float]
    completed_experiments: int
    total_experiments: int


class RecentSubmissionScore(BaseModel):
    id: str
    experiment_title: str
    course_code: str
    cia_score: float
    max_score: float = 10.0
    grade: str
    status: str
    submitted_at: str


class ResultSummaryResponse(BaseModel):
    semester: str
    semester_sgpa: float
    sgpa_grade: str
    total_cia_score: float
    max_cia_score: float = 100.0
    experiments_passed: int
    total_experiments: int
    report_pdf_url: Optional[str] = None
    course_results: List[CourseResultItem] = []
    recent_submissions: List[RecentSubmissionScore] = []
