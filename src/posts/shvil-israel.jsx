// posts/shvil-israel.jsx
// ============================================================
//  🗒️  תבנית לפוסט — COPY THIS FILE לכל פוסט חדש!
//
//  שלבים:
//  1. העתק קובץ זה ל- src/posts/שם-הפוסט.jsx
//  2. שנה את META
//  3. כתוב תוכן בין תגי PostLayout
//  4. הוסף import + Route ב-App.jsx
//  5. הוסף אובייקט ל-data/posts.js
// ============================================================
import PostLayout, { InlineImage } from '../components/PostLayout'

const META = {
  title:    'שביל ישראל — הסיפור האמיתי',
  category: '🇮🇱 ישראל',
  date:     'פברואר 2025',
  readTime: 6,
  image:    'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1200&q=80',
  imageAlt: 'שביל ישראל נוף',
}

export default function PostShvilIsrael() {
  return (
    <PostLayout meta={META}>

      <p>
        שביל ישראל — 1,100 ק"מ מדן לאילת. על הנייר זה נשמע כמו הרפתקה.
        במציאות, זה הרבה יותר מסובך, כואב ומדהים ממה שחשבתי.
      </p>

      {/* ציטוט מודגש */}
      <blockquote className="post-quote">
        "רק מי שהלך על השביל יודע מה זה אומר לראות את הארץ הזאת ברגל."
      </blockquote>

      <h2 className="post-h2">למה בכלל לצאת לשביל?</h2>
      <p>
        כי יש רגעים שרק ההליכה יכולה ללמד אותך אותם.
        כי אחרי שבוע על השביל אתה מבין מה באמת חשוב לך בחיים.
        וכי ישראל יפה מכדי לראות אותה רק מהחלון של האוטו.
      </p>

      {/* תמונה בתוך הכתבה */}
      <InlineImage
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        alt="נוף הרים"
        caption="הצפון של ישראל בבוקר — אין מה להוסיף"
      />

      <h2 className="post-h2">הציוד שלקחתי</h2>
      <p>אחרי הרבה מחקר והתלבטויות, הלכתי עם:</p>

      {/* רשימה */}
      <ul className="space-y-2 my-4 pr-4">
        {[
          'תרמיל 45 ליטר Osprey Atmos',
          'שק שינה עד 5 מעלות',
          'נעלי Salomon X Ultra 4 GTX',
          'מסנן מים Sawyer Squeeze',
          'כירת גז MSR PocketRocket',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-dark/70">
            <span className="text-orange-500 mt-1">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="post-h2">הרגע שלא אשכח</h2>
      <p>
        יום 12. עלייה לרמת הגולן. 35 מעלות. אין צל. הרגליים בוערות.
        ואז פתאום — נוף שלם של הכנרת מלמטה, נוצץ בשמש.
        עצרתי 20 דקות רק להסתכל.
      </p>
      <p>
        {/* המשך התוכן שלך כאן */}
        תוכן נוסף יתווסף בהמשך...
      </p>

    </PostLayout>
  )
}
