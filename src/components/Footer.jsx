import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/40 text-sm">
      {/* פס דגל */}
      <div className="h-1" style={{
        background: 'linear-gradient(to right, #0038b8 33%, #ffffff 33%, #ffffff 66%, #0038b8 66%)'
      }} />
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="text-xl">🇮🇱</span>
          <span className="font-display text-white/70 text-lg">EladTrail</span>
          <span className="text-xl">🇮🇱</span>
        </div>
        <p className="mb-1">© {new Date().getFullYear()} · קריית מוצקין, ישראל</p>
        <p>
          <a href="mailto:eladtrail@gmail.com" className="text-orange-400 hover:underline">
            eladtrail@gmail.com
          </a>
          {' · '}
          <Link to="/about"   className="hover:text-white/70 transition-colors">אודות</Link>
          {' · '}
          <Link to="/contact" className="hover:text-white/70 transition-colors">צור קשר</Link>
        </p>
      </div>
    </footer>
  )
}
