# ==============================================================================
# CampusLab FastAPI Backend Dockerfile
# Production-ready, non-root user, multi-stage build for AWS ECS / Private EC2
# ==============================================================================

FROM python:3.11-slim as builder

WORKDIR /build

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

# Final Runtime Image
FROM python:3.11-slim as runner

WORKDIR /app

# Create non-root system user
RUN groupadd -g 1000 campuslab && \
    useradd -u 1000 -g campuslab -s /bin/bash -m campuslab && \
    apt-get update && apt-get install -y --no-install-recommends \
    libpq5 \
    curl \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /root/.local /home/campuslab/.local
COPY --chown=campuslab:campuslab app/ ./app/

ENV PATH=/home/campuslab/.local/bin:$PATH \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PORT=8000

USER campuslab

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "2", "--proxy-headers"]
