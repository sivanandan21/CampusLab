from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Header, status, Response
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ...core.database import get_db
from ...core.rbac import get_current_user
from ...models.user import User
from ...models.session import LabSession
from ...models.course import Course
from ...models.experiment import Experiment
from ...schemas.session import (
    SessionCreateRequest,
    SessionResponse,
    SessionStopResponse,
    TerminalTokenResponse,
)
from ...services.session_service import session_service

router = APIRouter(prefix="/sessions", tags=["Lab Sessions"])


@router.post("", response_model=SessionResponse, status_code=status.HTTP_202_ACCEPTED)
@router.post("/start", response_model=SessionResponse, status_code=status.HTTP_202_ACCEPTED)
async def create_or_resume_session(
    req: SessionCreateRequest,
    response: Response,
    idempotency_key: Optional[str] = Header(None, alias="Idempotency-Key"),
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    """
    Allocate or resume an isolated container workspace.
    Enforces idempotency and 45-minute timeout.
    Returns WebSocket terminal connection URL.
    """
    key = idempotency_key or req.idempotency_key

    try:
        session = await session_service.create_or_resume_session(
            db=db,
            user=user,
            course_code=req.course_code.upper(),
            experiment_slug=req.experiment_id.lower(),
            idempotency_key=key,
            request_id="req-alloc-session",
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    # If session is already ready, return 200 instead of 202
    if session.status == "READY":
        response.status_code = status.HTTP_200_OK

    ws_url = f"/api/v1/terminal/ws?session_id={session.id}&token={session.pty_token}"

    return SessionResponse(
        id=session.id,
        user_id=session.user_id,
        course_code=req.course_code.upper(),
        experiment_id=req.experiment_id.lower(),
        status=session.status,
        container_id=session.container_id,
        pty_token=session.pty_token,
        expires_at=session.expires_at,
        created_at=session.created_at,
        ws_url=ws_url,
    )


@router.get("/active", response_model=Optional[SessionResponse])
async def get_active_session(
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    """Return currently active student lab session if one exists."""
    stmt = (
        select(LabSession)
        .where(
            LabSession.user_id == user.id,
            LabSession.status.in_(["PROVISIONING", "READY", "RUNNING"]),
        )
        .order_by(LabSession.created_at.desc())
    )
    session = (await db.execute(stmt)).scalars().first()
    if not session:
        return None

    course_stmt = select(Course).where(Course.id == session.course_id)
    course = (await db.execute(course_stmt)).scalar_one_or_none()
    course_code = course.code if course else "PCCSL407"

    exp_stmt = select(Experiment).where(Experiment.id == session.experiment_id)
    exp = (await db.execute(exp_stmt)).scalar_one_or_none()
    exp_slug = exp.exp_slug if exp else "exp-04"

    ws_url = f"/api/v1/terminal/ws?session_id={session.id}&token={session.pty_token}"

    return SessionResponse(
        id=session.id,
        user_id=session.user_id,
        course_code=course_code,
        experiment_id=exp_slug,
        status=session.status,
        container_id=session.container_id,
        pty_token=session.pty_token,
        expires_at=session.expires_at,
        created_at=session.created_at,
        ws_url=ws_url,
    )


@router.get("/{session_id}", response_model=SessionResponse)
async def get_session(
    session_id: str,
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    """Get active session details and time left."""
    stmt = select(LabSession).where(LabSession.id == session_id)
    session = (await db.execute(stmt)).scalar_one_or_none()
    if not session or session.user_id != user.id:
        raise HTTPException(status_code=404, detail="Session not found")

    course_stmt = select(Course).where(Course.id == session.course_id)
    course = (await db.execute(course_stmt)).scalar_one_or_none()
    course_code = course.code if course else "PCCSL407"

    exp_stmt = select(Experiment).where(Experiment.id == session.experiment_id)
    exp = (await db.execute(exp_stmt)).scalar_one_or_none()
    exp_slug = exp.exp_slug if exp else "exp-04"

    ws_url = f"/api/v1/terminal/ws?session_id={session.id}&token={session.pty_token}"

    return SessionResponse(
        id=session.id,
        user_id=session.user_id,
        course_code=course_code,
        experiment_id=exp_slug,
        status=session.status,
        container_id=session.container_id,
        pty_token=session.pty_token,
        expires_at=session.expires_at,
        created_at=session.created_at,
        ws_url=ws_url,
    )


@router.post("/{session_id}/stop", response_model=SessionStopResponse)
@router.post("/{session_id}/end", response_model=SessionStopResponse)
async def stop_session(
    session_id: str,
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    """End student lab session and release container resources."""
    try:
        session = await session_service.stop_session(
            db=db,
            session_id=session_id,
            user_id=user.id,
            request_id="req-stop-api",
        )
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

    return SessionStopResponse(
        session_id=session.id,
        status=session.status,
        stopped_at=session.stopped_at,
        message="Laboratory session ended and container resources released successfully.",
    )


@router.post("/{session_id}/terminal-token", response_model=TerminalTokenResponse)
async def refresh_terminal_token(
    session_id: str,
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    """Generate fresh short-lived WebSocket authentication token for xterm.js."""
    stmt = select(LabSession).where(LabSession.id == session_id)
    session = (await db.execute(stmt)).scalar_one_or_none()
    if not session or session.user_id != user.id:
        raise HTTPException(status_code=404, detail="Session not found")

    return TerminalTokenResponse(
        session_id=session.id,
        token=session.pty_token,
        ws_url=f"/api/v1/terminal/ws?session_id={session.id}&token={session.pty_token}",
    )
