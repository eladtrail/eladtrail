// posts/5-tips-beginners.jsx
const META = {
  title:    '5 טעויות שכל מטייל מתחיל עושה',
  category: '💡 טיפים',
  date:     'דצמבר 2024',
  image:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  imageAlt: 'טיפים לטיול',
}

export default function PostTips5() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <span className="category-tag mb-4 inline-block">{META.category}</span>
        <h1 className="font-display text-4xl md:text-5xl text-forest-dark leading-tight mb-3">{META.title}</h1>
        <p className="text-gray-400 text-sm">{META.date}</p>
      </header>
      <img src={META.image} alt={META.imageAlt} className="w-full h-80 object-cover rounded-2xl shadow-lg mb-10" />
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>אחרי עשרות טיולים, אספתי את הטעויות הכי נפוצות שראיתי — ושעשיתי בעצמי.</p>
        <ul className="list-decimal list-inside space-y-3">
          <li>לקחת יותר מדי ציוד לטיול הראשון</li>
          <li>לא לבדוק את מזג האוויר בצורה מעמיקה</li>
          <li>להתחיל עם מסלול קשה מדי</li>
          <li>לא לאמן את הנעליים לפני הטיול</li>
          <li>ללכת לבד בלי לספר למישהו</li>
        </ul>
        <p>תוכן מורחב לכל סעיף יתווסף בקרוב.</p>
      </div>
      <div className="mt-14 pt-8 border-t border-gray-200">
        <a href="/blog" className="text-forest-accent font-semibold hover:underline">← חזרה לכל הפוסטים</a>
      </div>
    </article>
  )
}
