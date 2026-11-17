import logging
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base
from .config import settings

logger = logging.getLogger("campuslab.database")

# Handle SQLite vs PostgreSQL async drivers gracefully
is_sqlite = settings.DATABASE_URL.startswith("sqlite")

engine_kwargs = {
    "echo": settings.DB_ECHO,
    "future": True,
}

if not is_sqlite:
    engine_kwargs.update({
        "pool_size": settings.DB_POOL_SIZE,
        "max_overflow": settings.DB_MAX_OVERFLOW,
        "pool_pre_ping": True,
    })
    # If using AWS RDS PostgreSQL in staging/production, enforce SSL
    if settings.APP_ENV in ("staging", "production") and "sslmode" not in settings.DATABASE_URL:
        # asyncpg handles ssl via connect_args
        engine_kwargs["connect_args"] = {"ssl": "require"}

engine = create_async_engine(settings.DATABASE_URL, **engine_kwargs)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)

Base = declarative_base()


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """FastAPI dependency yielding an async database session with automatic rollback on error."""
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()


async def init_db() -> None:
    """Initialize database tables on application startup (essential for SQLite local dev)."""
    async with engine.begin() as conn:
        # Import all models to ensure they are registered with Base.metadata
        from ..models import user, course, experiment, session, submission, settings_model, audit, worker  # noqa
        await conn.run_sync(Base.metadata.create_all)
    logger.info("Database initialized successfully.")


async def check_db_health() -> bool:
    """Check database connectivity."""
    from sqlalchemy import text
    try:
        async with engine.connect() as conn:
            await conn.execute(text("SELECT 1"))
        return True
    except Exception as e:
        logger.error(f"Database health check failed: {e}")
        return False
