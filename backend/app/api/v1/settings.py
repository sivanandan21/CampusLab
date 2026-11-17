from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ...core.database import get_db
from ...core.rbac import get_current_user
from ...models.user import User
from ...models.settings_model import UserSettings
from ...schemas.settings import UserSettingsResponse, UserSettingsUpdateRequest

router = APIRouter(prefix="/settings", tags=["User Settings"])


@router.get("/me", response_model=UserSettingsResponse)
async def get_my_settings(
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    """Retrieve terminal and notification preferences for current student."""
    stmt = select(UserSettings).where(UserSettings.user_id == user.id)
    settings = (await db.execute(stmt)).scalar_one_or_none()
    if not settings:
        settings = UserSettings(user_id=user.id)
        db.add(settings)
        await db.commit()

    return UserSettingsResponse.model_validate(settings)


@router.patch("/me", response_model=UserSettingsResponse)
async def update_my_settings(
    req: UserSettingsUpdateRequest,
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    """Update terminal font size, theme, and notification toggles."""
    stmt = select(UserSettings).where(UserSettings.user_id == user.id)
    settings = (await db.execute(stmt)).scalar_one_or_none()
    if not settings:
        settings = UserSettings(user_id=user.id)
        db.add(settings)

    if req.terminal_theme is not None:
        settings.terminal_theme = req.terminal_theme
    if req.font_size is not None:
        settings.font_size = req.font_size
    if req.auto_reconnect is not None:
        settings.auto_reconnect = req.auto_reconnect
    if req.copy_on_select is not None:
        settings.copy_on_select = req.copy_on_select
    if req.deadline_reminders is not None:
        settings.deadline_reminders = req.deadline_reminders
    if req.grade_alerts is not None:
        settings.grade_alerts = req.grade_alerts

    await db.commit()
    await db.refresh(settings)
    return UserSettingsResponse.model_validate(settings)
