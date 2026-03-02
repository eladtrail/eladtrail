// pages/Home.jsx — עמוד בית עם אהבת ארץ ישראל
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'
import { POSTS } from '../data/posts'

// ציטוטים על ארץ ישראל — יוצגו בין הסקשנים
const QUOTES = [
  { text: 'ארץ ישראל היא לא מקום — היא תחושה.', src: 'עממי' },
  { text: 'כי לא תשכח מן הפה — ארץ זבת חלב ודבש.', src: 'שמות ג, ח' },
  { text: 'ההרים כאן לא רק נוף. הם זיכרון.', src: 'אלעד' },
]

export default function Home() {
  const latestPosts = POSTS.slice(0, 3)
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)]

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[91vh] flex flex-col items-center justify-center text-center px-6">
        {/* תמונת רקע */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dcenbexvc/image/upload/v1770728477/277639446_364194338927345_839136902550693466_n_mwv0pk.jpg"
            alt="ארץ ישראל"
            className="w-full h-full object-cover"
          />
          {/* וינייט עדין — מחשיך רק בקצוות, לא מכסה את התמונה */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />
        </div>

        {/* תוכן */}
        <div className="relative z-10 flex flex-col items-center">
          {/* לוגו + טאג */}
          <div className="flex flex-col items-center gap-4 mb-7 fade-up">
            <img
              src="https://res.cloudinary.com/dcenbexvc/image/upload/v1772019375/logo_pwz96l.jpg"
              alt="EladTrail"
              className="h-20 w-auto object-contain rounded-2xl shadow-xl"
            />
            <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-bold
                             tracking-[2px] uppercase px-5 py-2 rounded-full
                             border border-white/30 shadow-md">
              טיולים אותנטיים בארץ ובעולם
            </span>
          </div>

          <h1
            className="font-display text-6xl md:text-8xl text-white leading-[1.1] mb-5 fade-up-delay-1"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}
          >
            הטיולים של אלעד
            <br />
            <span className="text-orange-400">מהשטח, בלי פילטרים</span>
          </h1>

          <p
            className="max-w-xl text-lg text-white/85 mb-9 fade-up-delay-2 leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
          >
            מסלולים, טיפים וסיפורים מהארץ הזאת שאנחנו אוהבים —<br />
            כי כל שביל בישראל מספר סיפור אחר.
          </p>

          <div className="flex gap-4 fade-up-delay-2">
            <Link to="/blog" className="btn-primary text-base px-10 py-4 shadow-lg shadow-black/30">
              כל הפוסטים ↓
            </Link>
            <Link to="/about"
              className="text-base px-8 py-4 rounded-full font-semibold text-white
                         border-2 border-white/50 backdrop-blur-sm bg-white/10
                         hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200
                         shadow-md">
              אודות אלעד
            </Link>
          </div>
        </div>

        {/* פס כחול-לבן-כחול בתחתית ה-hero */}
        <div className="absolute bottom-0 left-0 right-0 h-2" style={{
          background: 'linear-gradient(to right, #0038b8 33%, #ffffff 33%, #ffffff 66%, #0038b8 66%)'
        }} />
      </section>

      {/* ===== ציטוט ===== */}
      <section className="py-10 px-6 bg-orange-50 border-y border-orange-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-xl md:text-2xl text-dark/70 italic leading-relaxed">
            "{quote.text}"
          </p>
          <p className="text-orange-600 text-sm font-semibold mt-3">— {quote.src}</p>
        </div>
      </section>

      {/* ===== פוסטים אחרונים ===== */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="title-divider" />
          <h2 className="section-title">הפוסטים האחרונים</h2>
          <p className="text-dark/50 mb-10">תוכן אמיתי מהשטח, ללא עריכה</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {latestPosts.map((p) => <PostCard key={p.slug} {...p} />)}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="btn-primary">כל הפוסטים →</Link>
          </div>
        </div>
      </section>

      {/* ===== מפת ישראל + אהבה לארץ ===== */}
      <section className="py-20 px-6 bg-warm relative overflow-hidden">
        {/* מפת ישראל כקישוט ברקע */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-[0.04] text-[280px] select-none pointer-events-none">
          🇮🇱
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="title-divider-blue mx-auto mb-4" />
          <h2 className="section-title mb-6">אוהבים את הארץ הזאת</h2>
          <p className="text-dark/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            ישראל היא אחת המדינות המגוונות ביותר בעולם — ים, הרים, מדבר, יערות.
            הכל במרחק של כמה שעות נסיעה. אין מה לחפש בחו"ל כשהגן עדן כאן.
          </p>
          {/* 3 עובדות */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🏔️', num: '1,100', text: 'ק"מ שביל ישראל מדן לאילת' },
              { emoji: '🏖️', num: '273', text: 'ק"מ חוף ים — ים תיכון וים סוף' },
              { emoji: '🌿', num: '2,700+', text: 'מינים של צמחים בישראל' },
            ].map((f) => (
              <div key={f.num} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 text-center">
                <div className="text-4xl mb-3">{f.emoji}</div>
                <div className="font-display text-3xl text-orange-600 mb-1">{f.num}</div>
                <div className="text-dark/50 text-sm">{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== אודות ===== */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-orange-100">
              <img
                src="https://res.cloudinary.com/dcenbexvc/image/upload/v1772181927/Elad_twmatp.jpg"
                alt="אלעד דויטש"
                className="w-full h-80 object-cover object-top"
              />
            </div>
            {/* תג קישוט */}
            <div className="absolute -bottom-4 -left-4 bg-orange-600 text-white
                            font-bold text-sm px-5 py-2.5 rounded-2xl shadow-lg">
              🇮🇱 קריית מוצקין
            </div>
          </div>
          <div>
            <div className="title-divider mb-4" />
            <h2 className="font-display text-3xl text-dark mb-4">היי, אני אלעד 👋</h2>
            <p className="text-dark/60 mb-4 leading-relaxed text-lg">
              ג'ינג'י מקריית מוצקין שגדל על מסלולים ועל ריח אדמה לאחר גשם.
              מאמין שטיול אמיתי מתחיל כשהמפה נגמרת.
            </p>
            <p className="text-dark/50 leading-relaxed">
              כאן תמצאו מסלולים אמיתיים, טיפים מהשטח, וסיפורים שלא מוצאים בבלוגים הגדולים.
            </p>
            <Link to="/about" className="btn-primary mt-8 inline-block">קרא עוד עליי</Link>
          </div>
        </div>
      </section>

      {/* ===== סושיאל ===== */}
      <section className="py-16 px-6 bg-warm border-t border-orange-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-2">בואו נתחבר</h2>
          <p className="text-dark/50 mb-10">אפשר למצוא אותי בכל הרשתות</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'TikTok',    url: 'https://www.tiktok.com/@eladtrail',                      emoji: '🎵', color: 'hover:border-black' },
              { name: 'Instagram', url: 'https://www.instagram.com/eladtrail/',                   emoji: '📸', color: 'hover:border-pink-400' },
              { name: 'YouTube',   url: 'https://www.youtube.com/@EladTrail',                     emoji: '▶️', color: 'hover:border-red-500' },
              { name: 'Facebook',  url: 'https://www.facebook.com/profile.php?id=61587937889865', emoji: '📘', color: 'hover:border-blue-500' },
              { name: 'Email',     url: 'mailto:eladtrail@gmail.com',                             emoji: '✉️', color: 'hover:border-orange-500' },
            ].map((s) => (
              <a key={s.name} href={s.url}
                target={s.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className={`flex flex-col items-center gap-2 bg-white rounded-2xl shadow-sm
                           border-2 border-transparent px-8 py-5 font-semibold text-dark text-sm
                           hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${s.color}`}>
                <span className="text-3xl">{s.emoji}</span>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
