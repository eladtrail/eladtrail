// posts/gear-bag-review.jsx
const META = {
  title:    'התרמיל שהלך איתי לכל מקום',
  category: '🎒 ציוד',
  date:     'נובמבר 2024',
  image:    'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=1200&q=80',
  imageAlt: 'תרמיל טיול',
}

export default function PostGearBag() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <span className="category-tag mb-4 inline-block">{META.category}</span>
        <h1 className="font-display text-4xl md:text-5xl text-forest-dark leading-tight mb-3">{META.title}</h1>
        <p className="text-gray-400 text-sm">{META.date}</p>
      </header>
      <img src={META.image} alt={META.imageAlt} className="w-full h-80 object-cover rounded-2xl shadow-lg mb-10" />
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>3 שנים, עשרות מסלולים, מדינות שונות — עם אותו תרמיל. סקירה כנה לחלוטין.</p>
        <h2 className="font-display text-2xl text-forest-dark mt-8">מה עובד מצוין</h2>
        <p>תוכן מלא יתווסף בקרוב.</p>
        <h2 className="font-display text-2xl text-forest-dark mt-8">מה פחות אהבתי</h2>
        <p>תוכן מלא יתווסף בקרוב.</p>
      </div>
      <div className="mt-14 pt-8 border-t border-gray-200">
        <a href="/blog" className="text-forest-accent font-semibold hover:underline">← חזרה לכל הפוסטים</a>
      </div>
    </article>
  )
}
