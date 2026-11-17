# ==============================================================================
# CampusLab EC2 Lab Worker Dockerfile
# Deployed in Private EC2 Subnet with Docker-in-Docker socket mounting
# ==============================================================================

FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    gcc \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY campuslab_worker/ ./campuslab_worker/

ENV PYTHONUNBUFFERED=1 \
    PORT=8001

EXPOSE 8001

HEALTHCHECK --interval=20s --timeout=3s --retries=3 \
    CMD curl -f http://localhost:8001/health || exit 1

CMD ["uvicorn", "campuslab_worker.main:app", "--host", "0.0.0.0", "--port", "8001", "--workers", "2"]
