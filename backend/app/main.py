import asyncio
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, Response, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from .core.config import settings
from .core.database import init_db, check_db_health, AsyncSessionLocal
from .aws.cloudwatch import setup_cloudwatch_logging
from .api.v1.router import api_v1_router
from .workers.ttl_sweeper import run_ttl_sweeper

# Initialize CloudWatch-compatible structured logging
setup_cloudwatch_logging()
logger = logging.getLogger("campuslab.main")


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application startup and shutdown lifespan context manager."""
    logger.info(f"Starting {settings.APP_NAME} in [{settings.APP_ENV}] mode (AWS Region: {settings.AWS_REGION})...")

    # Initialize database tables
    try:
        await init_db()
    except Exception as e:
        logger.error(f"Database initialization warning: {e}")

    # Auto-seed database if empty (useful for local development)
    try:
        async with AsyncSessionLocal() as session:
            from sqlalchemy import select
            from .models.user import User
            existing_user = (await session.execute(select(User))).scalars().first()
            if not existing_user:
                logger.info("Database appears unseeded. Seeding demo KTU 2024 Scheme users...")
                from database.seed_ktu_2024_cse import DEMO_USERS, hash_password
                for u in DEMO_USERS:
                    user_obj = User(
                        id=u["id"],
                        admission_number=u["admission_number"],
                        ktu_reg_id=u["ktu_reg_id"],
                        email=u["email"],
                        hashed_password=hash_password(u["password"]),
                        name=u["name"],
                        role=u["role"],
                        current_semester=u["current_semester"],
                        department=u["department"],
                        college_id=u["college_id"],
                    )
                    session.add(user_obj)
                await session.commit()
                logger.info("Demo users seeded.")
    except Exception as e:
        logger.warning(f"Auto-seed check: {e}")

    # Launch background TTL Sweeper task
    sweeper_task = asyncio.create_task(run_ttl_sweeper(interval_seconds=60))

    yield

    # Shutdown
    logger.info("Shutting down CampusLab Backend...")
    sweeper_task.cancel()
    try:
        await sweeper_task
    except asyncio.CancelledError:
        pass


app = FastAPI(
    title=settings.APP_NAME,
    description="CampusLab AWS Backend for KTU 2024 Scheme B.Tech CSE Practical Platform",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS or ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Attach API v1 Router
app.include_router(api_v1_router)


@app.get("/health", tags=["Health"])
async def health_check():
    """Health check endpoint for AWS ALB target group."""
    db_healthy = await check_db_health()
    status_code = status.HTTP_200_OK if db_healthy else status.HTTP_503_SERVICE_UNAVAILABLE

    return JSONResponse(
        status_code=status_code,
        content={
            "status": "healthy" if db_healthy else "degraded",
            "environment": settings.APP_ENV,
            "region": settings.AWS_REGION,
            "database": "connected" if db_healthy else "disconnected",
        },
    )


# Local development Mock S3 Endpoints
@app.put("/api/v1/mock-s3/upload/{key:path}", tags=["Mock S3"])
async def mock_s3_upload(key: str, request: Request):
    """Simulates S3 Presigned PUT upload for local development."""
    body = await request.body()
    logger.info(f"[Mock S3 PUT] Received artifact upload: key={key}, size={len(body)} bytes")
    return {"message": "Artifact uploaded successfully to mock S3", "key": key, "size": len(body)}


@app.get("/api/v1/mock-s3/download/{key:path}", tags=["Mock S3"])
async def mock_s3_download(key: str):
    """Simulates S3 Presigned GET download for local development."""
    logger.info(f"[Mock S3 GET] Generating download stream for key: {key}")
    return Response(
        content=f"%PDF-1.4\n% Mock KTU 2024 Syllabus/Report for {key}\n%%EOF",
        media_type="application/pdf",
        headers={"Content-Disposition": f'inline; filename="{key.split("/")[-1]}"'},
    )
