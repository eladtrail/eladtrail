import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import Lightbox from './Lightbox'

function ShareButtons({ title, url }) {
  const encoded = encodeURIComponent(url || window.location.href)
  const encodedTitle = encodeURIComponent(title)

  const buttons = [
    {
      label: 'שתף בפייסבוק',
      color: 'bg-blue-600 hover:bg-blue-700',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M24 12.073C24 5.445 18.627 0 12 0S0 5.445 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
        </svg>
      ),
    },
    {
      label: 'שתף בוואצאפ',
      color: 'bg-green-500 hover:bg-green-600',
      url: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      label: 'העתק קישור',
      color: 'bg-orange-600 hover:bg-orange-700',
      onClick: () => {
        navigator.clipboard.writeText(window.location.href)
        alert('הקישור הועתק! 📋')
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      <span className="text-sm font-semibold text-dark/50 self-center">שתף:</span>
      {buttons.map((btn) =>
        btn.onClick ? (
          <motion.button key={btn.label} onClick={btn.onClick}
            className={`share-btn text-white ${btn.color}`}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}>
            {btn.icon}
            {btn.label}
          </motion.button>
        ) : (
          <motion.a key={btn.label} href={btn.url} target="_blank" rel="noreferrer"
            className={`share-btn text-white ${btn.color}`}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}>
            {btn.icon}
            {btn.label}
          </motion.a>
        )
      )}
    </div>
  )
}

export default function PostLayout({ meta, children }) {
  const { title, category, date, image, imageAlt, readTime } = meta

  return (
    <motion.article
      className="max-w-3xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* ===== כותרת ===== */}
      <motion.header
        className="mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-2 text-sm text-dark/40 mb-5">
          <Link to="/" className="hover:text-orange-600 transition-colors">בית</Link>
          <span>›</span>
          <Link to="/blog" className="hover:text-orange-600 transition-colors">בלוג</Link>
          <span>›</span>
          <span className="text-orange-600">{title}</span>
        </div>

        <span className="category-tag mb-4 inline-block">{category}</span>

        <h1 className="font-display text-4xl md:text-5xl text-dark leading-tight mb-4">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-dark/40 pb-5 border-b border-orange-100">
          <span>📅 {date}</span>
          {readTime && <span>⏱ {readTime} דקות קריאה</span>}
          <div className="mr-auto">
            <ShareButtons title={title} />
          </div>
        </div>
      </motion.header>

      {/* ===== תמונת שער ===== */}
      {image && (
        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl mb-10 border-4 border-orange-50"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <img src={image} alt={imageAlt || title}
            className="w-full h-80 md:h-96 object-cover" />
        </motion.div>
      )}

      {/* ===== תוכן הכתבה ===== */}
      <motion.div
        className="space-y-5 text-dark/75 leading-loose text-[1.05rem]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
      >
        {children}
      </motion.div>

      {/* ===== שיתוף בתחתית ===== */}
      <AnimatedSection y={20}>
        <div className="mt-12 pt-8 border-t border-orange-100">
          <p className="font-semibold text-dark/60 mb-4">אהבת? שתף את המסלול! 🇮🇱</p>
          <ShareButtons title={title} />
        </div>

        <div className="mt-8">
          <Link to="/blog"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold
                       hover:gap-3 transition-all duration-200">
            ← חזרה לכל הפוסטים
          </Link>
        </div>
      </AnimatedSection>
    </motion.article>
  )
}

export function InlineImage({ src, alt, caption }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AnimatedSection y={20}>
        <figure className="my-8">
          <div
            className="rounded-2xl overflow-hidden shadow-lg border border-orange-100
                       cursor-zoom-in group relative"
            onClick={() => setOpen(true)}
          >
            <img src={src} alt={alt} className="w-full object-cover
                       group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15
                            transition-colors duration-300 flex items-center justify-center">
              <span className="text-white text-3xl opacity-0 group-hover:opacity-100
                               transition-opacity duration-300 drop-shadow-lg">⤢</span>
            </div>
          </div>
          {caption && (
            <figcaption className="text-center text-sm text-dark/40 mt-2 italic">
              {caption}
            </figcaption>
          )}
        </figure>
      </AnimatedSection>

      {open && (
        <Lightbox src={src} alt={alt} caption={caption} onClose={() => setOpen(false)} />
      )}
    </>
  )
}
