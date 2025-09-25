@echo off
echo Starting Portfolio Email System...
echo.

echo Starting Email Server (Backend)...
start "Email Server" cmd /k "cd /d c:\Users\ASUS\portfolio && node email-server.js"

timeout /t 3 /nobreak >nul

echo Starting Frontend Development Server...
start "Frontend Dev" cmd /k "cd /d c:\Users\ASUS\portfolio && npm run dev"

echo.
echo ✅ Both servers starting...
echo ✅ Backend Email API: http://localhost:3003/api/send-email  
echo ✅ Frontend Website: http://localhost:3000/
echo.
echo Your portfolio contact form is now ready!
pause