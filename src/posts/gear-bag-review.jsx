import PostLayout from '../components/PostLayout'

const META = {
  title:    'התרמיל שהלך איתי לכל מקום',
  category: '🎒 ציוד',
  date:     'נובמבר 2024',
  readTime: 5,
  image:    'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=1200&q=80',
  imageAlt: 'תרמיל טיול',
}

export default function PostGearBag() {
  return (
    <PostLayout meta={META}>
      <p>3 שנים, עשרות מסלולים, מדינות שונות — עם אותו תרמיל. סקירה כנה לחלוטין.</p>
      <h2 className="post-h2">מה עובד מצוין</h2>
      <p>תוכן מלא יתווסף בקרוב.</p>
      <h2 className="post-h2">מה פחות אהבתי</h2>
      <p>תוכן מלא יתווסף בקרוב.</p>
    </PostLayout>
  )
}
