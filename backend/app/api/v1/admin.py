import json
from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, desc

from ...core.database import get_db
from ...core.rbac import require_admin
from ...core.config import settings
from ...models.worker import WorkerNode
from ...models.audit import AuditEvent
from ...models.session import LabSession
from ...schemas.admin import WorkerNodeResponse, AuditEventResponse, TelemetryResponse

router = APIRouter(prefix="/admin", tags=["Administration & Telemetry"])


@router.get("/workers", response_model=List[WorkerNodeResponse])
async def list_worker_nodes(
    db: AsyncSession = Depends(get_db),
    admin=Depends(require_admin),
):
    """List Private EC2 Worker Pool nodes, container counts, and utilization."""
    stmt = select(WorkerNode).order_by(WorkerNode.created_at.desc())
    nodes = (await db.execute(stmt)).scalars().all()
    return [WorkerNodeResponse.model_validate(n) for n in nodes]


@router.get("/audit-events", response_model=List[AuditEventResponse])
async def list_audit_events(
    db: AsyncSession = Depends(get_db),
    admin=Depends(require_admin),
):
    """List recent CloudWatch-compliant security and audit events."""
    stmt = select(AuditEvent).order_by(desc(AuditEvent.created_at)).limit(100)
    events = (await db.execute(stmt)).scalars().all()

    resp = []
    for e in events:
        details = json.loads(e.details_json) if e.details_json else {}
        resp.append(
            AuditEventResponse(
                id=e.id,
                request_id=e.request_id,
                admission_number=e.admission_number,
                event_type=e.event_type,
                ip_address=e.ip_address,
                details=details,
                created_at=e.created_at,
            )
        )
    return resp


@router.get("/telemetry", response_model=TelemetryResponse)
async def get_system_telemetry(
    db: AsyncSession = Depends(get_db),
    admin=Depends(require_admin),
):
    """Aggregate live platform telemetry for AWS CloudWatch dashboards."""
    active_sessions_stmt = select(LabSession).where(LabSession.status.in_(["READY", "RUNNING"]))
    active_sessions = len((await db.execute(active_sessions_stmt)).scalars().all())

    workers_stmt = select(WorkerNode).where(WorkerNode.status == "HEALTHY")
    workers = (await db.execute(workers_stmt)).scalars().all()

    total_containers = sum(w.active_containers for w in workers)
    avg_cpu = sum(w.cpu_utilization_pct for w in workers) / len(workers) if workers else 0.0

    return TelemetryResponse(
        active_sessions_count=active_sessions,
        active_workers_count=len(workers),
        total_containers_running=total_containers,
        avg_cpu_pct=avg_cpu,
        cloudwatch_namespace=settings.CLOUDWATCH_NAMESPACE,
        aws_region=settings.AWS_REGION,
        storage_bucket=settings.S3_ARTIFACT_BUCKET,
    )
