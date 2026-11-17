import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_student_login_success(client: AsyncClient):
    """Test valid student authentication using Admission Number."""
    res = await client.post(
        "/api/v1/auth/login",
        json={"admission_number": "24CS0142", "password": "password123"},
    )
    assert res.status_code == 200
    data = res.json()
    assert "access_token" in data
    assert data["user"]["admission_number"] == "24CS0142"
    assert data["user"]["role"] == "student"


@pytest.mark.asyncio
async def test_student_login_invalid_password(client: AsyncClient):
    """Test rejected authentication on invalid password."""
    res = await client.post(
        "/api/v1/auth/login",
        json={"admission_number": "24CS0142", "password": "wrongpassword"},
    )
    assert res.status_code == 401
    assert "Invalid admission number or password" in res.json()["detail"]


@pytest.mark.asyncio
async def test_rbac_admin_endpoint_forbidden_for_student(client: AsyncClient, student_token: str):
    """Test that student token is rejected with HTTP 403 on admin-only route."""
    res = await client.get(
        "/api/v1/admin/workers",
        headers={"Authorization": f"Bearer {student_token}"},
    )
    assert res.status_code == 403


@pytest.mark.asyncio
async def test_get_current_user_profile(client: AsyncClient, student_token: str):
    """Test retrieving authenticated user profile."""
    res = await client.get(
        "/api/v1/auth/me",
        headers={"Authorization": f"Bearer {student_token}"},
    )
    assert res.status_code == 200
    assert res.json()["admission_number"] == "24CS0142"
