// Header.jsx
// ============================================================
// ראש האתר — לוגו, ניווט עם תתי-קטגוריות, אייקוני סושיאל
//
// כדי להוסיף קטגוריה ראשית: הוסף אובייקט ל-NAV_ITEMS
// כדי להוסיף תת-קטגוריה: הוסף אובייקט ל-items של הקטגוריה
// כדי שלקטגוריה לא יהיו תתי-קטגוריות: השמט את items לחלוטין
// ============================================================
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// ===== מבנה הניווט =====
// label = מה שמוצג
// to    = הנתיב (אם אין תת-קטגוריות)
// items = מערך תת-קטגוריות (אם יש)
const NAV_ITEMS = [
  { label: 'בית', to: '/' },
  {
    label: 'טיולים בישראל',
    items: [
      { label: 'צפון',          to: '/blog?cat=israel' },
      { label: 'דרום',          to: '/blog?cat=israel' },
      { label: 'ים המלח',       to: '/blog?cat=israel' },
      { label: 'גולן וגלבוע',   to: '/blog?cat=israel' },
    ],
  },
  {
    label: 'טיולים בחו"ל',
    items: [
      { label: 'אירופה',        to: '/blog?cat=world' },
      { label: 'דרום אמריקה',   to: '/blog?cat=world' },
      { label: 'אסיה',          to: '/blog?cat=world' },
      { label: 'אפריקה',        to: '/blog?cat=world' },
    ],
  },
  {
    label: 'טיפים',
    items: [
      { label: 'ציוד מומלץ',    to: '/blog?cat=tips' },
      { label: 'תזונה בשטח',    to: '/blog?cat=tips' },
      { label: 'בטיחות',        to: '/blog?cat=tips' },
      { label: 'תכנון מסלול',   to: '/blog?cat=tips' },
    ],
  },
  {
    label: 'ציוד',
    items: [
      { label: 'נעליים',        to: '/blog?cat=gear' },
      { label: 'תרמילים',       to: '/blog?cat=gear' },
      { label: 'ניווט',         to: '/blog?cat=gear' },
      { label: 'ביגוד',         to: '/blog?cat=gear' },
    ],
  },
  { label: 'אודות', to: '/about' },
  { label: 'צור קשר', to: '/contact' },
]

// ===== אייקוני סושיאל =====
const SOCIAL = [
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@eladtrail',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.09-2.78v-3.5a6.34 6.34 0 1 0 5.54 6.28V8.69a8.18 8.18 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/eladtrail/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@EladTrail',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61587937889865',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 12.073C24 5.445 18.627 0 12 0S0 5.445 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:eladtrail@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
]

export default function Header() {
  // state לפתיחת/סגירת תפריט המובייל
  const [menuOpen, setMenuOpen] = useState(false)
  // state לאיזה dropdown פתוח בדסקטופ
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className="sticky top-0 z-50 bg-forest-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between gap-6">

        {/* ===== לוגו ===== */}
        <Link to="/" className="font-display text-2xl text-sand whitespace-nowrap">
          Elad<span className="text-forest-accent">Trail</span>
        </Link>

        {/* ===== ניווט דסקטופ ===== */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.items ? (
              // קטגוריה עם תתי-קטגוריות — dropdown
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-semibold text-sand rounded-lg
                                   hover:bg-forest-accent hover:text-white transition-colors">
                  {item.label} ▾
                </button>

                {openDropdown === item.label && (
                  <div className="absolute top-full right-0 mt-1 bg-forest-dark
                                  border border-forest-accent rounded-xl overflow-hidden
                                  shadow-xl min-w-[180px]">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className="block px-4 py-2.5 text-sm text-sand
                                   hover:bg-forest-mid hover:text-white transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // קטגוריה פשוטה ללא תפריט
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ` +
                  (isActive
                    ? 'bg-forest-accent text-white'
                    : 'text-sand hover:bg-forest-accent hover:text-white')
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* ===== אייקוני סושיאל (דסקטופ) ===== */}
        <div className="hidden md:flex items-center gap-3">
          {SOCIAL.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              title={s.name}
              className="text-sand/70 hover:text-forest-accent transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* ===== המבורגר מובייל ===== */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="תפריט"
        >
          <span className={`w-6 h-0.5 bg-sand rounded transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-sand rounded transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-sand rounded transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* ===== תפריט מובייל ===== */}
      {menuOpen && (
        <div className="md:hidden bg-forest-dark border-t border-forest-mid px-6 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) =>
            item.items ? (
              <div key={item.label}>
                <p className="text-sand/50 text-xs font-bold uppercase tracking-widest mb-1 mt-2">
                  {item.label}
                </p>
                {item.items.map((sub) => (
                  <Link
                    key={sub.label}
                    to={sub.to}
                    className="block pr-3 py-1.5 text-sm text-sand hover:text-forest-accent transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="py-2 text-sm font-semibold text-sand hover:text-forest-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}

          {/* סושיאל במובייל */}
          <div className="flex gap-4 mt-4 pt-4 border-t border-forest-mid">
            {SOCIAL.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                 className="text-sand/60 hover:text-forest-accent transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
