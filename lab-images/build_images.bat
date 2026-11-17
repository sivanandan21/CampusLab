@echo off
REM ==============================================================================
REM Windows Build Script for CampusLab KTU 2024 Scheme Docker Images
REM ==============================================================================
echo ==========================================================
echo  Building CampusLab KTU 2024 Scheme Container Images
echo  Target: All Linux Commands + S1-S8 KTU CSE Lab Toolchains
echo ==========================================================

set SCRIPT_DIR=%~dp0

echo --^> [1/2] Building campuslab/ktu-base-linux:2024...
docker build -t campuslab/ktu-base-linux:2024 -t campuslab/ktu-base-linux:latest -f "%SCRIPT_DIR%ktu-base-linux\Dockerfile" "%SCRIPT_DIR%ktu-base-linux"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to build campuslab/ktu-base-linux:2024
    exit /b %ERRORLEVEL%
)

echo --^> [2/2] Building campuslab/ktu-aws-cli:2024...
docker build -t campuslab/ktu-aws-cli:2024 -t campuslab/ktu-aws-cli:latest -f "%SCRIPT_DIR%ktu-aws-cli\Dockerfile" "%SCRIPT_DIR%ktu-aws-cli"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to build campuslab/ktu-aws-cli:2024
    exit /b %ERRORLEVEL%
)

echo ==========================================================
echo  Docker images built successfully!
echo  Images: campuslab/ktu-base-linux:2024, campuslab/ktu-aws-cli:2024
echo ==========================================================
