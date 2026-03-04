import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const SOCIAL = [
  {
    name: 'Instagram',
    handle: '@eladtrail',
    url: 'https://www.instagram.com/eladtrail/',
    color: '#e1306c',
    bg: '#fdf2f6',
    border: '#f8d0e0',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@eladtrail',
    url: 'https://www.tiktok.com/@eladtrail',
    color: '#010101',
    bg: '#f5f5f5',
    border: '#e0e0e0',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.09-2.78v-3.5a6.34 6.34 0 1 0 5.54 6.28V8.69a8.18 8.18 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@EladTrail',
    url: 'https://www.youtube.com/@EladTrail',
    color: '#ff0000',
    bg: '#fff5f5',
    border: '#fdd',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'EladTrail',
    url: 'https://www.facebook.com/profile.php?id=61587937889865',
    color: '#1877f2',
    bg: '#f0f5ff',
    border: '#c5d8fc',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 12.073C24 5.445 18.627 0 12 0S0 5.445 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
]

const COLLAB_TYPES = [
  {
    icon: '🏷️',
    title: 'שיתופי פעולה עם מותגים',
    desc: 'ציוד טיולים, ביגוד טכני, תוספי תזונה, טכנולוגיה לשטח — אם המוצר שלכם עובד על שבילים, יש לנו מה לדבר.',
    cta: 'שלח הצעה',
    href: 'mailto:eladtrail@gmail.com?subject=שיתוף פעולה עם מותג',
    color: 'orange',
  },
  {
    icon: '📸',
    title: 'תוכן ממומן',
    desc: 'פוסטים, סרטונים, סטוריז ו-Reels — תוכן אותנטי שמחובר לקהילה אמיתית של מטיילים ישראלים.',
    cta: 'בואו נדבר',
    href: 'https://www.instagram.com/eladtrail/',
    color: 'pink',
  },
  {
    icon: '🎤',
    title: 'הרצאות וסדנאות',
    desc: 'הרצאות על שטח, ניווט, תזונה ותכנון מסלול — לחברות, בתי ספר, קבוצות חברתיות ועמותות.',
    cta: 'שמור תאריך',
    href: 'mailto:eladtrail@gmail.com?subject=הרצאה / סדנה',
    color: 'green',
  },
  {
    icon: '🗺️',
    title: 'ייעוץ מסלולים',
    desc: 'מתכננים טיול ולא יודעים מאיפה להתחיל? אני עוזר לבנות מסלול מותאם — רמת קושי, עונה, קבוצה, ציוד.',
    cta: 'התייעצו איתי',
    href: 'mailto:eladtrail@gmail.com?subject=ייעוץ מסלול',
    color: 'blue',
  },
]

const STATS = [
  { value: '7+', label: 'שנות טיולים' },
  { value: '30+', label: 'מדינות' },
  { value: '1,000+', label: 'ק"מ שביל ישראל' },
  { value: '10K+', label: 'עוקבים בסושיאל' },
]

const colorMap = {
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', icon: 'bg-orange-100 text-orange-600', btn: 'bg-orange-600 hover:bg-orange-700' },
  pink:   { bg: 'bg-pink-50',   border: 'border-pink-100',   icon: 'bg-pink-100 text-pink-600',     btn: 'bg-pink-600 hover:bg-pink-700' },
  green:  { bg: 'bg-green-50',  border: 'border-green-100',  icon: 'bg-green-100 text-green-600',   btn: 'bg-green-600 hover:bg-green-700' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   icon: 'bg-blue-100 text-blue-600',     btn: 'bg-blue-600 hover:bg-blue-700' },
}

export default function Contact() {
  return (
    <div className="pb-20">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-6">
        <AnimatedSection y={24}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="title-divider mx-auto mb-4" />
            <h1 className="section-title mb-5">בואו נעשה משהו ביחד</h1>
            <p className="text-dark/60 text-lg leading-relaxed max-w-xl mx-auto">
              EladTrail הוא לא רק בלוג — זו קהילת מטיילים ישראלית שצומחת.
              אם יש לכם מוצר, שירות, רעיון או סתם רצון להתחבר — אני פתוח.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl border border-orange-100 py-5 px-3 shadow-sm">
                  <p className="text-2xl font-bold text-orange-600 font-display">{s.value}</p>
                  <p className="text-dark/55 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Collaboration types */}
      <section className="py-16 px-6 bg-white">
        <AnimatedSection y={20}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-2">איך אפשר לשתף פעולה?</h2>
            <p className="text-center text-dark/50 text-sm mb-10">בחרו את הסוג שמתאים לכם</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {COLLAB_TYPES.map((c) => {
                const cls = colorMap[c.color]
                const isExternal = c.href.startsWith('http')
                return (
                  <div key={c.title} className={`${cls.bg} border ${cls.border} rounded-2xl p-6 flex flex-col gap-4`}>
                    <div className="flex items-start gap-4">
                      <div className={`${cls.icon} w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                        {c.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-dark text-lg font-display">{c.title}</h3>
                        <p className="text-dark/60 text-sm leading-relaxed mt-1">{c.desc}</p>
                      </div>
                    </div>
                    <motion.a
                      href={c.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      className={`${cls.btn} text-white text-sm font-semibold py-2.5 px-5 rounded-xl text-center transition-colors self-start`}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {c.cta} ←
                    </motion.a>
                  </div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Direct contact */}
      <section className="py-16 px-6 bg-orange-50">
        <AnimatedSection y={20}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-2">רוצים לדבר ישירות?</h2>
            <p className="text-dark/50 text-sm mb-10">אני עונה תוך 24-48 שעות בכל הערוצים</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <motion.a
                href="mailto:eladtrail@gmail.com"
                className="flex items-center gap-4 bg-white border border-orange-100 rounded-2xl p-5 hover:border-orange-300 transition-colors text-right"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">מייל</p>
                  <p className="text-orange-600 text-sm font-semibold">eladtrail@gmail.com</p>
                  <p className="text-dark/40 text-xs mt-0.5">לשיתופי פעולה, עסקאות ושאלות</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/eladtrail/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-white border border-pink-100 rounded-2xl p-5 hover:border-pink-300 transition-colors text-right"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-2xl flex-shrink-0">
                  📸
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">אינסטגרם DM</p>
                  <p className="text-pink-600 text-sm font-semibold">@eladtrail</p>
                  <p className="text-dark/40 text-xs mt-0.5">לשאלות מהירות ורעיונות</p>
                </div>
              </motion.a>
            </div>

            {/* Social links */}
            <p className="text-dark/40 text-sm mb-5">עקבו גם ב:</p>
            <div className="flex justify-center flex-wrap gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all"
                  style={{ backgroundColor: s.bg, borderColor: s.border, color: s.color }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                  <span>{s.name}</span>
                  <span className="text-xs opacity-60 font-normal">{s.handle}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* What I offer */}
      <section className="py-16 px-6 bg-white">
        <AnimatedSection y={20}>
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-10">מה אני מביא לשולחן</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: '🎯', title: 'קהל ממוקד', desc: 'מטיילים ישראלים פעילים — גברים ונשים 22-45, רוכשים ציוד ומתכננים טיולים.' },
                { icon: '🤝', title: 'תוכן אמיתי', desc: 'אני לא עושה תוכן שלא בדקתי בעצמי. כל המלצה מגיעה מניסיון אישי בשטח.' },
                { icon: '📊', title: 'נוכחות רב-ערוצית', desc: 'אינסטגרם, TikTok, יוטיוב, פייסבוק ובלוג — כיסוי מלא בכל הפלטפורמות.' },
              ].map((item) => (
                <div key={item.title} className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-dark font-display mb-2">{item.title}</h3>
                  <p className="text-dark/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6">
        <AnimatedSection y={16}>
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-orange-600 to-orange-500 rounded-3xl p-10 shadow-xl">
            <p className="text-white/80 text-sm mb-2">מוכנים להתחיל?</p>
            <h2 className="text-white font-display font-bold text-2xl md:text-3xl mb-4">
              שלחו מייל — אחזור תוך 24 שעות
            </h2>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              לא משנה אם זה מותג גדול, סטארטאפ קטן, או סתם רעיון —<br />
              כל פנייה מקבלת מענה אישי.
            </p>
            <motion.a
              href="mailto:eladtrail@gmail.com?subject=שיתוף פעולה - EladTrail"
              className="inline-block bg-white text-orange-600 font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-orange-50 transition-colors"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              ✉️ eladtrail@gmail.com
            </motion.a>
          </div>
        </AnimatedSection>
      </section>

    </div>
  )
}
