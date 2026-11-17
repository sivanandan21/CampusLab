from typing import List, Optional, Any, Dict
from pydantic import BaseModel


class PracticeSkill(BaseModel):
    name: str
    tag: str
    iconType: str


class ChecklistStep(BaseModel):
    id: str
    stepNumber: int
    label: str
    completed: Optional[bool] = False


class SubmissionRequirements(BaseModel):
    fileTypes: List[str] = []
    description: Optional[str] = ""
    acceptedFormats: Optional[str] = ""


class ExperimentResponse(BaseModel):
    id: str
    expSlug: str
    expNumber: int
    title: str
    question: str
    durationMinutes: int
    environment: str
    objectives: List[str] = []
    practiceSkills: List[PracticeSkill] = []
    checklistSteps: List[ChecklistStep] = []
    submissionRequirements: SubmissionRequirements
    sampleStarterCode: Optional[str] = None
    solutionHint: Optional[str] = None
    initialCmd: Optional[str] = None
    initialOutput: Optional[str] = None
    status: str = "Ready"

    class Config:
        from_attributes = True


class CourseResponse(BaseModel):
    id: str
    code: str
    title: str
    semester: str
    credits: int
    ltpr: str
    evaluation: str
    category: str
    description: str
    topics: List[str] = []
    experimentsCount: int
    completedExperiments: int = 0
    progressPercentage: int = 0
    imageKey: str
    activeSessionId: Optional[str] = None
    experiments: List[ExperimentResponse] = []

    class Config:
        from_attributes = True
