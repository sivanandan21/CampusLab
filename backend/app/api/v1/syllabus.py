import json
from typing import List, Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ...core.database import get_db
from ...core.rbac import get_current_user
from ...models.course import Course
from ...aws.s3_storage import s3_service

router = APIRouter(prefix="/syllabus", tags=["KTU Syllabus"])


@router.get("")
async def get_syllabus_directory(
    semester: Optional[str] = Query(None, description="Semester e.g. S1, S4"),
    db: AsyncSession = Depends(get_db),
    user=Depends(get_current_user),
):
    """Retrieve official KTU 2024 Scheme B.Tech CSE syllabus courses, topics, and PDF links."""
    stmt = select(Course)
    if semester:
        stmt = stmt.where(Course.semester == semester.upper())

    courses = (await db.execute(stmt)).scalars().all()

    sem_val = (semester or "S4").upper()
    official_pdf_key = f"syllabus/KTU_2024_Scheme_BTech_CSE_{sem_val}_Official_Syllabus.pdf"
    pdf_url = s3_service.generate_presigned_get(
        s3_key=official_pdf_key,
        filename=f"KTU_2024_CSE_{sem_val}_Syllabus.pdf",
    )

    items = []
    for c in courses:
        topics = json.loads(c.topics_json) if c.topics_json else []
        items.append({
            "code": c.code,
            "title": c.title,
            "semester": c.semester,
            "credits": c.credits,
            "ltpr": c.ltpr,
            "evaluation": c.evaluation,
            "category": c.category,
            "topics": topics,
            "description": c.description,
        })

    return {
        "scheme": "KTU 2024 Scheme • B.Tech CSE",
        "semester": sem_val,
        "official_pdf_url": pdf_url,
        "courses": items,
    }
