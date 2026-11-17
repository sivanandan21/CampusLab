import psutil
from typing import Dict, Any
from .runtime.docker_manager import docker_manager


def get_worker_health_metrics() -> Dict[str, Any]:
    """Retrieve private EC2 worker host system utilization and container counts."""
    cpu_pct = psutil.cpu_percent(interval=None)
    mem = psutil.virtual_memory()
    disk = psutil.disk_usage("/")
    active_containers = docker_manager.get_active_container_count()

    return {
        "status": "HEALTHY" if cpu_pct < 90.0 and mem.percent < 90.0 else "DEGRADED",
        "cpu_utilization_pct": cpu_pct,
        "memory_utilization_pct": mem.percent,
        "memory_available_mb": round(mem.available / (1024 * 1024), 1),
        "disk_free_gb": round(disk.free / (1024 * 1024 * 1024), 2),
        "active_containers": active_containers,
        "max_containers": 30,
    }
