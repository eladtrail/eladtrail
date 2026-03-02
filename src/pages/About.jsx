// pages/About.jsx
import { Link } from 'react-router-dom'

const STATS = [
  { num: '8+',    label: 'שנות טיולים' },
  { num: '1,100', label: 'ק"מ שביל ישראל' },
  { num: '40+',   label: 'מסלולים מתועדים' },
  { num: '3',     label: 'יבשות' },
]

const VALUES = [
  {
    icon: '🏔️',
    title: 'אותנטיות מעל הכל',
    text: 'אני מתעד מה שקורה בשטח — גם כשזה קשה, גם כשזה לא יפה לאינסטגרם. טיול אמיתי לא תמיד נראה טוב בתמונה.',
  },
  {
    icon: '🇮🇱',
    title: 'ישראל קודם',
    text: 'לפני שמחפשים הרים בנפאל — יש כאן רכסים, קניונים וחורשות שרוב הישראלים לא מכירים. הארץ הזאת אין לה סוף.',
  },
  {
    icon: '🎒',
    title: 'ציוד חכם, לא יקר',
    text: 'אפשר לצאת לשטח בלי לשבור את הכיס. אני תמיד אגיד לכם מה עובד ומה שיווק בלבד.',
  },
  {
    icon: '🤝',
    title: 'קהילה אמיתית',
    text: 'אחד הדברים הכי יפים בטיולים הוא האנשים שפוגשים בדרך. הבלוג הזה הוא גם מקום מפגש.',
  },
]

const SOCIAL = [
  { name: 'Instagram', emoji: '📸', url: 'https://www.instagram.com/eladtrail/',                   color: 'hover:bg-pink-50 hover:border-pink-300' },
  { name: 'TikTok',    emoji: '🎵', url: 'https://www.tiktok.com/@eladtrail',                      color: 'hover:bg-gray-50 hover:border-gray-400' },
  { name: 'YouTube',   emoji: '▶️', url: 'https://www.youtube.com/@EladTrail',                     color: 'hover:bg-red-50 hover:border-red-400' },
  { name: 'Facebook',  emoji: '📘', url: 'https://www.facebook.com/profile.php?id=61587937889865', color: 'hover:bg-blue-50 hover:border-blue-400' },
  { name: 'מייל',      emoji: '✉️', url: 'mailto:eladtrail@gmail.com',                             color: 'hover:bg-orange-50 hover:border-orange-400' },
]

export default function About() {
  return (
    <div className="bg-cream">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-warm border-b border-orange-100 py-20 px-6 overflow-hidden">
        {/* קישוט רקע */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.04] text-[260px] select-none pointer-events-none">
          🇮🇱
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">

          {/* תמונת פרופיל */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-orange-200 shadow-2xl bg-orange-50">
                <img
                  src="https://res.cloudinary.com/dcenbexvc/image/upload/v1772181927/Elad_twmatp.jpg"
                  alt="אלעד דויטש"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* תג */}
              <div className="absolute -bottom-3 -left-3 bg-orange-600 text-white
                              text-xs font-bold px-4 py-2 rounded-2xl shadow-lg whitespace-nowrap">
                🇮🇱 קריית מוצקין
              </div>
            </div>
          </div>

          {/* טקסט היכרות */}
          <div className="text-center md:text-right">
            <div className="title-divider mb-4 mx-auto md:mr-0 md:ml-auto" />
            <h1 className="font-display text-4xl md:text-5xl text-dark mb-3 leading-tight">
              היי, אני אלעד 👋
            </h1>
            <p className="text-dark/60 text-xl leading-relaxed mb-6 max-w-lg">
              ג'ינג'י מקריית מוצקין שגדל על מסלולים ועל ריח אדמה לאחר גשם.
              מאמין שטיול אמיתי מתחיל כשהמפה נגמרת.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <Link to="/blog" className="btn-primary">
                לכל הפוסטים →
              </Link>
              <a href="mailto:eladtrail@gmail.com"
                className="inline-block border-2 border-orange-300 text-orange-700 px-6 py-3
                           rounded-full font-semibold hover:bg-orange-50 transition-colors duration-200">
                צרו קשר ✉️
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── סטטיסטיקות ───────────────────────────────────────── */}
      <section className="py-12 px-6 bg-white border-b border-orange-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl text-orange-600 mb-1">{s.num}</div>
              <div className="text-dark/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── הסיפור שלי ───────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="title-divider mb-4" />
          <h2 className="font-display text-3xl text-dark mb-8">הסיפור שלי</h2>

          <div className="space-y-5 text-dark/70 leading-loose text-[1.05rem]">
            <p>
              הכל התחיל בטיול שביל ישראל. לא תכננתי לעשות ממנו כלום — פשוט רציתי
              ללכת, לחשוב, ולראות את הארץ מזווית אחרת. 1,100 ק"מ מדן לאילת, ברגל,
              עם תרמיל על הגב. בסוף הטיול הזה הבנתי שישראל היא לא רק מדינה —
              היא ספר שאף פעם לא גומרים לקרוא.
            </p>
            <p>
              מאז אני יוצא לשטח כמה שיותר. גולן, נגב, גליל, ערבה — כל אחד מהם
              עולם שלם. הבלוג הזה נולד כי נמאס לי לקרוא מדריכים משעממים עם מידע
              יבש. רציתי לכתוב את מה שבאמת קורה בשטח: האינפורמציה המדויקת,
              הרגעים הקשים, והסיפורים שמגיעים רק כשאתה ממש שם.
            </p>
            <p>
              הטיולים לימדו אותי שיש דברים שרק ההליכה יכולה ללמד. קצב אחר,
              מחשבות אחרות, סדר עדיפויות שמשתנה כשאתה צועד שש שעות ביום.
              אני לא מדריך טיולים ולא אתלט — אני סתם בן אדם שאוהב את הארץ
              הזאת ורוצה שגם אתם תכירו אותה.
            </p>
          </div>
        </div>
      </section>

      {/* ── ערכים ────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-warm">
        <div className="max-w-4xl mx-auto">
          <div className="title-divider mb-4" />
          <h2 className="font-display text-3xl text-dark mb-10">למה אני עושה את זה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title}
                className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm
                           hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display text-lg text-dark mb-2">{v.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ציטוט ────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-orange-600">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl text-white leading-relaxed italic">
            "מאמין שטיול אמיתי מתחיל כשהמפה נגמרת —
            <br />ואתה מתחיל לסמוך על עצמך."
          </p>
          <p className="text-orange-200 text-sm font-semibold mt-4">— אלעד דויטש</p>
        </div>
      </section>

      {/* ── סושיאל ───────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="title-divider mx-auto mb-4" />
          <h2 className="font-display text-3xl text-dark mb-2">בואו נתחבר</h2>
          <p className="text-dark/50 mb-10">עדכונים, סטוריז מהשטח ותמונות — ברשתות שלי</p>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL.map((s) => (
              <a key={s.name} href={s.url}
                target={s.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className={`flex flex-col items-center gap-2 bg-white rounded-2xl
                           border-2 border-orange-100 px-8 py-5 font-semibold text-dark text-sm
                           hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${s.color}`}>
                <span className="text-3xl">{s.emoji}</span>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
