@echo off
REM ==============================================================================
REM CampusLab Windows Nginx Launcher
REM ==============================================================================
echo ==========================================================
echo  Starting CampusLab Nginx Reverse Proxy (Windows)
echo ==========================================================

where nginx >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Nginx not found in PATH.
    echo [INFO] Installing Nginx via winget...
    winget install nginxinc.nginx --accept-source-agreements --accept-package-agreements
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Automatic winget installation failed.
        echo Please download Nginx for Windows from https://nginx.org/en/download.html
        pause
        exit /b 1
    )
)

echo [INFO] Launching Nginx with CampusLab config...
nginx.exe -c "%~dp0windows-nginx.conf"
echo [SUCCESS] Nginx running at http://localhost
echo Routing:
echo   - Frontend:  http://localhost/           -^> http://127.0.0.1:5173
echo   - API:       http://localhost/api/v1/    -^> http://127.0.0.1:8000/api/v1/
echo   - Terminal:  ws://localhost/api/v1/terminal/ws -^> ws://127.0.0.1:8000/api/v1/terminal/ws
pause
