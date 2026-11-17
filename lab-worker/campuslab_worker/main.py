import logging
from fastapi import FastAPI
from .jobs.handlers import router as internal_router
from .health import get_worker_health_metrics

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger("campuslab.worker.main")

app = FastAPI(
    title="CampusLab EC2 Lab Worker Service",
    description="Internal microservice deployed in Private EC2 Subnet for container lifecycle & PTY streaming",
    version="1.0.0",
)

app.include_router(internal_router)


@app.get("/health", tags=["Health"])
async def worker_health():
    """Worker node health & container capacity check."""
    return get_worker_health_metrics()


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("campuslab_worker.main:app", host="0.0.0.0", port=8001, log_level="info")
