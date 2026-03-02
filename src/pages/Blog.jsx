import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PostCard from '../components/PostCard'
import { POSTS } from '../data/posts'

const FILTERS = [
  { value: 'all',    label: 'הכל' },
  { value: 'israel', label: '🇮🇱 ישראל' },
  { value: 'world',  label: '🌍 חו"ל' },
  { value: 'tips',   label: '💡 טיפים' },
  { value: 'gear',   label: '🎒 ציוד' },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function Blog() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? POSTS
    : POSTS.filter((p) => p.category === active)

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="title-divider" />
          <h1 className="section-title mb-2">כל הפוסטים</h1>
          <p className="text-gray-500 mb-10">תוכן אמיתי מהשטח, ללא פילטרים</p>
        </motion.div>

        {/* כפתורי פילטר */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full border-2 text-sm font-bold transition-colors
                ${active === f.value
                  ? 'bg-brand-accent text-white border-brand-accent'
                  : 'border-dark/20 text-dark/70 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300'
                }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* רשת פוסטים */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              className="text-gray-400 text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              אין פוסטים בקטגוריה זו עדיין 🌿
            </motion.p>
          ) : (
            <motion.div
              key={active}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              {filtered.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
