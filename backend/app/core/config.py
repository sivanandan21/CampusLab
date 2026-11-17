import os
from typing import List, Optional
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field


class Settings(BaseSettings):
    # Environment & Project
    APP_ENV: str = Field(default="development", description="development | staging | production")
    APP_NAME: str = "CampusLab Backend (KTU 2024 Scheme)"
    API_V1_PREFIX: str = "/api/v1"
    DEBUG: bool = Field(default=False)

    # AWS Configuration (ap-south-1)
    AWS_REGION: str = Field(default="ap-south-1")
    AWS_ACCESS_KEY_ID: Optional[str] = None
    AWS_SECRET_ACCESS_KEY: Optional[str] = None
    AWS_SESSION_TOKEN: Optional[str] = None
    USE_LIVE_AWS: bool = Field(default=False, description="Enable real AWS S3 / CloudWatch calls using local credentials")
    S3_ARTIFACT_BUCKET: str = Field(default="campuslab-artifacts-ap-south-1")
    S3_ENDPOINT_URL: Optional[str] = Field(default=None, description="LocalStack or MinIO custom endpoint")
    CLOUDWATCH_NAMESPACE: str = Field(default="CampusLab/Pilot")

    # STS Sandbox Broker
    STS_SANDBOX_ROLE_ARN: Optional[str] = Field(
        default="arn:aws:iam::123456789012:role/CampusLabStudentSandboxRole",
        description="IAM role assumed for temporary student AWS lab credentials"
    )

    # Security & Tokens
    APP_SECRET_KEY: str = Field(default="campuslab_master_secret_key_ktu_2024_pilot_testing_only_32_bytes_long")
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 24 hours for pilot
    SESSION_TOKEN_EXPIRE_MINUTES: int = 45

    # Database
    DATABASE_URL: str = Field(
        default="sqlite+aiosqlite:///./campuslab.db",
        description="PostgreSQL asyncpg URL in prod; SQLite aiosqlite fallback in local dev"
    )
    DB_POOL_SIZE: int = 20
    DB_MAX_OVERFLOW: int = 10
    DB_ECHO: bool = False

    # Worker Communication (Internal VPC)
    WORKER_API_URL: str = Field(default="http://localhost:8001", description="Private EC2 Lab Worker endpoint")
    WORKER_SHARED_SECRET: str = Field(default="worker_hmac_shared_secret_campuslab_ktu2024")
    SESSION_TTL_MINUTES: int = 45

    # CORS
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://*.campuslab.edu",
    ]

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=True,
    )


settings = Settings()
