@echo off
echo Starting development server on port 3004...
echo Waiting for server to be ready...
echo.
start "Next.js Dev Server" cmd /k "npx next dev -p 3004"

:wait
timeout /t 2 /nobreak >nul
netstat -ano | findstr :3004 >nul
if errorlevel 1 (
    echo Server not ready yet, waiting...
    goto wait
)

echo Server is ready! Opening browser...
timeout /t 3 /nobreak >nul
start "" "http://localhost:3004"
