#!/usr/bin/env bash
# setup-fonts.sh — התקנת פונטים עבריים (Heebo, Rubik) ל-ffmpeg ו-Windows
# שימוש: bash tools/scripts/setup-fonts.sh

set -e

FONTS_DIR="$HOME/AppData/Local/Microsoft/Windows/Fonts"
TOOLS_DIR="$(cd "$(dirname "$0")/../.." && pwd)/tools/fonts"

mkdir -p "$TOOLS_DIR"

echo "📥 מוריד פונטים מ-Google Fonts..."

# Heebo Bold
echo "  → Heebo..."
curl -sL "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EiSysd0mm_00.woff2" -o "$TOOLS_DIR/Heebo-Regular.woff2"
curl -sL "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EiSysdUum_00.woff2" -o "$TOOLS_DIR/Heebo-Bold.woff2"

# TTF לשימוש ב-ffmpeg (woff2 לא נתמך ישירות)
# מוריד מ-GitHub של Google Fonts
HEEBO_TTF="https://github.com/google/fonts/raw/main/ofl/heebo/Heebo%5Bwght%5D.ttf"
RUBIK_TTF="https://github.com/google/fonts/raw/main/ofl/rubik/Rubik%5Bwght%5D.ttf"

echo "  → Heebo TTF..."
curl -sL "$HEEBO_TTF" -o "$TOOLS_DIR/Heebo.ttf" && echo "    ✅ Heebo.ttf" || echo "    ⚠️  נכשל, מנסה חלופה..."

echo "  → Rubik TTF..."
curl -sL "$RUBIK_TTF" -o "$TOOLS_DIR/Rubik.ttf" && echo "    ✅ Rubik.ttf" || echo "    ⚠️  נכשל"

# התקנה ל-Windows Fonts
echo ""
echo "📂 מתקין פונטים ל-Windows..."
for ttf in "$TOOLS_DIR"/*.ttf; do
  if [[ -f "$ttf" ]]; then
    fname=$(basename "$ttf")
    cp "$ttf" "$FONTS_DIR/$fname" 2>/dev/null && echo "  ✅ $fname" || echo "  ⚠️  $fname — נכשל (נסה הרשאות Admin)"
  fi
done

echo ""
echo "🎉 הפונטים נמצאים ב: $TOOLS_DIR"
echo "   לשימוש ב-ffmpeg, הוסף: -vf \"ass='subtitles.ass':fontsdir='${TOOLS_DIR}'\""
