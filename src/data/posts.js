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
    slug:     'albania-friends',
    title:    'אלבניה עם החברים',
    excerpt:  'קיץ 2020, חמישה חברים והמדינה הכי מפתיעה באירופה — ריביירה, הרים, אוכל מדהים ואנשים שחיממו את הלב.',
    image:    'https://res.cloudinary.com/dcenbexvc/image/upload/v1770728080/IMG_20190723_132443_lykmdx.jpg',
    category: 'world',
    date:     'אוגוסט 2020',
    tags:     ['אלבניה', 'חו"ל', 'ריביירה', 'טיול עם חברים'],
  },
  {
    slug:     'bashanit-range',
    title:    'רכס בשנית — לב הגולן הצפוני',
    excerpt:  'יערות אלון, בזלת שחורה ונופים לחרמון ולחולה — מדריך מקיף לאחד המסלולים הכי שווים ופחות מוכרים בצפון.',
    image:    'https://upload.wikimedia.org/wikipedia/commons/4/45/Bashanit_Ridge.jpg',
    category: 'israel',
    date:     'מרץ 2025',
    tags:     ['גולן', 'רכס בשנית', 'טיולים בצפון', 'קמפינג'],
  },
  {
    slug:     'shvil-israel',
    title:    'שביל ישראל — הסיפור האמיתי',
    excerpt:  'מה שהאינסטגרם לא מראה לכם: הרגעים הקשים, השמחה האמיתית, וכל מה שצריך לדעת לפני שיוצאים.',
    image:    'https://upload.wikimedia.org/wikipedia/commons/0/07/IsraelTrailGalilaea2.jpg',
    category: 'israel',
    date:     'פברואר 2025',
  },
  {
    slug:     '5-tips-beginners',
    title:    '5 טעויות שכל מטייל מתחיל עושה',
    excerpt:  'מניסיון אישי — הדברים שהייתי רוצה שמישהו יגיד לי לפני הטיול הראשון שלי.',
    image:    'https://upload.wikimedia.org/wikipedia/commons/e/ea/Berg_Arbel_oberhalb_des_See_Genezareth%2C_Israel-Trail.jpg',
    category: 'tips',
    date:     'דצמבר 2024',
  },
  {
    slug:     'gear-bag-review',
    title:    'התרמיל שהלך איתי לכל מקום',
    excerpt:  'סקירה כנה על התרמיל שאיתי 3 שנים — מה עובד, מה לא, ולמי מומלץ.',
    image:    'https://upload.wikimedia.org/wikipedia/commons/0/0d/Osprey_Atmos_AG_65_Backpack_%2847347379172%29.jpg',
    category: 'gear',
    date:     'נובמבר 2024',
  },
]
