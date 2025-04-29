@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

:: 1. 新しいファイル名のリストを配列として定義
set name0=1s
set name1=2s
set name2=3s
set name3=4s
set name4=5s
set name5=6s
set name6=7s
set name7=8s
set name8=9s
set name9=10
set name10=10s
set name11=20s
set name12=30s
set name13=40s
set name14=50s
set name15=60s
set name16=1m
set name17=3m
set name18=5m
set name19=10m
set name20=gover
set name21=sover
set name22=w

:: 2. 作成日時順にソートされたwav	ファイルを一時リネーム
set /a i=0
for /f "delims=" %%f in ('dir /b /a:-d /o:d /tc *.wav') do (
    ren "%%f" "temp_!i!.wav"
    set /a i+=1
)

:: 3. tempファイルを目的の名前にリネーム
set /a i=0
:loop
if exist temp_!i!.wav	 (
    call set newname=%%name%i%%%
    ren "temp_!i!.wav" "!newname!.wav"
    set /a i+=1
    goto :loop
)

echo リネーム完了！
pause
