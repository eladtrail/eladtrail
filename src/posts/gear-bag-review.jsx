import PostLayout, { InlineImage } from '../components/PostLayout'

const META = {
  title:    'התרמיל שהלך איתי לכל מקום',
  category: '🎒 ציוד',
  date:     'נובמבר 2024',
  readTime: 10,
  image:    'https://upload.wikimedia.org/wikipedia/commons/0/0d/Osprey_Atmos_AG_65_Backpack_%2847347379172%29.jpg',
  imageAlt: 'Osprey Atmos AG 65 — התרמיל שהלך איתי לכל מקום',
}

// ── כרטיס מידע ──────────────────────────────────────────────
function InfoCard({ icon, title, children }) {
  return (
    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 my-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-display text-lg font-bold text-dark">{title}</h3>
      </div>
      <div className="text-dark/70 leading-relaxed">{children}</div>
    </div>
  )
}

// ── כרטיס ציון ──────────────────────────────────────────────
function RatingBar({ label, score }) {
  return (
    <div className="flex items-center gap-3 my-2">
      <span className="text-sm text-dark/60 w-28 text-right flex-shrink-0">{label}</span>
      <div className="flex-1 bg-orange-100 rounded-full h-2.5">
        <div
          className="bg-orange-500 h-2.5 rounded-full"
          style={{ width: `${score * 10}%` }}
        />
      </div>
      <span className="text-sm font-bold text-orange-600 w-8">{score}/10</span>
    </div>
  )
}

