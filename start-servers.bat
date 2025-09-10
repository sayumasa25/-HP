@echo off
echo Starting servers for Hashimoto Shoes Website...
echo.

echo Starting API Server (Port 4000)...
start "API Server" cmd /k "cd /d %~dp0 && npm run server"

echo Waiting 3 seconds...
timeout /t 3 /nobreak >nul

echo Starting Next.js Server (Port 3001)...
start "Next.js Server" cmd /k "cd /d %~dp0 && npm run dev"

echo.
echo Servers are starting...
echo API Server: http://localhost:4000
echo Website: http://localhost:3001
echo.
echo Press any key to open the website in your browser...
pause >nul

echo Opening website...
start msedge http://localhost:3001

echo.
echo Both servers should now be running!
echo Close this window when you're done working.
