#!/usr/bin/env bash
# add-subtitles-to-video.sh — הוספת כתוביות ASS לוידאו עם ffmpeg
# שימוש: bash tools/scripts/add-subtitles-to-video.sh input.mp4 subtitles.ass [output.mp4]

INPUT="$1"
SUBS="$2"
OUTPUT="${3:-${INPUT%.*}-subtitled.mp4}"

if [[ -z "$INPUT" || -z "$SUBS" ]]; then
  echo "שימוש: bash add-subtitles-to-video.sh input.mp4 subtitles.ass [output.mp4]"
  exit 1
fi

if [[ ! -f "$INPUT" ]]; then
  echo "❌ קובץ וידאו לא נמצא: $INPUT"
  exit 1
fi

if [[ ! -f "$SUBS" ]]; then
  echo "❌ קובץ כתוביות לא נמצא: $SUBS"
  exit 1
fi

echo "🎬 מוסיף כתוביות..."
echo "   וידאו:     $INPUT"
echo "   כתוביות:   $SUBS"
echo "   פלט:       $OUTPUT"

# המרת הנתיב ל-ffmpeg (forward slashes, escaping colons ב-Windows)
SUBS_FF=$(echo "$SUBS" | sed 's/\/\//g' | sed 's/:/\:/g')

ffmpeg -i "$INPUT" \
  -vf "ass='${SUBS_FF}'" \
  -c:a copy \
  -y "$OUTPUT"

if [[ $? -eq 0 ]]; then
  echo "✅ הושלם: $OUTPUT"
else
  echo "❌ שגיאה בהוספת הכתוביות"
  exit 1
fi
