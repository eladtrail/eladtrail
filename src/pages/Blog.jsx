// pages/Blog.jsx — עמוד הבלוג עם פילטר קטגוריות
import { useState } from 'react'
import PostCard from '../components/PostCard'
import { POSTS } from '../data/posts'

const FILTERS = [
  { value: 'all',    label: 'הכל' },
  { value: 'israel', label: '🇮🇱 ישראל' },
  { value: 'world',  label: '🌍 חו"ל' },
  { value: 'tips',   label: '💡 טיפים' },
  { value: 'gear',   label: '🎒 ציוד' },
]

export default function Blog() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? POSTS
    : POSTS.filter((p) => p.category === active)

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="title-divider" />
        <h1 className="section-title mb-2">כל הפוסטים</h1>
        <p className="text-gray-500 mb-10">תוכן אמיתי מהשטח, ללא פילטרים</p>

        {/* כפתורי פילטר */}
        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full border-2 text-sm font-bold transition-all
                ${active === f.value
                  ? 'bg-brand-accent text-white border-brand-accent'
                  : 'border-dark/20 text-dark/70 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* רשת פוסטים */}
        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center py-20">אין פוסטים בקטגוריה זו עדיין 🌿</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
