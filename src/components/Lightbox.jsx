import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ src, alt, caption, onClose }) {
  // סגירה ב-Escape + מניעת גלילה בגוף
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        {/* כפתור סגירה */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-white/70 hover:text-white
                     bg-white/10 hover:bg-white/20 rounded-full w-10 h-10
                     flex items-center justify-center text-xl transition-colors z-10"
          aria-label="סגור"
        >
          ✕
        </button>

        {/* התמונה */}
        <motion.figure
          className="flex flex-col items-center max-w-5xl w-full"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1,    opacity: 1 }}
          exit={{    scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={src}
            alt={alt || ''}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
          />
          {caption && (
            <figcaption className="text-white/50 text-sm italic mt-3 text-center px-4">
              {caption}
            </figcaption>
          )}
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  )
}
