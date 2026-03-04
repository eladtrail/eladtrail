#!/usr/bin/env python3
"""
generate-social-content.py — יצירת תוכן סושיאל מדיה ל-eladtrail
שימוש: python tools/scripts/generate-social-content.py

מייצר:
- כיתוב TikTok (עד 150 תווים + hashtags)
- כיתוב Instagram (קצת יותר ארוך)
- תיאור YouTube (כולל timestamps וlinks)
"""

import os, sys, textwrap

HASHTAGS_ISRAEL = "#טיול #טיולים #ישראל #eladtrail #טיולבישראל #טבע #הייקינג #מסלול"
HASHTAGS_WORLD  = "#טיול #חוצלארץ #eladtrail #טיולים #טיולאירופה #backpacking"
HASHTAGS_TIPS   = "#טיפים #טיול #eladtrail #ציוד #טיולים #מתחילים"
HASHTAGS_GEAR   = "#ציוד #תרמיל #eladtrail #טיול #gear #hiking"

CATEGORY_TAGS = {
    "israel": HASHTAGS_ISRAEL,
    "world":  HASHTAGS_WORLD,
    "tips":   HASHTAGS_TIPS,
    "gear":   HASHTAGS_GEAR,
}

def ask(prompt, default=None):
    suffix = f" [{default}]" if default else ""
    val = input(f"{prompt}{suffix}: ").strip()
    return val if val else default

def gen_tiktok(title, excerpt, category, url):
    tags = CATEGORY_TAGS.get(category, HASHTAGS_ISRAEL)
    caption = f"{title} 🥾\n\n{excerpt[:120]}...\n\n{tags}"
    return caption

def gen_instagram(title, excerpt, category, url):
    tags = CATEGORY_TAGS.get(category, HASHTAGS_ISRAEL)
    caption = f"""{title} 🥾

{excerpt}

קרא את המאמר המלא בלינק בביו ⬆️
{url}

{tags}"""
    return caption

def gen_youtube_desc(title, excerpt, category, url):
    tags = CATEGORY_TAGS.get(category, HASHTAGS_ISRAEL).replace('#', '').replace(' ', ', ')
    desc = f"""{title}

{excerpt}

📖 מאמר מלא באתר: {url}

──────────────────────────────
⏱️ תוכן הסרטון:
00:00 - פתיח
00:30 - רקע ומיקום
02:00 - המסלול
05:00 - טיפים
08:00 - סיכום

──────────────────────────────
🔔 הירשמו לערוץ לעוד תוכן טיולים!
📸 Instagram: @eladtrail
🎵 TikTok: @eladtrail

תגיות: {tags}"""
    return desc

def main():
    print("\n=== יצירת תוכן סושיאל מדיה — eladtrail ===\n")

    title    = ask("כותרת הפוסט/סרטון")
    excerpt  = ask("תיאור קצר (2-3 משפטים)")
    category = ask("קטגוריה (israel/world/tips/gear)", "israel")
    slug     = ask("slug של הפוסט (לURL)")
    url      = f"https://eladtrail.com/posts/{slug}"

    separator = "\n" + "="*50 + "\n"

    print(separator)
    print("📱 TIKTOK:")
    print(separator)
    print(gen_tiktok(title, excerpt, category, url))

    print(separator)
    print("📸 INSTAGRAM:")
    print(separator)
    print(gen_instagram(title, excerpt, category, url))

    print(separator)
    print("▶️  YOUTUBE:")
    print(separator)
    print(gen_youtube_desc(title, excerpt, category, url))

    # שמירה לקובץ
    out_file = f"social-{slug}.txt"
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write("TIKTOK:\n" + gen_tiktok(title, excerpt, category, url))
        f.write("\n\nINSTAGRAM:\n" + gen_instagram(title, excerpt, category, url))
        f.write("\n\nYOUTUBE:\n" + gen_youtube_desc(title, excerpt, category, url))
    print(f"\n✅ נשמר: {out_file}")

if __name__ == "__main__":
    main()
