from fastapi import APIRouter
from .auth import router as auth_router
from .courses import router as courses_router
from .experiments import router as experiments_router
from .sessions import router as sessions_router
from .submissions import router as submissions_router
from .results import router as results_router
from .syllabus import router as syllabus_router
from .settings import router as settings_router
from .admin import router as admin_router
from .terminal_ws import router as terminal_ws_router

api_v1_router = APIRouter(prefix="/api/v1")

api_v1_router.include_router(auth_router)
api_v1_router.include_router(courses_router)
api_v1_router.include_router(experiments_router)
api_v1_router.include_router(sessions_router)
api_v1_router.include_router(submissions_router)
api_v1_router.include_router(results_router)
api_v1_router.include_router(syllabus_router)
api_v1_router.include_router(settings_router)
api_v1_router.include_router(admin_router)
api_v1_router.include_router(terminal_ws_router)
