#!/usr/bin/env bash
# ==============================================================================
# Build Script for CampusLab KTU 2024 Scheme Docker Images
# ==============================================================================
set -euo pipefail

echo "=========================================================="
echo " Building CampusLab KTU 2024 Scheme Container Images"
echo " Target: All Linux Commands + S1-S8 KTU CSE Lab Toolchains"
echo "=========================================================="

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "--> [1/2] Building campuslab/ktu-base-linux:2024..."
docker build \
  -t campuslab/ktu-base-linux:2024 \
  -t campuslab/ktu-base-linux:latest \
  -f "${SCRIPT_DIR}/ktu-base-linux/Dockerfile" \
  "${SCRIPT_DIR}/ktu-base-linux"

echo "--> [2/2] Building campuslab/ktu-aws-cli:2024..."
docker build \
  -t campuslab/ktu-aws-cli:2024 \
  -t campuslab/ktu-aws-cli:latest \
  -f "${SCRIPT_DIR}/ktu-aws-cli/Dockerfile" \
  "${SCRIPT_DIR}/ktu-aws-cli"

echo "=========================================================="
echo " Docker images built successfully!"
echo " Images: campuslab/ktu-base-linux:2024, campuslab/ktu-aws-cli:2024"
echo "=========================================================="
