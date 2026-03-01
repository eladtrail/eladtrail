# 🌿 EladTrail — מדריך הפעלה מלא

## מבנה הפרויקט

```
eladtrail/
├── index.html                  ← דף ה-HTML הבסיסי (לא נוגעים)
├── vite.config.js              ← הגדרות Vite (לא נוגעים)
├── tailwind.config.js          ← צבעים וגופנים של האתר
├── src/
│   ├── main.jsx                ← נקודת כניסה (לא נוגעים)
│   ├── App.jsx                 ← ניהול נתיבים (Routes)
│   ├── styles/index.css        ← CSS גלובלי
│   ├── components/
│   │   ├── Layout.jsx          ← מסגרת קבועה (Header+Footer)
│   │   ├── Header.jsx          ← ראש עמוד + ניווט
│   │   ├── Footer.jsx          ← תחתית
│   │   └── PostCard.jsx        ← כרטיס פוסט
│   ├── pages/
│   │   ├── Home.jsx            ← עמוד בית
│   │   ├── Blog.jsx            ← רשימת פוסטים
│   │   ├── About.jsx           ← אודות
│   │   └── Contact.jsx         ← צור קשר
│   ├── data/
│   │   └── posts.js            ← רשימת כל הפוסטים ← עדכן כאן!
│   └── posts/                  ← כל פוסט = קובץ JSX נפרד
│       ├── shvil-israel.jsx
│       ├── patagonia.jsx
│       ├── 5-tips-beginners.jsx
│       └── gear-bag-review.jsx
```

---

## 🚀 הרצה ראשונה (Windows)

```bash
# 1. פתח cmd בתיקיית הפרויקט
cd Desktop\eladtrail

# 2. התקן חבילות (פעם אחת בלבד)
npm install

# 3. הפעל שרת פיתוח
npm run dev
```

פתח דפדפן על: http://localhost:5173

---

## ➕ איך להוסיף פוסט חדש

### שלב 1 — צור קובץ JSX
העתק את הקובץ `src/posts/shvil-israel.jsx` ושנה את שמו לפוסט החדש.
לדוגמה: `src/posts/eilat-hike.jsx`

שנה את הנתונים בחלק META:
```js
const META = {
  title:    'כותרת הפוסט',
  category: '🇮🇱 ישראל',  // או 🌍 / 💡 / 🎒
  date:     'מרץ 2025',
  image:    'קישור לתמונה',
  imageAlt: 'תיאור התמונה',
}
```

### שלב 2 — הוסף לרשימה (data/posts.js)
```js
{
  slug:     'eilat-hike',         // ← שם הקובץ ללא .jsx
  title:    'כותרת הפוסט',
  excerpt:  'תיאור קצר...',
  image:    'קישור לתמונה',
  category: 'israel',             // israel | world | tips | gear
  date:     'מרץ 2025',
}
```

### שלב 3 — הוסף Route (App.jsx)
```jsx
import PostEilatHike from './posts/eilat-hike'
// ...
<Route path="/posts/eilat-hike" element={<PostEilatHike />} />
```

---

## 🌐 העלאה ל-Vercel

```bash
# 1. בנה את הפרויקט
npm run build

# 2. התקן Vercel CLI
npm install -g vercel

# 3. העלה
vercel

# לפריסות עתידיות
vercel --prod
```

**או דרך GitHub (מומלץ יותר):**
1. צור repo ב-GitHub ← "New repository"
2. העלה את הקוד:
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/eladtrail.git
git push -u origin main
```
3. ב-vercel.com ← "Add New Project" ← בחר את ה-repo ← Deploy!

מעתה כל `git push` יפרוס אוטומטית לאוויר 🎉
