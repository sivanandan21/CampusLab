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
            from sqlalchemy import select, text
            from .models.user import User
            existing_user = (await session.execute(select(User))).scalars().first()
            if not existing_user:
                logger.info("Database appears unseeded — seeding demo KTU 2024 Scheme users...")
                import hashlib
                def _hash(pwd: str) -> str:
                    salt = "campuslab_salt_ktu2024"
                    key = hashlib.pbkdf2_hmac("sha256", pwd.encode(), salt.encode(), 100_000)
                    return f"pbkdf2:sha256:100000${salt}${key.hex()}"
                demo_users = [
                    ("11111111-1111-1111-1111-111111111111", "24CS0142", "TVE24CS042", "adarsh.s@campuslab.edu", "Adarsh S", "student", "S4", "password123"),
                    ("22222222-2222-2222-2222-222222222222", "FAC081",   "KTUFAC081",  "priya.k@campuslab.edu",  "Dr. Priya K.", "faculty", "S4", "password123"),
                    ("33333333-3333-3333-3333-333333333333", "ADM001",   "KTUADM001",  "admin@campuslab.edu",    "CampusLab Administrator", "admin", "S4", "adminpassword123"),
                ]
                for uid, adm, reg, email, name, role, sem, pwd in demo_users:
                    await session.execute(text(
                        "INSERT INTO users (id, admission_number, ktu_reg_id, email, hashed_password, name, role, current_semester, department, college_id) "
                        "VALUES (:id, :adm, :reg, :email, :pwd, :name, :role::user_role_enum, :sem::semester_enum, 'Computer Science & Engineering', 'CET_KTU') "
                        "ON CONFLICT (admission_number) DO NOTHING"
                    ), {"id": uid, "adm": adm, "reg": reg, "email": email, "pwd": _hash(pwd), "name": name, "role": role, "sem": sem})
                await session.commit()
                logger.info("Demo users seeded successfully.")
    except Exception as e:
        logger.warning(f"Auto-seed skipped: {e}")

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
