// posts/shvil-israel.jsx
// ============================================================
//  🗒️  תבנית לפוסט — COPY THIS FILE לכל פוסט חדש!
//
//  שלבים להוספת פוסט חדש:
//  1. העתק קובץ זה ל- src/posts/שם-הפוסט.jsx
//  2. שנה את הנתונים בחלק "META"
//  3. כתוב את התוכן בחלק "CONTENT" (בתוך <article>)
//  4. ב- src/App.jsx: הוסף import + Route
//  5. ב- src/data/posts.js: הוסף אובייקט לרשימה
// ============================================================

// ===== META — שנה את הנתונים האלה =====
const META = {
  title:    'שביל ישראל — הסיפור האמיתי',
  category: '🇮🇱 ישראל',
  date:     'פברואר 2025',
  image:    'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1200&q=80',
  imageAlt: 'שביל ישראל נוף',
}

export default function PostShvilIsrael() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">

      {/* ===== כותרת הפוסט ===== */}
      <header className="mb-10">
        <span className="category-tag mb-4 inline-block">{META.category}</span>
        <h1 className="font-display text-4xl md:text-5xl text-forest-dark leading-tight mb-3">
          {META.title}
        </h1>
        <p className="text-gray-400 text-sm">{META.date}</p>
      </header>

      {/* ===== תמונת שער ===== */}
      <img
        src={META.image}
        alt={META.imageAlt}
        className="w-full h-80 object-cover rounded-2xl shadow-lg mb-10"
      />

      {/* ===== CONTENT — כתוב כאן את תוכן הפוסט =====
           השתמש ב:
           <h2>  לכותרות משנה
           <p>   לפסקאות טקסט
           <img> לתמונות נוספות
           <ul> / <li> לרשימות
      ===== */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

        <p>
          שביל ישראל — 1,100 ק"מ מדן לאילת. על הנייר זה נשמע כמו הרפתקה.
          במציאות, זה הרבה יותר מסובך, כואב ומדהים ממה שחשבתי.
        </p>

        <h2 className="font-display text-2xl text-forest-dark mt-8">
          למה בכלל לצאת לשביל?
        </h2>
        <p>
          {/* ← הוסף כאן את הטקסט שלך */}
          כי יש רגעים שרק ההליכה יכולה ללמד אותך אותם.
          כי אחרי שבוע על השביל אתה מבין מה באמת חשוב לך בחיים.
        </p>

        <h2 className="font-display text-2xl text-forest-dark mt-8">
          הציוד שלקחתי
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>תרמיל 45 ליטר</li>
          <li>שק שינה עד 5 מעלות</li>
          <li>נעלי טיולים עמידות למים</li>
          <li>מסנן מים Sawyer Squeeze</li>
        </ul>

        {/* ===== תמונה נוספת — אופציונלי ===== */}
        {/*
        <img
          src="קישור לתמונה"
          alt="תיאור"
          className="w-full rounded-xl shadow"
        />
        */}

        <p>
          {/* המשך הטקסט... */}
          עוד תוכן יתווסף כאן בהמשך.
        </p>

      </div>

      {/* ===== חזרה לבלוג ===== */}
      <div className="mt-14 pt-8 border-t border-gray-200">
        <a href="/blog" className="text-forest-accent font-semibold hover:underline">
          ← חזרה לכל הפוסטים
        </a>
      </div>

    </article>
  )
}
