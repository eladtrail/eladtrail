import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import Lightbox from './Lightbox'

export default function PhotoGrid({ images }) {
  const [selected, setSelected] = useState(null)

  const cols = images.length === 2 ? 'grid-cols-2'
             : images.length === 3 ? 'grid-cols-3'
             : 'grid-cols-2 md:grid-cols-4'

  return (
    <>
      <AnimatedSection y={20}>
        <div className={`grid ${cols} gap-2 my-8`}>
          {images.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md border border-orange-100
                         aspect-[4/3] cursor-zoom-in group relative"
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt || ''}
                className="w-full h-full object-cover group-hover:scale-105
                           transition-transform duration-500"
                loading="lazy"
              />
              {/* אינדיקטור הגדלה */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20
                              transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-2xl opacity-0 group-hover:opacity-100
                                 transition-opacity duration-300 drop-shadow-lg">⤢</span>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {selected && (
        <Lightbox
          src={selected.src}
          alt={selected.alt}
          caption={selected.caption}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}
