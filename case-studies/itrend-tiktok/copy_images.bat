@echo off
chcp 65001 >nul
echo Copying TikTok Case Study images...
set "DEST=C:\Users\MA-4\Downloads\case-studies\itrend-tiktok\evidence"
if not exist "%DEST%" mkdir "%DEST%"
copy /Y "C:\Users\MA-4\.gemini\antigravity\brain\193afc1c-ff7a-4877-8cf3-60c9c7aac8fd\.user_uploaded\media_1793193608266_513d3441.png" "%DEST%\itrend_logo.png"
copy /Y "C:\Users\MA-4\.gemini\antigravity\brain\193afc1c-ff7a-4877-8cf3-60c9c7aac8fd\.user_uploaded\media_1793193005283_90e7422e.png" "%DEST%\evidence_spend_impressions.png"
copy /Y "C:\Users\MA-4\.gemini\antigravity\brain\193afc1c-ff7a-4877-8cf3-60c9c7aac8fd\.user_uploaded\media_1793193048055_ee376879.png" "%DEST%\evidence_conversions_cost.png"
copy /Y "C:\Users\MA-4\.gemini\antigravity\brain\193afc1c-ff7a-4877-8cf3-60c9c7aac8fd\.user_uploaded\media_1793193034080_323229e8.png" "%DEST%\evidence_leads.png"
echo.
echo ====================================================
echo SUCCESS! All images copied into evidence folder!
echo ====================================================
timeout /t 3 >nul
