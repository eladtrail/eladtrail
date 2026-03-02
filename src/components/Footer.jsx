import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/40 text-sm">
      {/* פס דגל */}
      <div className="h-1" style={{
        background: 'linear-gradient(to right, #0038b8 33%, #ffffff 33%, #ffffff 66%, #0038b8 66%)'
      }} />
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://res.cloudinary.com/dcenbexvc/image/upload/v1772019375/logo_pwz96l.jpg"
            alt="EladTrail"
            className="h-14 w-auto object-contain rounded-xl opacity-90"
          />
        </div>
        <p className="mb-1">© {new Date().getFullYear()} · קריית מוצקין, ישראל</p>
        <p className="mt-2">
          נבנה באהבה ע"י{' '}
          <a href="https://slavx.site" target="_blank" rel="noreferrer"
            className="text-orange-400 hover:text-orange-300 hover:underline transition-colors font-semibold">
            SLAVX.SITE
          </a>
        </p>
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
