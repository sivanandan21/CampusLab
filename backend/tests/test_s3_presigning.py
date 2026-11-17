import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_presigned_upload_url_generation(client: AsyncClient, student_token: str):
    """Test S3 Presigned PUT URL generation with admission number path isolation."""
    res = await client.post(
        "/api/v1/submissions/presign-upload",
        json={
            "filename": "process_tree.c",
            "content_type": "text/x-c",
            "file_size_bytes": 1024,
            "course_code": "PCCSL407",
            "experiment_id": "pccsl407-exp04",
        },
        headers={"Authorization": f"Bearer {student_token}"},
    )
    assert res.status_code == 200
    data = res.json()
    assert "upload_url" in data
    assert "submissions/24CS0142/PCCSL407/" in data["s3_key"]
    assert data["s3_key"].endswith("process_tree.c")
    assert data["expires_in_seconds"] > 0


@pytest.mark.asyncio
async def test_mock_s3_upload_and_download(client: AsyncClient):
    """Test local development mock S3 upload and download endpoints."""
    # Test upload
    test_key = "submissions/24CS0142/PCCSL407/test.c"
    up_res = await client.put(
        f"/api/v1/mock-s3/upload/{test_key}",
        content=b"#include <stdio.h>\nint main() { return 0; }",
        headers={"Content-Type": "text/x-c"},
    )
    assert up_res.status_code == 200
    assert up_res.json()["key"] == test_key

    # Test download
    dl_res = await client.get(f"/api/v1/mock-s3/download/{test_key}")
    assert dl_res.status_code == 200
    assert dl_res.headers["content-type"] == "application/pdf"
