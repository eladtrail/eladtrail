import PostLayout from '../components/PostLayout'

const META = {
  title:    'פטגוניה — סוף העולם',
  category: '🌍 חו"ל',
  date:     'ינואר 2025',
  readTime: 5,
  image:    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
  imageAlt: 'פטגוניה',
}

export default function PostPatagonia() {
  return (
    <PostLayout meta={META}>
      <p>פטגוניה — המקום שמשנה אנשים. 10 ימים בין הרים, קרחונים ורוחות שלא עוצרות.</p>
      <blockquote className="post-quote">"הרוח בפטגוניה לא שואלת רשות."</blockquote>
      <h2 className="post-h2">Torres del Paine — W Circuit</h2>
      <p>המסלול הקלאסי. 5 ימים, ~80 ק"מ, נופים שאין להם מילים. תוכן מלא יתווסף בקרוב.</p>
    </PostLayout>
  )
}
