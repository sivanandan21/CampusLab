import json
import uuid
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, desc
from sqlalchemy.orm import selectinload

from ...core.database import get_db
from ...core.rbac import get_current_user, require_faculty
from ...models.user import User
from ...models.submission import Submission
from ...models.course import Course
from ...schemas.submission import (
    PresignUploadRequest,
    PresignUploadResponse,
    SubmissionCreateRequest,
    SubmissionResponse,
    EvaluationRequest,
    ArtifactItem,
)
from ...aws.s3_storage import s3_service
from ...services.evaluation_service import evaluation_service

router = APIRouter(prefix="/submissions", tags=["Submissions"])


@router.post("/presign-upload", response_model=PresignUploadResponse)
async def get_presigned_upload_url(
    req: PresignUploadRequest,
    user: User = Depends(get_current_user),
):
    """
    Generate short-lived Amazon S3 Presigned PUT URL.
    Enforces upload isolation under submissions/<admission_number>/<course>/<filename>.
    """
    clean_filename = req.filename.replace(" ", "_")
    s3_key = f"submissions/{user.admission_number}/{req.course_code.upper()}/{uuid.uuid4().hex[:8]}_{clean_filename}"

    metadata = {
        "admission-number": user.admission_number,
        "course-code": req.course_code.upper(),
        "experiment-id": req.experiment_id,
    }

    presign_data = s3_service.generate_presigned_put(
        s3_key=s3_key,
        content_type=req.content_type,
        metadata=metadata,
    )

    return PresignUploadResponse(
        upload_url=presign_data["upload_url"],
        s3_key=s3_key,
        bucket=presign_data["bucket"],
        expires_in_seconds=presign_data["expires_in_seconds"],
        headers=presign_data.get("headers", {}),
    )


@router.post("", response_model=SubmissionResponse, status_code=status.HTTP_201_CREATED)
async def submit_experiment(
    req: SubmissionCreateRequest,
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    """Submit practical laboratory artifacts for automated KTU auto-grader evaluation."""
    artifacts_data = [a.model_dump() for a in req.artifacts]

    try:
        submission = await evaluation_service.create_submission(
            db=db,
            user=user,
            course_code=req.course_code.upper(),
            experiment_slug=req.experiment_id.lower(),
            artifacts=artifacts_data,
            terminal_snapshot=req.terminal_snapshot,
            request_id="req-submit-exp",
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    def _parse_json(val, default):
        if val is None:
            return default
        if isinstance(val, (dict, list)):
            return val
        if isinstance(val, str):
            try:
                return json.loads(val)
            except Exception:
                return default
        return default

    rubric = _parse_json(submission.rubric_breakdown_json, {})
    manifest = _parse_json(submission.artifact_manifest_json, [])

    return SubmissionResponse(
        id=str(submission.id),
        user_id=str(submission.user_id),
        experiment_id=str(submission.experiment_id),
        course_code=req.course_code.upper(),
        status=submission.status,
        score=submission.score,
        max_score=submission.max_score,
        grade=submission.grade,
        rubric_breakdown=rubric,
        faculty_feedback=submission.faculty_feedback,
        autocheck_passed=submission.autocheck_passed,
        artifact_manifest=[ArtifactItem(**item) for item in manifest],
        submitted_at=submission.submitted_at,
        graded_at=submission.graded_at,
    )


@router.get("", response_model=List[SubmissionResponse])
async def list_student_submissions(
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    """List lab submissions for active student."""
    def _parse_json(val, default):
        if val is None:
            return default
        if isinstance(val, (dict, list)):
            return val
        if isinstance(val, str):
            try:
                return json.loads(val)
            except Exception:
                return default
        return default

    stmt = (
        select(Submission)
        .where(Submission.user_id == user.id)
        .order_by(desc(Submission.submitted_at))
    )
    result = await db.execute(stmt)
    submissions = result.scalars().all()

    resp = []
    for s in submissions:
        rubric = _parse_json(s.rubric_breakdown_json, {})
        manifest = _parse_json(s.artifact_manifest_json, [])
        course_stmt = select(Course).where(Course.id == s.course_id)
        course = (await db.execute(course_stmt)).scalar_one_or_none()
        c_code = course.code if course else "PCCSL407"

        resp.append(
            SubmissionResponse(
                id=str(s.id),
                user_id=str(s.user_id),
                experiment_id=str(s.experiment_id),
                course_code=c_code,
                status=s.status,
                score=s.score,
                max_score=s.max_score,
                grade=s.grade,
                rubric_breakdown=rubric,
                faculty_feedback=s.faculty_feedback,
                autocheck_passed=s.autocheck_passed,
                artifact_manifest=[ArtifactItem(**item) for item in manifest],
                submitted_at=s.submitted_at,
                graded_at=s.graded_at,
            )
        )
    return resp


@router.post("/{submission_id}/evaluate", response_model=SubmissionResponse)
async def evaluate_submission(
    submission_id: str,
    req: EvaluationRequest,
    db: AsyncSession = Depends(get_db),
    faculty: User = Depends(require_faculty),
):
    """Faculty grading and feedback review endpoint."""
    stmt = select(Submission).where(Submission.id == submission_id)
    sub = (await db.execute(stmt)).scalar_one_or_none()
    if not sub:
        raise HTTPException(status_code=404, detail="Submission not found")

    sub.score = req.score
    sub.grade = req.grade
    sub.faculty_feedback = req.faculty_feedback
    sub.rubric_breakdown_json = json.dumps(req.rubric_breakdown)
    sub.faculty_reviewer_id = faculty.id
    sub.status = "GRADED"
    await db.commit()

    rubric = json.loads(sub.rubric_breakdown_json)
    manifest = json.loads(sub.artifact_manifest_json) if sub.artifact_manifest_json else []

    return SubmissionResponse(
        id=sub.id,
        user_id=sub.user_id,
        experiment_id=sub.experiment_id,
        course_code="PCCSL407",
        status=sub.status,
        score=sub.score,
        max_score=sub.max_score,
        grade=sub.grade,
        rubric_breakdown=rubric,
        faculty_feedback=sub.faculty_feedback,
        autocheck_passed=sub.autocheck_passed,
        artifact_manifest=[ArtifactItem(**item) for item in manifest],
        submitted_at=sub.submitted_at,
        graded_at=sub.graded_at,
    )
