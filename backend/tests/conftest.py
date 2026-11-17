import pytest
import asyncio
from typing import AsyncGenerator
from httpx import AsyncClient, ASGITransport
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker

from backend.app.main import app
from backend.app.core.database import Base, get_db
from backend.app.core.security import hash_password
from backend.app.models.user import User

TEST_DB_URL = "sqlite+aiosqlite:///:memory:"

test_engine = create_async_engine(TEST_DB_URL, echo=False)
TestSessionLocal = async_sessionmaker(bind=test_engine, class_=AsyncSession, expire_on_commit=False)


@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()


@pytest.fixture(autouse=True)
async def setup_test_db():
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    
    # Seed test users
    async with TestSessionLocal() as db:
        student = User(
            id="11111111-1111-1111-1111-111111111111",
            admission_number="24CS0142",
            ktu_reg_id="TVE24CS042",
            email="adarsh.s@campuslab.edu",
            hashed_password=hash_password("password123"),
            name="Adarsh S",
            role="student",
            current_semester="S4",
            department="CSE",
        )
        faculty = User(
            id="22222222-2222-2222-2222-222222222222",
            admission_number="FAC081",
            ktu_reg_id="KTUFAC081",
            email="priya.k@campuslab.edu",
            hashed_password=hash_password("password123"),
            name="Dr. Priya K.",
            role="faculty",
            current_semester="S4",
            department="CSE",
        )
        db.add_all([student, faculty])
        await db.commit()

    yield

    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)


async def override_get_db() -> AsyncGenerator[AsyncSession, None]:
    async with TestSessionLocal() as session:
        yield session


app.dependency_overrides[get_db] = override_get_db


@pytest.fixture
async def client() -> AsyncGenerator[AsyncClient, None]:
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac


@pytest.fixture
async def student_token(client: AsyncClient) -> str:
    res = await client.post(
        "/api/v1/auth/login",
        json={"admission_number": "24CS0142", "password": "password123"},
    )
    return res.json()["access_token"]


@pytest.fixture
async def faculty_token(client: AsyncClient) -> str:
    res = await client.post(
        "/api/v1/auth/login",
        json={"admission_number": "FAC081", "password": "password123"},
    )
    return res.json()["access_token"]
