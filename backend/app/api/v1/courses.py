import json
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload

from ...core.database import get_db
from ...core.rbac import get_current_user
from ...models.course import Course
from ...models.experiment import Experiment
from ...schemas.course import CourseResponse, ExperimentResponse

router = APIRouter(prefix="/courses", tags=["Courses"])


def _map_course_to_response(c: Course) -> CourseResponse:
    def _parse_json(val, default):
        if val is None:
            return default
        if isinstance(val, (list, dict)):
            return val
        if isinstance(val, str):
            try:
                return json.loads(val)
            except Exception:
                return default
        return default

    topics = _parse_json(c.topics_json, [])
    experiments_list = []
    completed_count = 0

    for exp in c.experiments:
        if exp.status == "Completed":
            completed_count += 1
        experiments_list.append(
            ExperimentResponse(
                id=str(exp.id),
                expSlug=exp.exp_slug,
                expNumber=exp.exp_number,
                title=exp.title,
                question=exp.question,
                durationMinutes=exp.duration_minutes,
                environment=exp.environment,
                objectives=_parse_json(exp.objectives_json, []),
                practiceSkills=_parse_json(exp.practice_skills_json, []),
                checklistSteps=_parse_json(exp.checklist_steps_json, []),
                submissionRequirements=_parse_json(exp.submission_requirements_json, {}),
                sampleStarterCode=exp.sample_starter_code,
                solutionHint=exp.solution_hint,
                initialCmd=exp.initial_cmd,
                initialOutput=exp.initial_output,
                status=exp.status,
            )
        )

    exp_count = len(experiments_list)
    progress_pct = int((completed_count / exp_count) * 100) if exp_count > 0 else 0

    return CourseResponse(
        id=str(c.id),
        code=c.code,
        title=c.title,
        semester=c.semester,
        credits=c.credits,
        ltpr=c.ltpr,
        evaluation=c.evaluation,
        category=c.category,
        description=c.description,
        topics=topics,
        experimentsCount=exp_count,
        completedExperiments=completed_count,
        progressPercentage=progress_pct,
        imageKey=c.image_key,
        experiments=experiments_list,
    )


@router.get("", response_model=List[CourseResponse])
async def list_courses(
    semester: Optional[str] = Query(None, description="Filter by semester e.g. S1, S4"),
    db: AsyncSession = Depends(get_db),
    user=Depends(get_current_user),
):
    """List KTU 2024 Scheme B.Tech CSE lab courses with all experiments."""
    stmt = select(Course).options(selectinload(Course.experiments))
    if semester:
        stmt = stmt.where(Course.semester == semester.upper())

    result = await db.execute(stmt)
    courses = result.scalars().all()
    return [_map_course_to_response(c) for c in courses]


@router.get("/{course_code}", response_model=CourseResponse)
async def get_course_detail(
    course_code: str,
    db: AsyncSession = Depends(get_db),
    user=Depends(get_current_user),
):
    """Get single course detail by code e.g. PCCSL407."""
    stmt = (
        select(Course)
        .where(Course.code == course_code.upper())
        .options(selectinload(Course.experiments))
    )
    result = await db.execute(stmt)
    course = result.scalar_one_or_none()
    if not course:
        raise HTTPException(status_code=404, detail=f"Course {course_code} not found")

    return _map_course_to_response(course)
