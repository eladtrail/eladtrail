#!/usr/bin/env python3
"""
create-subtitles.py — יצירת כתוביות עבריות לסרטון
שימוש: python tools/scripts/create-subtitles.py

מייצר קובץ ASS עם:
- פונט Heebo Bold
- RTL עברית
- מיקום 10% מהתחתית
"""

import os, sys

def ask(prompt, default=None):
    suffix = f" [{default}]" if default else ""
    val = input(f"{prompt}{suffix}: ").strip()
    return val if val else default

def time_to_ass(srt_time):
    """ממיר זמן SRT (00:00:00,000) לפורמט ASS (0:00:00.00)"""
    srt_time = srt_time.replace(',', '.')
    parts = srt_time.split(':')
    h, m = int(parts[0]), int(parts[1])
    s_ms = parts[2].split('.')
    s, ms = int(s_ms[0]), int(s_ms[1]) if len(s_ms) > 1 else 0
    return f"{h}:{m:02d}:{s:02d}.{ms//10:02d}"

def create_ass(lines, output_path, platform="tiktok"):
    font_size = 28 if platform == "tiktok" else 22
    resolution = "1080,1920" if platform == "tiktok" else "1920,1080"
    play_res_x, play_res_y = resolution.split(',')

    header = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {play_res_x}
PlayResY: {play_res_y}
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Heebo,{font_size},&H00FFFFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,2,1,2,10,10,80,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    events = ""
    for line in lines:
        start_ass = time_to_ass(line['start'])
        end_ass   = time_to_ass(line['end'])
        text = line['text'].replace('\n', '\N')
        events += f"Dialogue: 0,{start_ass},{end_ass},Default,,0,0,0,,{{\an2}}{{\fscx100}}{{\fscy100}}{text}\n"

    with open(output_path, 'w', encoding='utf-8-sig') as f:
        f.write(header + events)
    print(f"✅ נוצר: {output_path}")

def parse_srt_input():
    """קלט ידני של שורות כתוביות"""
    print("\nהכנס שורות כתוביות (Enter ריק לסיום):")
    print("פורמט: START --> END | טקסט")
    print("דוגמה: 00:00:01,000 --> 00:00:04,000 | שלום, ברוכים הבאים לטיול!")
    print()

    lines = []
    idx = 1
    while True:
        entry = input(f"שורה {idx}: ").strip()
        if not entry:
            break
        try:
            time_part, text = entry.split('|', 1)
            start, end = [t.strip() for t in time_part.split('-->')]
            lines.append({'start': start, 'end': end, 'text': text.strip()})
            idx += 1
        except ValueError:
            print("  ⚠️  פורמט שגוי, נסה שוב")

    return lines

def main():
    print("\n=== יצירת כתוביות עבריות ל-eladtrail ===\n")

    name     = ask("שם הסרטון (לשם הקובץ)", "video")
    platform = ask("פלטפורמה (tiktok/youtube/reels)", "tiktok")
    out_dir  = ask("תיקיית פלט", os.path.expanduser("~/Desktop"))

    lines = parse_srt_input()
    if not lines:
        print("אין שורות — יוצא.")
        sys.exit(0)

    output_path = os.path.join(out_dir, f"{name}-subtitles.ass")
    create_ass(lines, output_path, platform)
    print(f"\n🎬 להוספת הכתוביות לוידאו:")
    print(f"   python tools/scripts/add-subtitles-to-video.sh {name}.mp4 {output_path}")

if __name__ == "__main__":
    main()
