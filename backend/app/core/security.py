import hmac
import hashlib
import time
from datetime import datetime, timedelta, timezone
from typing import Optional, Dict, Any
from jose import JWTError, jwt
from .config import settings


def hash_password(password: str) -> str:
    """Hash password using PBKDF2-HMAC-SHA256 (standard, cryptographically secure)."""
    salt = "campuslab_salt_ktu2024"
    iterations = 100_000
    key = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt.encode("utf-8"), iterations)
    return f"pbkdf2:sha256:{iterations}${salt}${key.hex()}"


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify password against stored PBKDF2 hash or fallback."""
    if not hashed_password:
        return False
    try:
        parts = hashed_password.split("$")
        if len(parts) == 3 and parts[0].startswith("pbkdf2:sha256:"):
            iterations = int(parts[0].split(":")[-1])
            salt = parts[1]
            stored_key = parts[2]
            computed_key = hashlib.pbkdf2_hmac("sha256", plain_password.encode("utf-8"), salt.encode("utf-8"), iterations)
            return hmac.compare_digest(stored_key, computed_key.hex())
    except Exception:
        pass
    
    # Simple demo fallback if seeded with plain / sha256
    computed = hashlib.sha256(plain_password.encode("utf-8")).hexdigest()
    return plain_password == hashed_password or computed == hashed_password


def create_access_token(data: Dict[str, Any], expires_delta: Optional[timedelta] = None) -> str:
    """Issue signed JWT bearer access token."""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire, "iat": datetime.now(timezone.utc)})
    encoded_jwt = jwt.encode(to_encode, settings.APP_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
    return encoded_jwt


def verify_access_token(token: str) -> Optional[Dict[str, Any]]:
    """Decode and verify signed JWT."""
    try:
        payload = jwt.decode(token, settings.APP_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        return payload
    except JWTError:
        return None


def generate_worker_hmac(body: bytes, timestamp: str) -> str:
    """Generate HMAC-SHA256 signature for internal EC2 worker API requests."""
    message = timestamp.encode("utf-8") + b":" + body
    return hmac.new(settings.WORKER_SHARED_SECRET.encode("utf-8"), message, hashlib.sha256).hexdigest()


def verify_worker_hmac(body: bytes, timestamp: str, signature: str) -> bool:
    """Verify HMAC-SHA256 signature on incoming worker requests (reject replay attacks > 5 mins)."""
    try:
        ts = int(timestamp)
        now = int(time.time())
        if abs(now - ts) > 300:  # 5 minutes replay window
            return False
        expected = generate_worker_hmac(body, timestamp)
        return hmac.compare_digest(expected, signature)
    except Exception:
        return False
