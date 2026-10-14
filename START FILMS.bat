@echo off
setlocal
cd /d "%~dp0"
title Katana Studios - local preview server
echo Katana Studios preview server
echo Keep this window open while viewing the site.
echo Open this address in your browser: http://127.0.0.1:8000/katana-studio-colorful.html
echo Press Ctrl+C here to stop the server.
echo.
py -m http.server 8000 --bind 127.0.0.1
echo.
echo The preview server has stopped. If the port was already in use, close the other server and try again.
pause
endlocal

