#!/usr/bin/env python3
"""
create-post.py — יצירת פוסט בלוג חדש ל-eladtrail
שימוש: python tools/scripts/create-post.py
"""

import os, sys, re, datetime

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
POSTS_DIR  = os.path.join(ROOT, "src", "posts")
POSTS_DATA = os.path.join(ROOT, "src", "data", "posts.js")
APP_JSX    = os.path.join(ROOT, "src", "App.jsx")

def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    return text

def ask(prompt, default=None):
    suffix = f" [{default}]" if default else ""
    val = input(f"{prompt}{suffix}: ").strip()
    return val if val else default

def main():
    print("\n=== יצירת פוסט חדש ל-eladtrail ===\n")

    title   = ask("כותרת הפוסט (עברית)")
    slug    = ask("slug (אנגלית, ללא רווחים)", slugify(title) if title else "new-post")
    excerpt = ask("תיאור קצר (עברית, ~2 משפטים)")
    category = ask("קטגוריה", "israel")  # israel / world / tips / gear
    date    = ask("תאריך", datetime.datetime.now().strftime("%B %Y"))
    image   = ask("URL תמונה ראשית", "https://res.cloudinary.com/dcenbexvc/image/upload/v1/placeholder.jpg")

    jsx_path = os.path.join(POSTS_DIR, f"{slug}.jsx")
    if os.path.exists(jsx_path):
        print(f"\n⚠️  הקובץ {jsx_path} כבר קיים!")
        sys.exit(1)

    # --- יצירת קובץ JSX ---
    jsx_content = f'''import PostLayout from '../components/PostLayout'

export default function Post_{slug.replace('-','_')}() {{
  return (
    <PostLayout
      title="{title}"
      excerpt="{excerpt}"
      date="{date}"
      category="{category}"
      image="{image}"
    >
      {{/* ✍️ כתוב כאן את תוכן הפוסט */}}

      <p>
        כתוב כאן את הפסקה הראשונה של הפוסט...
      </p>

      <h2>כותרת ביניים</h2>
      <p>
        המשך הפוסט...
      </p>

      {{/* טיפים */}}
      <h2>טיפים שימושיים</h2>
      <ul>
        <li>טיפ ראשון</li>
        <li>טיפ שני</li>
        <li>טיפ שלישי</li>
      </ul>

      {{/* hashtags */}}
      <p className="text-sm text-gray-400 mt-8">
        #{slug.replace('-', ' #')}
      </p>
    </PostLayout>
  )
}}
'''

    with open(jsx_path, 'w', encoding='utf-8') as f:
        f.write(jsx_content)
    print(f"\n✅ נוצר: src/posts/{slug}.jsx")

    # --- הוספה ל-posts.js ---
    new_entry = f'''  {{
    slug:     '{slug}',
    title:    '{title}',
    excerpt:  '{excerpt}',
    image:    '{image}',
    category: '{category}',
    date:     '{date}',
  }},\n'''

    with open(POSTS_DATA, 'r', encoding='utf-8') as f:
        content = f.read()

    insert_after = "export const POSTS = ["
    content = content.replace(insert_after, insert_after + "\n" + new_entry, 1)

    with open(POSTS_DATA, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ עודכן: src/data/posts.js")

    # --- הוראות ל-App.jsx ---
    print(f"\n📋 הוסף ידנית ל-src/App.jsx:\n")
    var_name = "Post" + "".join(w.capitalize() for w in slug.split('-'))
    print(f"  import {var_name} from './posts/{slug}'")
    print(f"  <Route path=\"/posts/{slug}\" element={{<{var_name} />}} />")
    print(f"\n🎉 הפוסט '{title}' מוכן לעריכה!")

if __name__ == "__main__":
    main()
