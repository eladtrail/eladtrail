// posts.js — רשימת כל הפוסטים
// ============================================================
// זה הקובץ המרכזי שמנהל את רשימת הפוסטים באתר.
//
// כדי להוסיף פוסט חדש:
//   1. הוסף אובייקט חדש לתחילת המערך (הכי חדש = ראשון)
//   2. צור קובץ JSX ב- src/posts/[slug].jsx
//   3. הוסף Route ב- App.jsx
//
// שדות חובה: slug, title, excerpt, image, category, date
// ============================================================

export const POSTS = [
  {
    slug:     'shvil-israel',
    title:    'שביל ישראל — הסיפור האמיתי',
    excerpt:  'מה שהאינסטגרם לא מראה לכם: הרגעים הקשים, השמחה האמיתית, וכל מה שצריך לדעת לפני שיוצאים.',
    image:    'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80',
    category: 'israel',
    date:     'פברואר 2025',
  },
  {
    slug:     'patagonia',
    title:    'פטגוניה — סוף העולם',
    excerpt:  '10 ימים בין קרחונים לרוחות. Torres del Paine מקרוב ובלי ייפוי.',
    image:    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    category: 'world',
    date:     'ינואר 2025',
  },
  {
    slug:     '5-tips-beginners',
    title:    '5 טעויות שכל מטייל מתחיל עושה',
    excerpt:  'מניסיון אישי — הדברים שהייתי רוצה שמישהו יגיד לי לפני הטיול הראשון שלי.',
    image:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    category: 'tips',
    date:     'דצמבר 2024',
  },
  {
    slug:     'gear-bag-review',
    title:    'התרמיל שהלך איתי לכל מקום',
    excerpt:  'סקירה כנה על התרמיל שאיתי 3 שנים — מה עובד, מה לא, ולמי מומלץ.',
    image:    'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=600&q=80',
    category: 'gear',
    date:     'נובמבר 2024',
  },
]
