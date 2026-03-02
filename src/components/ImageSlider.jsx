import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = back

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }
  const next = () => {
    setDirection(1)
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }
  const goTo = (i) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }

  if (!images || images.length === 0) return null

  return (
    <div className="relative my-8 rounded-3xl overflow-hidden shadow-xl border border-orange-100">
      {/* תמונה */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            src={images[current].src}
            alt={images[current].caption || ''}
            className="w-full h-72 md:h-96 object-cover"
            custom={direction}
            variants={{
              enter: (d) => ({ opacity: 0, x: d * 40 }),
              center: { opacity: 1, x: 0 },
              exit:  (d) => ({ opacity: 0, x: d * -40 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          />
        </AnimatePresence>

        {/* חיצים */}
        <motion.button onClick={prev}
          className="absolute right-3 top-1/2 -translate-y-1/2
                     bg-white/80 hover:bg-white text-dark rounded-full
                     w-10 h-10 flex items-center justify-center
                     shadow-lg text-lg z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          ›
        </motion.button>
        <motion.button onClick={next}
          className="absolute left-3 top-1/2 -translate-y-1/2
                     bg-white/80 hover:bg-white text-dark rounded-full
                     w-10 h-10 flex items-center justify-center
                     shadow-lg text-lg z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          ‹
        </motion.button>

        {/* מספר תמונה */}
        <div className="absolute top-3 left-3 bg-black/40 text-white
                        text-xs font-bold px-3 py-1 rounded-full z-10">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* כיתוב */}
      <AnimatePresence mode="wait">
        {images[current].caption && (
          <motion.div
            key={current + '-caption'}
            className="bg-orange-50 px-5 py-3 text-sm text-dark/60 italic text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {images[current].caption}
          </motion.div>
        )}
      </AnimatePresence>

      {/* נקודות ניווט */}
      <div className="flex justify-center gap-2 py-3 bg-orange-50">
        {images.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-colors duration-200 ${
              i === current
                ? 'bg-orange-600 w-6 h-2'
                : 'bg-orange-200 hover:bg-orange-400 w-2 h-2'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.85 }}
          />
        ))}
      </div>
    </div>
  )
}
