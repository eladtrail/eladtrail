// Header.jsx — כתום + כחול-לבן דגל ישראל
import { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'בית', to: '/' },
  {
    label: 'טיולים בישראל',
    items: [
      { label: '🌿 צפון',        to: '/blog?cat=israel' },
      { label: '☀️ דרום',         to: '/blog?cat=israel' },
      { label: '💧 ים המלח',      to: '/blog?cat=israel' },
      { label: '⛰️ גולן וגלבוע',  to: '/blog?cat=israel' },
    ],
  },
  {
    label: 'טיולים בחו"ל',
    items: [
      { label: '🏔️ אירופה',      to: '/blog?cat=world' },
      { label: '🌎 דרום אמריקה', to: '/blog?cat=world' },
      { label: '🌏 אסיה',        to: '/blog?cat=world' },
      { label: '🌍 אפריקה',      to: '/blog?cat=world' },
    ],
  },
  {
    label: 'טיפים',
    items: [
      { label: '🎒 ציוד מומלץ',   to: '/tips/gear-guide' },
      { label: '🥗 תזונה בשטח',   to: '/tips/nutrition'  },
      { label: '🛡️ בטיחות',       to: '/tips/safety'     },
      { label: '🗺️ תכנון מסלול',  to: '/tips/planning'   },
    ],
  },
  {
    label: 'ציוד',
    items: [
      { label: '👟 נעליים',  to: '/gear/shoes'      },
      { label: '🎒 תרמילים', to: '/gear/backpacks'  },
      { label: '🧭 ניווט',   to: '/gear/navigation' },
      { label: '🧥 ביגוד',   to: '/gear/clothing'   },
    ],
  },
  { label: 'אודות',   to: '/about'   },
  { label: 'צור קשר', to: '/contact' },
]

const SOCIAL = [
  { name: 'TikTok',    url: 'https://www.tiktok.com/@eladtrail',                      icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.09-2.78v-3.5a6.34 6.34 0 1 0 5.54 6.28V8.69a8.18 8.18 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z"/></svg> },
  { name: 'Instagram', url: 'https://www.instagram.com/eladtrail/',                   icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
  { name: 'YouTube',   url: 'https://www.youtube.com/@EladTrail',                     icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
  { name: 'Facebook',  url: 'https://www.facebook.com/profile.php?id=61587937889865', icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M24 12.073C24 5.445 18.627 0 12 0S0 5.445 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg> },
  { name: 'Email',     url: 'mailto:eladtrail@gmail.com',                             icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg> },
]

// Dropdown עם תיקון הבאג
function DropdownItem({ item }) {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)
  const show = () => { clearTimeout(timer.current); setOpen(true) }
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120) }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
        open ? 'bg-orange-600 text-white' : 'text-dark/80 hover:bg-orange-50 hover:text-orange-600'
      }`}>
        {item.label} ▾
      </button>
      {open && (
        <div
          className="absolute top-full right-0 z-50 min-w-[200px] bg-white
                     rounded-2xl shadow-2xl border border-orange-100 overflow-hidden"
          style={{ marginTop: '-2px' }}
          onMouseEnter={show} onMouseLeave={hide}
        >
          {item.items.map((sub, i) => (
            <Link key={sub.label} to={sub.to} onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 text-sm text-dark/70 hover:bg-orange-50
                         hover:text-orange-600 transition-colors
                         ${i < item.items.length - 1 ? 'border-b border-orange-50' : ''}`}>
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(null)

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* פס כחול-לבן-כחול של דגל ישראל בראש הדף */}
      <div className="h-1 w-full" style={{
        background: 'linear-gradient(to right, #0038b8 0%, #0038b8 33%, #ffffff 33%, #ffffff 66%, #0038b8 66%, #0038b8 100%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 h-[100px] flex items-center justify-between gap-4">

        {/* לוגו */}
        <Link to="/" className="flex items-center whitespace-nowrap">
          <img
            src="https://res.cloudinary.com/dcenbexvc/image/upload/v1772019375/logo_pwz96l.jpg"
            alt="EladTrail"
            className="h-[88px] w-auto object-contain rounded-xl"
          />
        </Link>

        {/* ניווט דסקטופ */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) =>
            item.items ? (
              <DropdownItem key={item.label} item={item} />
            ) : (
              <NavLink key={item.label} to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ` +
                  (isActive
                    ? 'bg-orange-600 text-white'
                    : 'text-dark/80 hover:bg-orange-50 hover:text-orange-600')
                }>
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* סושיאל + המבורגר */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            {SOCIAL.map((s) => (
              <motion.a
                key={s.name} href={s.url}
                target={s.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer" title={s.name}
                className="w-8 h-8 flex items-center justify-center rounded-full
                           text-dark/40 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
          <button className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="תפריט">
            <span className={`w-6 h-0.5 bg-dark rounded transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-dark rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-dark rounded transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* מובייל */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-orange-100 px-6 py-4 flex flex-col gap-1"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {NAV_ITEMS.map((item) =>
            item.items ? (
              <div key={item.label}>
                <button
                  className="w-full text-right py-2.5 text-sm font-bold text-orange-600 flex justify-between items-center"
                  onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}>
                  {item.label}
                  <span className="text-xs opacity-60">{mobileOpen === item.label ? '▲' : '▼'}</span>
                </button>
                {mobileOpen === item.label && (
                  <div className="pr-4 pb-1">
                    {item.items.map((sub) => (
                      <Link key={sub.label} to={sub.to}
                        className="block py-2 text-sm text-dark/60 hover:text-orange-600 transition-colors border-b border-orange-50 last:border-0"
                        onClick={() => setMenuOpen(false)}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} to={item.to}
                className="py-2.5 text-sm font-semibold text-dark/80 hover:text-orange-600 transition-colors border-b border-orange-50 last:border-0"
                onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            )
          )}
          <div className="flex gap-3 mt-4 pt-4 border-t border-orange-100">
            {SOCIAL.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                className="text-dark/30 hover:text-orange-600 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
