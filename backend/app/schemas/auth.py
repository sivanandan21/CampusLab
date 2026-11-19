from typing import Optional
from pydantic import BaseModel, Field, field_validator


class LoginRequest(BaseModel):
    admission_number: Optional[str] = None
    admissionNo: Optional[str] = None
    password: str

    @property
    def identifier(self) -> str:
        return (self.admission_number or self.admissionNo or "").strip()


class UserResponse(BaseModel):
    id: str
    admission_number: str
    ktu_reg_id: Optional[str] = None
    email: str
    name: str
    role: str
    current_semester: str
    department: str
    college_id: str
    avatar_url: Optional[str] = None

    @field_validator("id", "admission_number", "email", "name", "role", "current_semester", "department", "college_id", mode="before")
    @classmethod
    def coerce_to_str(cls, v):
        return str(v) if v is not None else v

    class Config:
        from_attributes = True


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse
