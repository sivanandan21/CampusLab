from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ...core.database import get_db
from ...core.security import verify_password, create_access_token
from ...core.rbac import get_current_user
from ...models.user import User
from ...models.settings_model import UserSettings
from ...schemas.auth import LoginRequest, TokenResponse, UserResponse
from ...services.audit_service import audit_service

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/login", response_model=TokenResponse)
async def login(req: LoginRequest, request: Request, db: AsyncSession = Depends(get_db)):
    """Authenticate student or faculty using Admission Number & Password."""
    adm_no = req.identifier.upper()
    if not adm_no:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Admission number is required.",
        )

    stmt = select(User).where(User.admission_number == adm_no)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()

    client_ip = request.client.host if request.client else "127.0.0.1"

    if not user or not verify_password(req.password, user.hashed_password):
        try:
            await audit_service.log_event(
                db=db,
                request_id="req-login-fail",
                event_type="AUTH_FAILURE",
                admission_number=adm_no,
                ip_address=client_ip,
                details={"reason": "Invalid admission number or password"},
            )
        except Exception:
            pass
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid admission number or password. Check credentials and retry.",
        )

    # Snapshot user fields NOW before any audit write that could dirty the session
    user_id_str = str(user.id)
    user_adm = str(user.admission_number)
    user_role = str(user.role)
    user_name = str(user.name)
    user_sem = str(user.current_semester)
    user_dept = str(user.department)
    user_college = str(user.college_id)
    user_email = str(user.email)
    user_ktu = str(user.ktu_reg_id) if user.ktu_reg_id else None
    user_avatar = str(user.avatar_url) if user.avatar_url else None

    # Issue access token
    token = create_access_token(
        data={
            "sub": user_id_str,
            "admission_number": user_adm,
            "role": user_role,
            "name": user_name,
            "semester": user_sem,
        }
    )

    # Build response before audit (audit uses savepoint, failure is non-fatal)
    response = TokenResponse(
        access_token=token,
        token=token,
        token_type="bearer",
        user=UserResponse(
            id=user_id_str,
            admission_number=user_adm,
            role=user_role,
            name=user_name,
            current_semester=user_sem,
            department=user_dept,
            college_id=user_college,
            email=user_email,
            ktu_reg_id=user_ktu,
            avatar_url=user_avatar,
        ),
    )

    await audit_service.log_event(
        db=db,
        request_id="req-login-ok",
        event_type="AUTH_SUCCESS",
        user_id=user_id_str,
        admission_number=user_adm,
        ip_address=client_ip,
        details={"role": user_role},
    )

    return response


@router.post("/logout")
async def logout(current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    """Student logout."""
    await audit_service.log_event(
        db=db,
        request_id="req-logout",
        event_type="AUTH_LOGOUT",
        user_id=current_user.id,
        admission_number=current_user.admission_number,
    )
    return {"message": "Logged out successfully"}


@router.get("/me", response_model=UserResponse)
async def get_me(current_user: User = Depends(get_current_user)):
    """Get active student profile."""
    return UserResponse.model_validate(current_user)
