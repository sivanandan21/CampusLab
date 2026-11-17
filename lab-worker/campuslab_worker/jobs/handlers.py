import os
import hmac
import hashlib
import time
from typing import Dict, Any, List
from fastapi import APIRouter, Header, HTTPException, WebSocket, status, Request
from pydantic import BaseModel

from ..runtime.docker_manager import docker_manager
from ..runtime.validator import lab_validator
from ..runtime.pty_streamer import pty_streamer

WORKER_SHARED_SECRET = os.getenv("WORKER_SHARED_SECRET", "worker_hmac_shared_secret_campuslab_ktu2024")

router = APIRouter(prefix="/internal/v1", tags=["Internal Worker Endpoints"])


def verify_backend_hmac(body: bytes, timestamp: str, signature: str) -> bool:
    """Verify HMAC signature sent from backend."""
    try:
        ts = int(timestamp)
        now = int(time.time())
        if abs(now - ts) > 300:  # 5 min window
            return False
        message = timestamp.encode("utf-8") + b":" + body
        expected = hmac.new(WORKER_SHARED_SECRET.encode("utf-8"), message, hashlib.sha256).hexdigest()
        return hmac.compare_digest(expected, signature)
    except Exception:
        return False


class ContainerCreatePayload(BaseModel):
    session_id: str
    admission_number: str
    course_code: str
    experiment_slug: str
    environment: str
    resource_profile: str = "standard_student"


class ContainerStopPayload(BaseModel):
    container_id: str


class ContainerValidatePayload(BaseModel):
    container_id: str
    commands: List[str] = []


@router.post("/containers/create")
async def create_container_endpoint(
    payload: ContainerCreatePayload,
    request: Request,
    x_campuslab_worker_timestamp: str = Header(None),
    x_campuslab_worker_signature: str = Header(None),
):
    """Internal endpoint: spin up container on this EC2 worker node."""
    body = await request.body()
    if x_campuslab_worker_signature:
        if not verify_backend_hmac(body, x_campuslab_worker_timestamp, x_campuslab_worker_signature):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid HMAC signature")

    result = docker_manager.create_lab_container(
        session_id=payload.session_id,
        admission_number=payload.admission_number,
        course_code=payload.course_code,
        experiment_slug=payload.experiment_slug,
        environment=payload.environment,
    )
    return result


@router.post("/containers/stop")
async def stop_container_endpoint(
    payload: ContainerStopPayload,
    request: Request,
    x_campuslab_worker_timestamp: str = Header(None),
    x_campuslab_worker_signature: str = Header(None),
):
    """Internal endpoint: stop container."""
    body = await request.body()
    if x_campuslab_worker_signature:
        if not verify_backend_hmac(body, x_campuslab_worker_timestamp, x_campuslab_worker_signature):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid HMAC signature")

    success = docker_manager.stop_lab_container(payload.container_id)
    return {"success": success, "container_id": payload.container_id}


@router.post("/containers/validate")
async def validate_container_endpoint(
    payload: ContainerValidatePayload,
    request: Request,
    x_campuslab_worker_timestamp: str = Header(None),
    x_campuslab_worker_signature: str = Header(None),
):
    """Internal endpoint: run test suite in container."""
    body = await request.body()
    if x_campuslab_worker_signature:
        if not verify_backend_hmac(body, x_campuslab_worker_timestamp, x_campuslab_worker_signature):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid HMAC signature")

    results = lab_validator.validate_container(payload.container_id, payload.commands)
    return results


@router.websocket("/pty-ws/{session_id}")
async def worker_pty_ws_endpoint(websocket: WebSocket, session_id: str):
    """Worker PTY WebSocket stream."""
    await pty_streamer.stream_pty(websocket, session_id)
