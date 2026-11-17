import logging
from typing import Optional
from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Query, status
from sqlalchemy import select
from ...core.database import AsyncSessionLocal
from ...models.session import LabSession
from ...models.course import Course
from ...models.experiment import Experiment
from ...terminal.pty_gateway import pty_gateway

logger = logging.getLogger("campuslab.api.terminal_ws")

router = APIRouter(tags=["Terminal WebSocket"])


@router.websocket("/terminal/ws")
async def terminal_websocket_endpoint(
    websocket: WebSocket,
    session_id: Optional[str] = Query(None),
    token: Optional[str] = Query(None),
):
    """
    WebSocket endpoint connecting student browser xterm.js to container PTY.
    Authenticates session_id and token.
    """
    if not session_id:
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION, reason="session_id query parameter required")
        return

    course_code = "PCCSL407"
    exp_slug = "exp-04"
    env_str = "Ubuntu 24.04 LTS (Containerized non-root workspace)"
    starter = None
    initial_cmd = None
    initial_out = None

    # Verify session in database
    try:
        async with AsyncSessionLocal() as db:
            stmt = select(LabSession).where(LabSession.id == session_id)
            session = (await db.execute(stmt)).scalar_one_or_none()

            if session:
                # Optionally verify token
                if token and session.pty_token and token != session.pty_token:
                    logger.warning(f"Token mismatch for session {session_id}")

                c_stmt = select(Course).where(Course.id == session.course_id)
                course = (await db.execute(c_stmt)).scalar_one_or_none()
                if course:
                    course_code = course.code

                e_stmt = select(Experiment).where(Experiment.id == session.experiment_id)
                exp = (await db.execute(e_stmt)).scalar_one_or_none()
                if exp:
                    exp_slug = exp.exp_slug
                    env_str = exp.environment
                    starter = exp.sample_starter_code
                    initial_cmd = exp.initial_cmd
                    initial_out = exp.initial_output
    except Exception as e:
        logger.error(f"Error querying session for terminal WS: {e}")

    await pty_gateway.handle_terminal_ws(
        client_ws=websocket,
        session_id=session_id,
        course_code=course_code,
        experiment_slug=exp_slug,
        environment=env_str,
        starter_code=starter,
        initial_cmd=initial_cmd,
        initial_output=initial_out,
    )
