import json
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, and_

from ...core.database import get_db
from ...core.rbac import get_current_user
from ...models.experiment import Experiment
from ...models.course import Course
from ...schemas.course import ExperimentResponse

router = APIRouter(prefix="/experiments", tags=["Experiments"])


@router.get("/{course_code}/{exp_slug}", response_model=ExperimentResponse)
async def get_experiment_detail(
    course_code: str,
    exp_slug: str,
    db: AsyncSession = Depends(get_db),
    user=Depends(get_current_user),
):
    """Retrieve detailed experiment requirements, checklist, and sample code."""
    course_stmt = select(Course).where(Course.code == course_code.upper())
    course = (await db.execute(course_stmt)).scalar_one_or_none()
    if not course:
        raise HTTPException(status_code=404, detail=f"Course {course_code} not found")

    exp_stmt = select(Experiment).where(
        and_(Experiment.course_id == course.id, Experiment.exp_slug == exp_slug.lower())
    )
    exp = (await db.execute(exp_stmt)).scalar_one_or_none()
    if not exp:
        # Fallback to first experiment of course
        fb_stmt = select(Experiment).where(Experiment.course_id == course.id)
        exp = (await db.execute(fb_stmt)).scalars().first()
        if not exp:
            raise HTTPException(status_code=404, detail="Experiment not found")

    return ExperimentResponse(
        id=exp.id,
        expSlug=exp.exp_slug,
        expNumber=exp.exp_number,
        title=exp.title,
        question=exp.question,
        durationMinutes=exp.duration_minutes,
        environment=exp.environment,
        objectives=json.loads(exp.objectives_json) if exp.objectives_json else [],
        practiceSkills=json.loads(exp.practice_skills_json) if exp.practice_skills_json else [],
        checklistSteps=json.loads(exp.checklist_steps_json) if exp.checklist_steps_json else [],
        submissionRequirements=json.loads(exp.submission_requirements_json) if exp.submission_requirements_json else {},
        sampleStarterCode=exp.sample_starter_code,
        solutionHint=exp.solution_hint,
        initialCmd=exp.initial_cmd,
        initialOutput=exp.initial_output,
        status=exp.status,
    )
