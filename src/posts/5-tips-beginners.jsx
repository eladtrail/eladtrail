import PostLayout from '../components/PostLayout'

const META = {
  title:    '5 טעויות שכל מטייל מתחיל עושה',
  category: '💡 טיפים',
  date:     'דצמבר 2024',
  readTime: 4,
  image:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  imageAlt: 'טיפים לטיול',
}

export default function PostTips5() {
  return (
    <PostLayout meta={META}>
      <p>אחרי עשרות טיולים, אספתי את הטעויות הכי נפוצות שראיתי — ושעשיתי בעצמי.</p>
      <ul className="space-y-3 my-4 pr-4">
        {[
          'לקחת יותר מדי ציוד לטיול הראשון',
          'לא לבדוק את מזג האוויר בצורה מעמיקה',
          'להתחיל עם מסלול קשה מדי',
          'לא לאמן את הנעליים לפני הטיול',
          'ללכת לבד בלי לספר למישהו',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-dark/70">
            <span className="bg-orange-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
            {item}
          </li>
        ))}
      </ul>
      <p>תוכן מורחב לכל סעיף יתווסף בקרוב.</p>
    </PostLayout>
  )
}
