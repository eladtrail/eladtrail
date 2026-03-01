// Layout.jsx
// ============================================================
// קומפוננטה זו עוטפת כל עמוד באתר.
// היא מוסיפה Header בראש ו-Footer בתחתית.
// { Outlet } = המקום שבו ייטען תוכן העמוד הספציפי
// ============================================================
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* תוכן העמוד הספציפי ייטען כאן */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
