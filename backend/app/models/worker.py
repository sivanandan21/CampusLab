import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Integer, Float, DateTime
from ..core.database import Base


class WorkerNode(Base):
    __tablename__ = "worker_nodes"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    hostname = Column(String(128), unique=True, nullable=False)
    ip_address = Column(String(64), nullable=False)
    port = Column(Integer, nullable=False, default=8001)
    status = Column(String(32), nullable=False, default="HEALTHY")
    active_containers = Column(Integer, nullable=False, default=0)
    max_containers = Column(Integer, nullable=False, default=30)
    cpu_utilization_pct = Column(Float, default=0.0)
    memory_utilization_pct = Column(Float, default=0.0)
    last_heartbeat = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
