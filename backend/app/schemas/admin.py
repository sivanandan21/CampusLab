from typing import List, Optional, Dict, Any
from datetime import datetime
from pydantic import BaseModel


class WorkerNodeResponse(BaseModel):
    id: str
    hostname: str
    ip_address: str
    status: str
    active_containers: int
    max_containers: int
    cpu_utilization_pct: float
    memory_utilization_pct: float
    last_heartbeat: datetime

    class Config:
        from_attributes = True


class AuditEventResponse(BaseModel):
    id: str
    request_id: str
    admission_number: Optional[str] = None
    event_type: str
    ip_address: Optional[str] = None
    details: Dict[str, Any] = {}
    created_at: datetime

    class Config:
        from_attributes = True


class TelemetryResponse(BaseModel):
    active_sessions_count: int
    active_workers_count: int
    total_containers_running: int
    avg_cpu_pct: float
    cloudwatch_namespace: str
    aws_region: str
    storage_bucket: str
