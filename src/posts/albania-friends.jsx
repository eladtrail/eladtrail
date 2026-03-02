import PostLayout, { InlineImage } from '../components/PostLayout'
import ImageSlider from '../components/ImageSlider'
import AnimatedSection from '../components/AnimatedSection'

const META = {
  title:    'אלבניה עם החברים',
  category: '🌍 חו"ל',
  date:     'אוגוסט 2020',
  readTime: 12,
  image:    'https://res.cloudinary.com/dcenbexvc/image/upload/v1770728080/IMG_20190723_132443_lykmdx.jpg',
  imageAlt: 'אלבניה — טבע, חברים ונוף שלא שוכחים',
}

// ── כרטיס מידע ──────────────────────────────────────────────
function InfoCard({ icon, title, children }) {
  return (
    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 my-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-display text-lg font-bold text-dark">{title}</h3>
      </div>
      <div className="text-dark/70 leading-relaxed">{children}</div>
    </div>
  )
}

// ── כרטיס טיפ ──────────────────────────────────────────────
function TipCard({ num, title, text }) {
  return (
    <div className="flex gap-4 bg-white border border-orange-100 rounded-xl p-5 shadow-sm my-3">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-600 text-white
                      flex items-center justify-center font-bold text-sm">
        {num}
      </div>
      <div>
        <p className="font-bold text-dark mb-1">{title}</p>
        <p className="text-dark/60 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════
export default function PostAlbaniaFriends() {
  return (
    <PostLayout meta={META}>

      {/* ── פתיחה ─────────────────────────────────────────── */}
      <p>
        קיץ 2020. העולם בלגן, הטיסות בקושי חוזרות לעצמן, וכולנו רעבים לצאת
        מהבית אחרי חודשים של סגר. ואז — הכיוון הכי פחות צפוי: <strong>אלבניה</strong>.
        לא טורקיה, לא יוון, לא תאילנד. אלבניה. ארץ שרובנו בקושי שמנו עליה יד
        על המפה.
      </p>
      <p>
        אנחנו, חמישה חברים מצפון הארץ, עם תרמילים, לא הרבה כסף, והרבה סקרנות —
        החלטנו לתת צ'אנס לאחת המדינות הכי פחות מוכרות באירופה. מה שמצאנו שם
        שינה את הדרך שאנחנו מסתכלים על נסיעות.
      </p>

      <blockquote className="post-quote">
        "אלבניה היא אירופה של לפני עשרים שנה — לא מקולקלת, לא מתויירת, ובלי
        תחושת תיירות מוגזמת. בדיוק מה שחיפשנו."
      </blockquote>

      {/* ── למה אלבניה ────────────────────────────────────── */}
      <h2 className="post-h2">למה בכלל אלבניה?</h2>
      <p>
        הייתה לנו שאלה אחת: איפה אפשר לקבל חוף ים מדהים, הרים, אוכל טוב, ואנשים
        אמיתיים — בלי לשלם כמו באיטליה? התשובה עלתה שוב ושוב: אלבניה.
      </p>
      <p>
        כמה עובדות שהפתיעו אותנו לפני הנסיעה:
      </p>

      <InfoCard icon="🗺️" title="אלבניה — בקצרה">
        <ul className="space-y-2 text-sm">
          {[
            ['מיקום',       'בלקן, גבולות עם יוון, מונטנגרו, קוסובו ומקדוניה'],
            ['אוכלוסייה',   '~2.8 מיליון נפש'],
            ['מטבע',        'לק אלבני (ALL) — ~0.035 ₪ ל-1 ALL'],
            ['שפה',         'אלבנית — אנגלית נפוצה בקרב הצעירים'],
            ['בירה',        'טירנה (Tirana)'],
            ['אקלים קיץ',   'חם ויבש בחוף, נעים יותר בהרים'],
            ['ויזה',        'ישראלים לא צריכים ויזה'],
            ['טיסה',        'כ-2.5 שעות מתל אביב'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60 text-left max-w-[60%]">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* ── טירנה ─────────────────────────────────────────── */}
      <h2 className="post-h2">טירנה — עיר שמסרבת להיות משעממת</h2>
      <p>
        נחתנו בטירנה עם ציפיות נמוכות. יצאנו עם פה פעור. הבירה של אלבניה היא
        אחת הערים הצבעוניות, הרועשות והחיות שביקרתי. הבניינים הקומוניסטים
        הישנים מצופים בצבעים של זוהר — כחול חזק, כתום, ירוק — יוזמה של ראש
        העיר לפני עשורים שהפכה לסמל.
      </p>
      <p>
        <strong>כיכר סקנדרבג</strong> היא הלב של העיר. אתרמו שם ב-Blloku,
        השכונה שהייתה שמורה רק לאנשי המפלגה הקומוניסטית בתקופת הדיקטטורה
        וכיום היא מוקד הבילוי הכי שוקק. קפה ב-50 ₪ ישראלי לאדם כולל ארוחת בוקר,
        רחוב שאי אפשר לעמוד מהצלחות של מזון מקומי בזול.
      </p>

      {/* ── ריביירה ───────────────────────────────────────── */}
      <h2 className="post-h2">הריביירה האלבנית — אחת הכמוסות של ים התיכון</h2>
      <p>
        שמעתם על ריביירה צרפתית. על חוף האמלפי. על סנטוריני. יש גם ריביירה
        אלבנית — ורוב תיירי העולם עדיין לא יודעים שהיא קיימת.
      </p>
      <p>
        מ-<strong>Vlorë</strong> ועד <strong>Sarandë</strong> — כ-150 ק"מ של
        חוף ים עם מים בטורקיז כהה, חופים שאין בהם אף מונופוד-סלפי, ואוכל ים
        טרי שהוגש לנו ישר מהסירה לצלחת. הלכנו ל-<strong>Dhermi</strong>,
        <strong>Himara</strong> ו-<strong>Ksamil</strong> — ו-Ksamil גנב לנו
        את הלב.
      </p>

      <InlineImage
        src="https://res.cloudinary.com/dcenbexvc/image/upload/v1770912596/MatzegetAlbania_quicjx.png"
        alt="אנחנו באלבניה — אחד הרגעים שלא שוכחים"
        caption="הקבוצה שלנו באלבניה — חמישה חברים, ארץ אחת שהפתיעה אותנו"
      />

      <p>
        Ksamil היא עיירת חוף קטנה ממש על הגבול עם יוון, מול האי קורפו.
        המים כל כך שקופים שאפשר לראות את האצות בעומק של 4–5 מטר.
        שכרנו סירה ל-3 שעות, הגענו לאיים קטנים ביניים, ובילינו יום שלם
        מבלי לפגוש אף תייר ישראלי אחר.
      </p>

      {/* ── בראט ──────────────────────────────────────────── */}
      <h2 className="post-h2">בראט — עיר אלף החלונות</h2>
      <p>
        אם יש עיר אחת שצריך לראות באלבניה — זו <strong>Berat</strong>.
        עיר UNESCO עתיקת יומין, שבנויה על הר ומוצפת בבתים לבנים עם
        חלונות ענקיים שמשקיפים לאגן התחתי. התמונות לא עושות לה צדק.
      </p>
      <p>
        עלינו לטירה הביזנטית בשעת שקיעה. מהחומות ראינו את כל העיר
        מתפרשת מתחתינו — הנהר Osum, הרבעים הישנים Gorica ו-Mangalem,
        ואיזה שקט מוזר שלא ציפינו לו. שקט מהסוג שמרגישים רק כשממש
        רחוק מהבית.
      </p>

      {/* ── אוכל ──────────────────────────────────────────── */}
      <h2 className="post-h2">האוכל — הפתעה הגדולה של הנסיעה</h2>

      <div className="space-y-4 my-5">
        {[
          {
            icon: '🥗',
            title: 'Tavë Kosi',
            text: 'תבשיל טלה עם יוגורט ביצים שנאפה בתנור. נשמע פשוט, טעים בצורה שקשה להסביר. המנה הלאומית של אלבניה ומוצדק לחלוטין.',
          },
          {
            icon: '🫓',
            title: 'Byrek',
            text: 'בורק אלבני — בצק עלים במילויים שונים (גבינה, בשר, תרד). נמכר בכל פינה ב-50-80 ₪ ישראלי ל-3 חתיכות. ארוחת הבוקר הכי טובה שיש.',
          },
          {
            icon: '🐟',
            title: 'פירות ים טריים',
            text: 'על החוף הגשו לנו קלמרי, שרימפס וסרטנים שנדגו אותו בוקר. מחיר לאדם כולל יין לבן: כ-80–100 ₪. זה לא טעות בכתיב.',
          },
          {
            icon: '☕',
            title: 'הקפה האלבני',
            text: 'אלבנים שותים קפה כמו שאיטלקים שותים קפה — בכבוד, לאט, פעמיים ביום. הקפה המקומי חזק, איכותי ועולה פחות משקל.',
          },
        ].map((item) => (
          <div key={item.title}
            className="flex gap-4 bg-white border border-orange-100 rounded-xl p-5 shadow-sm">
            <span className="text-2xl flex-shrink-0">{item.icon}</span>
            <div>
              <p className="font-bold text-dark mb-1">{item.title}</p>
              <p className="text-dark/60 text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── רגעים ─────────────────────────────────────────── */}
      <h2 className="post-h2">הרגעים שזוכרים</h2>
      <p>
        חמישה ימים. אבל יש רגעים שנשארים הרבה יותר זמן:
      </p>
      <p>
        <strong>היום שאבדנו את הדרך לכפר הרים קטן ליד Berat</strong> —
        עצרנו לשאול כיוון, ובעל הבית הזמין אותנו פנימה לקפה. אחרי עשר
        דקות לא הצלחנו לצאת משם. שעתיים של אוכל, שתייה מקומית ושיחה
        עם גוגל-טרנסלייט. האדם הזה לא קיבל שקל.
      </p>
      <p>
        <strong>שחיית לילה בים ב-Ksamil</strong> — מים שחורים, כוכבים ולא
        נשמת אדם על החוף. ממש, ממש לא ישראל.
      </p>
      <p>
        <strong>הנסיעה ב-Llogara Pass</strong> — מעבר הרים בגובה 1,027 מטר
        עם צוקים מצד ימין וים כחול עמוק מצד שמאל. אחת מנסיעות האוטו
        הכי יפות שעשיתי בחיי. הנהג שלנו עשה את זה ב-120 קמ"ש — פחות יפה.
      </p>

      {/* ── תקציב ─────────────────────────────────────────── */}
      <h2 className="post-h2">תקציב — אלבניה עדיין זולה (מאוד)</h2>

      <InfoCard icon="💰" title="עלויות ממוצעות — קיץ 2020">
        <ul className="space-y-2 text-sm">
          {[
            ['לינה (Hostel/AirBnB)',  '40–80 ₪ לאדם ללילה'],
            ['ארוחה מלאה במסעדה',    '30–60 ₪ לאדם'],
            ['פירות ים על החוף',     '80–120 ₪ לאדם'],
            ['תחבורה פנימית (minibus)', '5–15 ₪ לנסיעה'],
            ['שכירת סירה (3 שעות)',   '120 ₪ לכלל הקבוצה'],
            ['כניסה לאתרים',         '10–25 ₪'],
            ['ממוצע יומי סה"כ',       '200–280 ₪ לאדם'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-orange-600 font-semibold text-sm">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* ── טיפים ─────────────────────────────────────────── */}
      <h2 className="post-h2">7 טיפים לנסיעה לאלבניה</h2>

      <TipCard
        num={1}
        title="השתמשו ב-Minibus המקומי"
        text="ה-Furgon (מינibbus) זו רשת התחבורה הלא-רשמית של אלבניה. זול, מהיר ומראה לכם את המדינה האמיתית. Google Maps לפעמים לא מכיר אותם — שאלו את המלצייה."
      />
      <TipCard
        num={2}
        title="הביאו מזומן — לק אלבני (ALL)"
        text="כרטיסי אשראי עובדים בערים הגדולות אבל לא בחוף ולא בכפרים. שלפו כסף בכניסה לארץ. שערי החליפין בבנקים עדיפים על החלפות בשוק."
      />
      <TipCard
        num={3}
        title="הזמינו לינה מראש בעונת הקיץ"
        text="הריביירה בקיץ מלאה מאוד — בעיקר תיירים מקוסובו, מקדוניה ואיטליה. בלי הזמנה מראש ב-Ksamil ו-Dhermi בפיק קיץ — לא מצאנו מקום."
      />
      <TipCard
        num={4}
        title="אל תדלגו על בראט"
        text="רוב התיירים מדלגים על בראט ונשארים בחוף. טעות ענקית. בראט היא אחת הערים הכי יפות שיש בבלקן. לינה שם לילה אחד לפחות."
      />
      <TipCard
        num={5}
        title="קבלו את הנהיגה כחלק מהחוויה"
        text="הנהיגה באלבניה היא... ייחודית. אל תנסו להבין את חוקי התנועה, אל תתנגדו, ותכננו זמן נסיעה כפול ממה שמוצג ב-Google."
      />
      <TipCard
        num={6}
        title="דברו עם אנשים"
        text="האלבנים מאוד חמים כלפי תיירים. קצת אנגלית, הרבה חיוך ומוכנות להיכנס לשיחה — ותגיעו לחוויות שלא יהיו בשום מדריך. כמו הזמנה לארוחת ערב בבית פרטי."
      />
      <TipCard
        num={7}
        title="בואו מוקדם בעונה"
        text="יוני ותחילת יולי עדיפים על אוגוסט. יותר שקט, פחות תיירים, מחירים נמוכים יותר. הים חם מאוד וכמעט אין עומס."
      />

      {/* ── מצגת ──────────────────────────────────────────── */}
      <h2 className="post-h2">אלבניה — הפנינה הפראית של הבלקן</h2>
      <p>
        14 תמונות שמספרות את הנסיעה טוב יותר מכל מילה. גללו קדימה.
      </p>

      <AnimatedSection y={24}>
        <ImageSlider images={[
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_1_ufoc4c.jpg',  caption: 'אלבניה — הפנינה הפראית של הבלקן' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_2_gp1y5y.jpg',  caption: 'הריביירה האלבנית — מים בטורקיז שהעולם עוד לא גילה' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_3_refvdm.jpg',  caption: 'בין הים להרים — נוף שקשה להפסיק להסתכל עליו' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_4_ymkbqv.jpg',  caption: 'Ksamil — גן עדן על הגבול עם יוון' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_5_tzwkh2.jpg',  caption: 'החוף האלבני — שקיפות שקשה להאמין' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_6_afawpu.jpg',  caption: 'Llogara Pass — מעבר ההרים שגרם לנו לעצור ולנשום' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_7_bvu1mn.jpg',  caption: 'בראט — עיר אלף החלונות, אתר UNESCO' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_8_ybt2e8.jpg',  caption: 'מהטירה הביזנטית — נוף על הנהר ועל העיר מתחת' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_9_laav4q.jpg',  caption: 'הכפרים הנסתרים של ההרים האלבניים' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_10_x1ihok.jpg', caption: 'טירנה — הבירה שמסרבת להיות עגומה' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_11_wvswf6.jpg', caption: 'רחובות Blloku — שכונת הגיהינום הקומוניסטי שהפכה למרכז חיים' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_12_c9k1qn.jpg', caption: 'שקיעה על חוף הים — הרגע שלא שוכחים' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_13_h4rfyt.jpg', caption: 'אנשים ונופים — לב הנסיעה' },
          { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/Albania_The_Wild_Pearl_of_the_Balkans_14_nylykz.jpg', caption: 'אלבניה — ניפגש שוב. זה לא סוף, זה התחלה.' },
        ]} />
      </AnimatedSection>

      {/* ── סיכום ─────────────────────────────────────────── */}
      <h2 className="post-h2">אחרי הכל — האם חוזרים?</h2>
      <p>
        כולנו בקבוצה ענינו "כן" עוד לפני שנחתנו בחזרה. אלבניה נתנה לנו
        בדיוק את מה שחיפשנו: ים מדהים, הרים, אוכל אמיתי, ואנשים שלא
        התיירות עדיין לא קלקלה אותם. הכל בתקציב שמגוחך בהשוואה לכל
        מדינה אירופאית אחרת.
      </p>
      <p>
        אחרי שנתיים שמנו אותה על המפה, נראה שאלבניה מתחילה לקבל
        את תשומת הלב שמגיעה לה. אני ממליץ לכם לא לחכות יותר מדי —
        עוד כמה שנים יהיה שם יותר קוסטרבאר ופחות מה שהביא אותנו לשם.
      </p>

      <blockquote className="post-quote">
        "אלבניה לימדה אותי שהמקומות הכי שווים הם לא תמיד אלה שכולם
        כבר מכירים — לפעמים צריך לחפש קצת יותר מזרח על המפה."
      </blockquote>

    </PostLayout>
  )
}
