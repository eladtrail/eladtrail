// pages/Home.jsx — עמוד הבית
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'
import { POSTS } from '../data/posts'

export default function Home() {
  // מציגים רק 3 פוסטים אחרונים בעמוד הבית
  const latestPosts = POSTS.slice(0, 3)

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 text-white"
        style={{
          background: `
            linear-gradient(to bottom, rgba(10,25,10,0.6), rgba(10,25,10,0.3)),
            url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')
            center/cover no-repeat
          `,
        }}
      >
        {/* תג עליון */}
        <span className="bg-forest-accent text-white text-xs font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-6">
          🟢 טיולים אותנטיים מישראל
        </span>

        {/* כותרת ראשית */}
        <h1 className="font-display text-5xl md:text-7xl leading-tight mb-4 drop-shadow-2xl">
          הטיולים של אלעד<br />
          <span className="text-forest-accent">מהשטח, בלי פילטרים</span>
        </h1>

        <p className="max-w-lg text-lg opacity-90 mb-8">
          מסלולים, טיפים, ציוד וסיפורי הרפתקאות — כי כל שביל מספר סיפור משלו.
        </p>

        <Link to="/blog" className="btn-primary text-base">
          צלל לתוכן ↓
        </Link>
      </section>

      {/* ===== פוסטים אחרונים ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="title-divider" />
          <h2 className="section-title">הפוסטים האחרונים</h2>
          <p className="text-gray-500 mb-10">תוכן אמיתי מהשטח</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="btn-primary">
              כל הפוסטים →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== מיני אודות ===== */}
      <section className="bg-forest-dark py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* ← שנה את ה-src לתמונה של אלעד */}
            <img
              src="https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?w=700&q=80"
              alt="אלעד דויטש"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <div className="title-divider" />
            <h2 className="font-display text-3xl text-sand mb-4">היי, אני אלעד 👋</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              ג'ינג'י מקריית מוצקין שגדל על מסלולים ועל ריח עשב לאחר גשם.
              מאמין שטיול אמיתי מתחיל כשהמפה נגמרת.
            </p>
            <p className="text-gray-400 leading-relaxed">
              כאן תמצאו מסלולים אמיתיים, טיפים מהשטח וסיפורים שלא מוצאים בבלוגים הגדולים.
            </p>
            <Link to="/about" className="btn-primary mt-6 inline-block">
              קרא עוד עליי
            </Link>
          </div>
        </div>
      </section>

      {/* ===== סושיאל ===== */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="title-divider mx-auto mb-4" />
          <h2 className="section-title">בואו נתחבר</h2>
          <p className="text-gray-500 mb-10">אפשר למצוא אותי בכל הרשתות</p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'TikTok',     url: 'https://www.tiktok.com/@eladtrail',                          emoji: '🎵' },
              { name: 'Instagram',  url: 'https://www.instagram.com/eladtrail/',                       emoji: '📸' },
              { name: 'YouTube',    url: 'https://www.youtube.com/@EladTrail',                         emoji: '▶️' },
              { name: 'Facebook',   url: 'https://www.facebook.com/profile.php?id=61587937889865',     emoji: '📘' },
              { name: 'Email',      url: 'mailto:eladtrail@gmail.com',                                 emoji: '✉️' },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target={s.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-md
                           px-8 py-5 font-semibold text-forest-dark text-sm
                           hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              >
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
