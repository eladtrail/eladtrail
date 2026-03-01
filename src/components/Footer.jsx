// Footer.jsx — תחתית האתר
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0f1e0f] text-gray-500 text-sm text-center py-8 px-6">
      <p className="mb-1">
        © {new Date().getFullYear()} EladTrail · קריית מוצקין, ישראל
      </p>
      <p>
        <a href="mailto:eladtrail@gmail.com" className="text-forest-accent hover:underline">
          eladtrail@gmail.com
        </a>
        {' · '}
        <Link to="/about" className="hover:text-gray-300 transition-colors">אודות</Link>
        {' · '}
        <Link to="/contact" className="hover:text-gray-300 transition-colors">צור קשר</Link>
      </p>
    </footer>
  )
}
