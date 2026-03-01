// components/ImageSlider.jsx
// שימוש בכתבה:
// import ImageSlider from '../components/ImageSlider'
// <ImageSlider images={[
//   { src: '/תמונה1.jpg', caption: 'כיתוב' },
//   { src: '/תמונה2.jpg', caption: 'כיתוב' },
// ]} />

import { useState } from 'react'

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  if (!images || images.length === 0) return null

  return (
    <div className="relative my-8 rounded-3xl overflow-hidden shadow-xl border border-orange-100">
      {/* תמונה */}
      <div className="relative">
        <img
          key={current}
          src={images[current].src}
          alt={images[current].caption || ''}
          className="w-full h-72 md:h-96 object-cover"
          style={{ animation: 'fadeUp 0.4s ease' }}
        />

        {/* חיצים */}
        <button onClick={prev}
          className="absolute right-3 top-1/2 -translate-y-1/2
                     bg-white/80 hover:bg-white text-dark rounded-full
                     w-10 h-10 flex items-center justify-center
                     shadow-lg transition-all hover:scale-105 text-lg">
          ›
        </button>
        <button onClick={next}
          className="absolute left-3 top-1/2 -translate-y-1/2
                     bg-white/80 hover:bg-white text-dark rounded-full
                     w-10 h-10 flex items-center justify-center
                     shadow-lg transition-all hover:scale-105 text-lg">
          ‹
        </button>

        {/* מספר תמונה */}
        <div className="absolute top-3 left-3 bg-black/40 text-white
                        text-xs font-bold px-3 py-1 rounded-full">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* כיתוב */}
      {images[current].caption && (
        <div className="bg-orange-50 px-5 py-3 text-sm text-dark/60 italic text-center">
          {images[current].caption}
        </div>
      )}

      {/* נקודות ניווט */}
      <div className="flex justify-center gap-2 py-3 bg-orange-50">
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? 'bg-orange-600 w-6 h-2'
                : 'bg-orange-200 hover:bg-orange-400 w-2 h-2'
            }`}
          />
        ))}
      </div>
    </div>
  )
}