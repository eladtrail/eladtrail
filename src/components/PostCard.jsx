// components/PostCard.jsx
import { Link } from 'react-router-dom'

const CATEGORY_LABELS = {
  israel: '🇮🇱 ישראל',
  world:  '🌍 חו"ל',
  tips:   '💡 טיפים',
  gear:   '🎒 ציוד',
}

export default function PostCard({ slug, title, excerpt, image, category, date }) {
  return (
    <article className="post-card flex flex-col group">
      <Link to={`/posts/${slug}`} className="overflow-hidden block">
        <img src={image} alt={title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy" />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <span className="category-tag mb-3 self-start">{CATEGORY_LABELS[category] || category}</span>
        <Link to={`/posts/${slug}`}>
          <h3 className="font-display text-lg text-dark mb-2
                         hover:text-orange-600 transition-colors leading-snug">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-dark/50 flex-1 leading-relaxed">{excerpt}</p>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-orange-50 text-xs text-dark/40">
          <span>{date}</span>
          <Link to={`/posts/${slug}`}
            className="text-orange-600 font-semibold hover:opacity-70 transition-opacity flex items-center gap-1">
            קרא עוד ←
          </Link>
        </div>
      </div>
    </article>
  )
}
