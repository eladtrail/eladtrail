import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ images, index: initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const [dir, setDir]     = useState(0)

  const single = images.length === 1
  const current = images[index]

  const prev = () => { setDir(-1); setIndex((i) => (i - 1 + images.length) % images.length) }
  const next = () => { setDir( 1); setIndex((i) => (i + 1) % images.length) }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')      onClose()
      if (!single && e.key === 'ArrowLeft')  prev()
      if (!single && e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, single, index])

  const imgVariants = {
    enter:  (d) => ({ opacity: 0, x: d *  50 }),
    center: ()  => ({ opacity: 1, x: 0       }),
    exit:   (d) => ({ opacity: 0, x: d * -50 }),
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4 select-none"
        style={{ backgroundColor: 'rgba(0,0,0,0.93)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        {/* ── כפתור סגירה ─── */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-white/70 hover:text-white
                     bg-white/10 hover:bg-white/25 rounded-full w-10 h-10
                     flex items-center justify-center text-lg transition-colors z-20"
          aria-label="סגור"
        >
          ✕
        </button>

        {/* ── מונה תמונות ─── */}
        {!single && (
          <div className="absolute top-4 right-4 text-white/50 text-sm font-mono z-20">
            {index + 1} / {images.length}
          </div>
        )}

        {/* ── חץ קודם ─── */}
        {!single && (
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                       text-white/70 hover:text-white text-4xl font-thin
                       bg-white/10 hover:bg-white/25 rounded-full w-12 h-12
                       flex items-center justify-center transition-colors"
            aria-label="הקודם"
          >
            ›
          </button>
        )}

        {/* ── חץ הבא ─── */}
        {!single && (
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                       text-white/70 hover:text-white text-4xl font-thin
                       bg-white/10 hover:bg-white/25 rounded-full w-12 h-12
                       flex items-center justify-center transition-colors"
            aria-label="הבא"
          >
            ‹
          </button>
        )}

        {/* ── התמונה ─── */}
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={index}
            custom={dir}
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="flex flex-col items-center max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt || ''}
              className="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl"
            />
            {current.caption && (
              <figcaption className="text-white/50 text-sm italic mt-3 text-center px-4">
                {current.caption}
              </figcaption>
            )}
          </motion.figure>
        </AnimatePresence>

        {/* ── נקודות ניווט ─── */}
        {!single && images.length <= 20 && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setDir(i > index ? 1 : -1); setIndex(i) }}
                className={`rounded-full transition-all duration-200
                  ${i === index ? 'w-4 h-2 bg-white' : 'w-2 h-2 bg-white/35 hover:bg-white/60'}`}
                aria-label={`תמונה ${i + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