// ════════════════════════════════════════════════════════════
export default function PostGearBag() {
  return (
    <PostLayout meta={META}>

      {/* ── פסקת פתיחה ────────────────────────────────────── */}
      <p>
        שלוש שנים. עשרות מסלולים. שביל ישראל המלא מדן עד אילת. קמפינג בגולן,
        מכתש רמון בפברואר, ואפילו שבועיים בפטגוניה. כל זה עם אותו תרמיל אחד —
        ה-<strong>Osprey Atmos AG 65</strong>.
      </p>
      <p>
        זו לא סקירה של מישהו שהוציא תרמיל מהקופסה, צילם אותו בסלון וכתב
        "נראה מגניב". זו סקירה של שלוש שנים של שימוש יומיומי, רטיבות, אבק,
        עומס, ושרב. אני אגיד לכם בדיוק מה עובד, מה לא, ולמי הוא מתאים —
        ולמי לא.
      </p>

      <blockquote className="post-quote">
        "תרמיל טוב הוא לא כזה שנראה יפה בתמונה — הוא כזה שאתה שוכח שהוא על הגב."
      </blockquote>

      {/* ── נתוני המוצר ───────────────────────────────────── */}
      <h2 className="post-h2">נתוני המוצר — במבט מהיר</h2>

      <InfoCard icon="🎒" title="Osprey Atmos AG 65 — מפרט טכני">
        <ul className="space-y-1.5 text-sm">
          {[
            ['נפח',         '65 ליטר (יש גם גרסת 50L)'],
            ['משקל',        '2.1 ק"ג (ריק)'],
            ['מסגרת',       'Anti-Gravity (AG) — רשת מתוחה, ללא מגע גב ישיר'],
            ['חגורת מותן',  'מרופדת, ניתנת להתאמה לרוחב הגוף'],
            ['כיסים',       '7 תאי אחסון + כיס היפ-בלט + גישה תחתית'],
            ['עמידות מים',  'מכסה גשם מובנה (מוסתר בתחתית)'],
            ['מחיר משוער',  '900–1,200 ₪ (תלוי חנות ומבצעים)'],
            ['מיוצר ב',     'ווייטנאם (יש Bluesign certified חומרים)'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60 text-left">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* ── למה בחרתי את זה ───────────────────────────────── */}
      <h2 className="post-h2">למה בחרתי דווקא את זה?</h2>
      <p>
        לפני שביל ישראל ניסיתי שלושה תרמילים שונים — Deuter, Decathlon, ו-Gregory.
        כולם היו בסדר. אף אחד מהם לא גרם לי לשכוח שאני נושא 14 ק"ג על הגב.
        הבעיה הקלאסית: אחרי 5–6 שעות הליכה, הגב מתחמם, מזיע, וכואב.
      </p>
      <p>
        הגעתי ל-Atmos AG כי ה"AG" (Anti-Gravity) הוא לא שיווק — זו פיזיקה.
        הרשת המתוחה יוצרת מרווח אוויר בין הגב לתרמיל, מה שמשנה לחלוטין
        את חוויית הנשיאה בחום הישראלי. במסלולים בנגב, עם 38 מעלות בשמש,
        זה ההבדל בין לסיים את היום ולרצות לחזור הביתה.
      </p>

      {/* ── מה עובד מצוין ─────────────────────────────────── */}
      <h2 className="post-h2">מה עובד מצוין</h2>

      <div className="space-y-4 my-5">
        {[
          {
            icon: '🌬️',
            title: 'מערכת האוורור AG',
            text: 'זה הדבר שהכי שינה לי את החוויה. הרשת המתוחה מחזיקה את התרמיל 5–6 ס"מ מהגב. תוצאה: פחות הזעה, פחות שפשופים, פחות חום. בקיץ ישראלי — זה לא נוחות, זה הישרדות.',
          },
          {
            icon: '⚖️',
            title: 'חגורת מותן פנומנלית',
            text: 'חגורת המותן של ה-Atmos AG היא אחת הטובות בשוק בסגמנט המחיר הזה. מרופדת, עם כיסים גדולים בשני הצדדים (מחזיק בקבוק, טלפון, חטיף), ומתאימה לרוחב הגוף בצורה שמחלקת את העומס בצורה נכונה.',
          },
          {
            icon: '🗂️',
            title: 'ארגון פנימי חכם',
            text: 'התא הראשי עם גישה מלמטה — מציל חיים. לא צריך להוציא הכל כדי להגיע לשק השינה. יש תא נפרד לשלפוחיות מים, כיס גשם מוסתר בתחתית, וכיס זכוכית פנימי. כל דבר במקומו.',
          },
          {
            icon: '🔧',
            title: 'עמידות — 3 שנים ועדיין חדש',
            text: 'תפרים — ללא בעיה. רוכסנים — פועלים כמו ביום הראשון. בד חיצוני קיבל שריטות ושפשופים אבל לא נקרע. Osprey נותנים אחריות לכל החיים (כולל תיקוני כיסים ורוכסנים) — ולי זה כבר שילם פעמיים.',
          },
          {
            icon: '🌧️',
            title: 'כיסוי גשם מובנה',
            text: 'הכיסוי מוסתר בכיס קטן בחלק התחתון של התרמיל. מכסה את כל הגב בשניות. בגשם שתפסתי ביום 23 של שביל ישראל — תכולת התרמיל יצאה יבשה לגמרי.',
          },
        ].map((item) => (
          <div key={item.title}
            className="flex gap-4 bg-white border border-orange-100 rounded-xl p-5 shadow-sm">
            <span className="text-2xl flex-shrink-0">{item.icon}</span>
            <div>
              <p className="font-bold text-dark mb-1">{item.title}</p>
              <p className="text-dark/60 text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── מה פחות אהבתי ─────────────────────────────────── */}
      <h2 className="post-h2">מה פחות אהבתי — בכנות</h2>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 my-6">
        <p className="font-bold text-amber-800 mb-4 flex items-center gap-2">
          <span>⚠️</span> חסרונות אמיתיים — לא שיווק
        </p>
        <div className="space-y-3">
          {[
            {
              title: 'משקל 2.1 ק"ג — כבד לאולטרה-לייט',
              text: 'אם אתם חובבי UL (Ultra Light) — זה לא התרמיל שלכם. יש תרמילים שמשקלים 1.1–1.4 ק"ג. המחיר של ה-AG הוא המשקל שלו.',
            },
            {
              title: 'גישה לתא הגחון — לא נוחה',
              text: 'הכיס התחתון קצת מסורבל לפתיחה תוך כדי הליכה. צריך להוריד את התרמיל. בניגוד לפוקטנות שיש בצד ב-Gregory לדוגמה.',
            },
            {
              title: 'מחיר',
              text: '1,000–1,200 ₪ זה כסף. אבל אם אתם הולכים לשביל ישראל המלא — חשבו על זה כ-4 ₪ ליום לאורך 3 שנים. שווה.',
            },
            {
              title: 'רשת AG לא מתאימה לכולם',
              text: 'אנשים עם בעיות גב תחתון מסוימות מוצאים שמסגרת קשיחה יותר (כמו Deuter Aircontact) נוחה יותר. תמיד כדאי לנסות עם משקל לפני קנייה.',
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <span className="text-orange-500 flex-shrink-0 mt-0.5">✗</span>
              <div>
                <p className="font-semibold text-amber-900 text-sm">{item.title}</p>
                <p className="text-amber-800/70 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ציוני ביקורת ──────────────────────────────────── */}
      <h2 className="post-h2">הציונים שלי</h2>
      <div className="bg-white border border-orange-100 rounded-2xl p-6 my-6 shadow-sm">
        <RatingBar label="נוחות גב"     score={9.5} />
        <RatingBar label="ארגון פנימי"  score={9}   />
        <RatingBar label="עמידות"       score={9.5} />
        <RatingBar label="אוורור"       score={9}   />
        <RatingBar label="משקל עצמי"    score={6.5} />
        <RatingBar label="מחיר/ביצועים" score={8.5} />
        <div className="mt-5 pt-4 border-t border-orange-100 flex items-center justify-between">
          <span className="font-bold text-dark">ציון כולל</span>
          <span className="font-display text-3xl text-orange-600 font-bold">9/10</span>
        </div>
      </div>

      {/* ── השוואה לחלופות ────────────────────────────────── */}
      <h2 className="post-h2">השוואה מהירה לחלופות</h2>
      <p>לפני שקניתי בחנתי שלושה תרמילים נוספים:</p>

      <div className="space-y-3 my-5">
        {[
          {
            name: 'Deuter Aircontact Core 65+10',
            price: '~1,050 ₪',
            pro: 'מסגרת קשיחה מעולה, אחסון עליון גדול',
            con: 'אוורור נחות, גב מתחמם יותר',
            verdict: 'מומלץ לגבות רגישות',
          },
          {
            name: 'Gregory Baltoro 65',
            price: '~1,300 ₪',
            pro: 'ארגון טוב מאוד, גישה בצד',
            con: 'כבד יותר, יקר יותר',
            verdict: 'מתחרה ישיר, מעט נחות',
          },
          {
            name: 'Decathlon Forclaz Trek 900',
            price: '~400 ₪',
            pro: 'מחיר מעולה, בסיסי וטוב',
            con: 'ללא AG, גב מתחמם, פחות עמיד',
            verdict: 'מעולה למתחילים ולתקציב',
          },
        ].map((alt) => (
          <div key={alt.name}
            className="border border-orange-100 rounded-xl p-4 bg-white shadow-sm">
            <div className="flex justify-between items-start mb-2 flex-wrap gap-1">
              <span className="font-bold text-dark text-sm">{alt.name}</span>
              <span className="text-orange-600 font-semibold text-sm">{alt.price}</span>
            </div>
            <div className="flex gap-4 text-xs text-dark/50 mb-2">
              <span className="text-green-600">✓ {alt.pro}</span>
              <span className="text-red-500">✗ {alt.con}</span>
            </div>
            <p className="text-xs font-semibold text-orange-700 bg-orange-50 rounded-lg px-3 py-1 inline-block">
              {alt.verdict}
            </p>
          </div>
        ))}
      </div>

      {/* ── למי מתאים ─────────────────────────────────────── */}
      <h2 className="post-h2">למי הוא מתאים — ולמי לא</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">✓ מתאים ל:</p>
          <ul className="space-y-2 text-sm text-green-900/70">
            {[
              'מטיילים שיוצאים 3+ ימים בשטח',
              'שביל ישראל וטרקים ארוכים',
              'אקלים חם — ישראל, ים תיכון',
              'מי שמוכן לשלם על נוחות',
              'מי שנושא 12–18 ק"ג ציוד',
            ].map(i => (
              <li key={i} className="flex gap-2">
                <span className="text-green-500 flex-shrink-0">•</span>{i}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <p className="font-bold text-red-800 mb-3">✗ לא מתאים ל:</p>
          <ul className="space-y-2 text-sm text-red-900/70">
            {[
              'מטיילי Ultra Light (UL)',
              'מסלולים קצרים עד יומיים',
              'תקציב מוגבל (עד 500 ₪)',
              'נשיאה מעל 20 ק"ג ציוד',
              'מי שמחפש מסגרת קשיחה לחלוטין',
            ].map(i => (
              <li key={i} className="flex gap-2">
                <span className="text-red-400 flex-shrink-0">•</span>{i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── טיפים לשימוש ──────────────────────────────────── */}
      <h2 className="post-h2">טיפים לשימוש נכון</h2>

      <div className="space-y-3 my-5">
        {[
          {
            icon: '⚖️',
            tip: 'סדר נכון של ציוד',
            detail: '70% מהמשקל ליד הגב, בגובה הכתפיים (שק שינה למטה, אוכל ומים באמצע-למעלה). זה לא עצה — זה הבדל של 3 שעות ביום בלי כאב גב.',
          },
          {
            icon: '🔩',
            tip: 'כיוון נכון של חגורת המותן',
            detail: 'החגורה צריכה לנוח על עצמות האגן, לא על הבטן. 80% מהמשקל אמור לעבור דרך המותן, לא הכתפיים. לקח לי שבוע להבין את זה.',
          },
          {
            icon: '🧴',
            tip: 'תחזוקת הרשת AG',
            detail: 'שטפו את הרשת לאחר טיולים ממושכים (מים קרים + סבון עדין). רשת מלוכלכת נושמת פחות ופחות נוחה. Osprey ממליצים לשטוף כל 2–3 שבועות של שימוש אינטנסיבי.',
          },
          {
            icon: '🛡️',
            tip: 'תעלו DWR (עמידות מים)',
            detail: 'אחרי שנה-שנתיים הציפוי מתבלה. קנו ספריי DWR (Nikwax, Grangers) ורססו את הבד. זה מחזיר את התרמיל לתפקוד מלא.',
          },
        ].map((tip) => (
          <div key={tip.tip}
            className="flex gap-3 border border-orange-100 rounded-xl p-4 bg-white shadow-sm">
            <span className="text-2xl flex-shrink-0">{tip.icon}</span>
            <div>
              <p className="font-bold text-dark text-sm mb-1">{tip.tip}</p>
              <p className="text-dark/60 text-sm leading-relaxed">{tip.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── סיכום ─────────────────────────────────────────── */}
      <h2 className="post-h2">אחרי 3 שנים — האם הייתי קונה שוב?</h2>
      <p>
        כן. בלי היסוס. ה-Osprey Atmos AG 65 הוא התרמיל הטוב ביותר שאני מכיר
        בסגמנט המחיר שלו לתנאים ישראליים. מערכת ה-AG שינתה לי את חוויית הטיול —
        מהלכים שגמרתי אותם עייף ומזיע גמרתי אותם עם אנרגיה לתמונה בפסגה.
      </p>
      <p>
        אם יש לכם תקציב והולכים לטיולים של 3+ ימים — קנו אותו. תנסו אותו
        עם משקל בחנות לפחות 20 דקות לפני שאתם מחליטים. תרמיל טוב הוא לא
        הוצאה — הוא השקעה בשלוש שנות גב בריא.
      </p>

      <blockquote className="post-quote">
        "אחרי 1,100 ק"מ על שביל ישראל, הדבר שהכי גאלתי עליו זה לא הנעליים — זה התרמיל."
      </blockquote>

    </PostLayout>
  )
}
