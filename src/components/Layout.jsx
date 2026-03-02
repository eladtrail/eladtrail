import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          className="flex-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}
