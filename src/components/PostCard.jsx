// PostCard.jsx
// ============================================================
// כרטיס פוסט — משמש בעמוד הבית ובעמוד הבלוג
//
// Props (מה מעבירים לכרטיס):
//   slug     — נתיב הפוסט (לדוגמה: "shvil-israel")
//   title    — כותרת הפוסט
//   excerpt  — תיאור קצר
//   image    — קישור לתמונה
//   category — קטגוריה (israel / world / tips / gear)
//   date     — תאריך (טקסט חופשי)
// ============================================================
import { Link } from 'react-router-dom'

// מיפוי: שם קטגוריה באנגלית → תווית עברית
const CATEGORY_LABELS = {
  israel: '🇮🇱 ישראל',
  world:  '🌍 חו"ל',
  tips:   '💡 טיפים',
  gear:   '🎒 ציוד',
}

export default function PostCard({ slug, title, excerpt, image, category, date }) {
  return (
    <article className="post-card flex flex-col">
      {/* תמונת שער */}
      <Link to={`/posts/${slug}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover"
          loading="lazy"
        />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        {/* תג קטגוריה */}
        <span className="category-tag mb-3 self-start">
          {CATEGORY_LABELS[category] || category}
        </span>

        {/* כותרת */}
        <Link to={`/posts/${slug}`}>
          <h3 className="font-display text-lg text-forest-dark mb-2 hover:text-forest-accent transition-colors leading-snug">
            {title}
          </h3>
        </Link>

        {/* תקציר */}
        <p className="text-sm text-gray-500 flex-1 leading-relaxed">{excerpt}</p>

        {/* תאריך + קרא עוד */}
        <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
          <span>{date}</span>
          <Link
            to={`/posts/${slug}`}
            className="text-forest-accent font-semibold hover:opacity-70 transition-opacity"
          >
            קרא עוד ←
          </Link>
        </div>
      </div>
    </article>
  )
}
