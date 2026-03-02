import PostLayout, { InlineImage } from '../components/PostLayout'
import PhotoGrid from '../components/PhotoGrid'

const META = {
  title:    'רכס בשנית — לב הגולן הצפוני',
  category: '🇮🇱 ישראל',
  date:     'מרץ 2025',
  readTime: 10,
  image:    'https://upload.wikimedia.org/wikipedia/commons/4/45/Bashanit_Ridge.jpg',
  imageAlt: 'רכס בשנית — הגולן הצפוני',
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

// ── כרטיס מסלול ─────────────────────────────────────────────
const DIFFICULTY_STYLES = {
  קל:    { dot: 'bg-green-500',  badge: 'bg-green-100 text-green-800' },
  בינוני: { dot: 'bg-yellow-500', badge: 'bg-yellow-100 text-yellow-800' },
  קשה:   { dot: 'bg-red-500',    badge: 'bg-red-100 text-red-800' },
}

function RouteCard({ difficulty, name, distance, time, description }) {
  const style = DIFFICULTY_STYLES[difficulty] ?? DIFFICULTY_STYLES['בינוני']
  return (
    <div className="border border-orange-100 rounded-2xl p-5 my-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${style.dot}`} />
          <span className="font-bold text-dark">{name}</span>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${style.badge}`}>
          {difficulty}
        </span>
      </div>
      <div className="flex gap-4 text-sm text-dark/50 mb-3">
        <span>📏 {distance}</span>
        <span>⏱ {time}</span>
      </div>
      <p className="text-dark/65 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

// ── כרטיס מקום לינה ─────────────────────────────────────────
function CampSpot({ number, name, description, coords }) {
  return (
    <div className="flex gap-4 my-4">
      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <div>
        <p className="font-bold text-dark mb-1">{name}</p>
        <p className="text-dark/65 text-sm leading-relaxed">{description}</p>
        {coords && (
          <p className="text-xs text-orange-600 mt-1 font-mono">📍 {coords}</p>
        )}
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════
export default function PostBashanitRange() {
  return (
    <PostLayout meta={META}>

      {/* ── פסקת פתיחה ────────────────────────────────────── */}
      <p>
        יש מקומות בישראל שמרגישים כמו סוד ישן — לא נמצאים בשום רשימת "טופ 10",
        לא מוצפים בטיולים ארגוניים, ואפשר ללכת שם שעות שלמות בלי לפגוש נשמה חיה.
        רכס בשנית הוא בדיוק כזה. שוכן בצפון הגולן, בין יערות אלון מקרין ושדות בזלת שחורים,
        הרכס מתנשא אל עבר השמים עם נופים שמכסים בבת אחת את חרמון בלבנו, בקעת החולה הירוקה,
        ולבנון מעבר לגבול.
      </p>
      <p>
        הגולן הצפוני הוא עולם בפני עצמו: קרקע וולקנית שחורה, אביב שמתפרץ בפרחי כלנית
        ורקפת, ושקט כזה שאפשר לשמוע בו רק רוח ועופות דורסים מעל הראש. רכס בשנית אינו
        קל ואינו קצר — הוא מסלול שדורש הכנה, ומחזיר אותה בריבית.
      </p>

      <blockquote className="post-quote">
        "בשנית לא מספרת את עצמה למי שעובר בחיפזון. היא נפתחת לאט, קפל אחרי קפל."
      </blockquote>

      {/* ── איך מגיעים ────────────────────────────────────── */}
      <h2 className="post-h2">איך מגיעים</h2>
      <p>
        הגישה העיקרית לרכס בשנית היא דרך כביש 98, עורק השדרה של הגולן הצפוני
        שרץ לאורך הרמה מדרום לצפון. מכביש 98 פונים בסמוך לצומת מרום הגולן אל
        הדרכים הכפריות שמובילות לאתרי החניה.
      </p>

      <InfoCard icon="🚗" title="מתל אביב — כ-2:30 שעות (185 ק״מ)">
        <ol className="space-y-1 list-decimal pr-4">
          <li>כביש 6 צפונה עד כביש 77 (מחלף כרמיאל)</li>
          <li>כביש 77 מזרחה → כביש 90 צפונה לאורך הכינרת</li>
          <li>בכפר נחום — צומת כביש 87 מזרחה לגולן</li>
          <li>כביש 87 → כביש 98 צפונה עד צומת מרום הגולן</li>
          <li>פנייה ימינה לדרך השדה לעבר אתר החניה</li>
        </ol>
      </InfoCard>

      <InfoCard icon="🚗" title="מחיפה — כ-1:45 שעות (130 ק״מ)">
        <ol className="space-y-1 list-decimal pr-4">
          <li>כביש 70 צפון-מזרח → כביש 85 מזרחה (דרך עכו)</li>
          <li>כביש 85 → כביש 90 צפונה דרך קרית שמונה</li>
          <li>פנייה דרומה-מזרחה על כביש 99 לגולן</li>
          <li>כביש 99 → כביש 98 דרומה עד צומת מרום הגולן</li>
        </ol>
      </InfoCard>

      <InfoCard icon="🚗" title="מירושלים — כ-2:45 שעות (215 ק״מ)">
        <ol className="space-y-1 list-decimal pr-4">
          <li>כביש 1 מערבה → כביש 6 צפונה</li>
          <li>כביש 6 → כביש 90 צפונה לאורך בקעת הירדן והכינרת</li>
          <li>צומת כביש 87 מזרחה → כביש 98 צפונה</li>
          <li>צומת מרום הגולן — פנייה לאתרי הרכס</li>
        </ol>
      </InfoCard>

      {/* ── חניה ──────────────────────────────────────────── */}
      <h2 className="post-h2">חניה</h2>
      <p>
        אין תשלום חניה ברוב נקודות הגישה לרכס. הדרכים הכפריות מסודרות אך צרות —
        רכב גבוה מומלץ לאחר גשמים. בעונת הקיץ החניות מתמלאות מוקדם; הגיעו עד 8:00.
      </p>

      <div className="space-y-3 my-4">
        {[
          {
            name: 'חניית שמורת בשנית הצפונית',
            desc: 'הנגישה ביותר, מרוצפת חלקית, מתאימה לרכב רגיל. 15 מקומות.',
            coords: '33.1528° N, 35.7481° E',
          },
          {
            name: 'חניית יער מרום הגולן',
            desc: 'חניה ביערנות — עפר, מרווחת יותר. מתאימה לקבוצות ולרכב גבוה.',
            coords: '33.1432° N, 35.7563° E',
          },
          {
            name: 'חניית נחל גלבון',
            desc: 'בשולי נחל גלבון, נוחה לגישה למסלולים הדרומיים של הרכס.',
            coords: '33.1589° N, 35.7412° E',
          },
        ].map((spot) => (
          <div key={spot.name}
            className="flex gap-3 bg-white border border-orange-100 rounded-xl p-4 shadow-sm">
            <span className="text-orange-500 mt-0.5 text-xl flex-shrink-0">🅿️</span>
            <div>
              <p className="font-semibold text-dark text-sm">{spot.name}</p>
              <p className="text-dark/60 text-sm">{spot.desc}</p>
              <p className="font-mono text-xs text-orange-600 mt-1">{spot.coords}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── מפה אינטראקטיבית ──────────────────────────────── */}
      <h2 className="post-h2">מפה אינטראקטיבית</h2>
      <p>
        המפה מציגה את אזור רכס בשנית ברמת הגולן הצפונית. ניתן להתקרב, להרחיק
        ולחפש את נקודות הגישה והמסלולים.
      </p>
      <div className="rounded-2xl overflow-hidden border border-orange-100 shadow-lg my-6">
        <iframe
          title="רכס בשנית — מפה"
          src="https://maps.google.com/maps?q=33.15,35.75&z=13&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* ── מקומות לינה ───────────────────────────────────── */}
      <h2 className="post-h2">מקומות לינה בשטח</h2>
      <p>
        אין אתרי קמפינג מסודרים ברכס בשנית עצמו — הלינה היא פראית ודורשת
        תיאום עם רשות הטבע והגנים ועם צבא ההגנה לישראל (ראו טיפים חשובים).
        שלושת האתרים הבאים מומלצים על ידי מטיילים מנוסים.
      </p>

      <div className="divide-y divide-orange-100 border border-orange-100 rounded-2xl p-4 my-6">
        <CampSpot
          number={1}
          name='מישור ואדי בשנית — ״קמפ הנחל״'
          description='שטח דשאי מוגן על גדת הנחל, מוצל באלונים. זרימת מים עונתית קרובה. מתאים לאוהלים עד 4 אנשים. הגנה טובה מרוחות צפון.'
          coords='33.1551° N, 35.7468° E'
        />
        <CampSpot
          number={2}
          name='פסגת הרכס המרכזית — ״כיכר הכוכבים״'
          description='מרבד בזלת שטוח בין שני שיאי הרכס, ללא עצים — שמי לילה פתוחים לגמרי. חשיפה לרוח גבוהה, לכן חובה טריזים איכותיים לאוהל. הנוף בשקיעה ובזריחה הוא הטוב ביותר במסלול.'
          coords='33.1495° N, 35.7532° E'
        />
        <CampSpot
          number={3}
          name='חורשת האלונים הדרומית — ״המסתור״'
          description='חורשה צפופה ומוגנת בקצה הדרומי של הרכס. מתאים ללינות חורף וסתיו. דורש ניווט בסמוך לגדר צבאית — קיראו את הטיפים לפני הגעה.'
          coords='33.1401° N, 35.7589° E'
        />
      </div>

      <InlineImage
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/139434_golan_heights_rechs_senit_reserve_hizka_PikiWiki_Israel.jpg"
        alt="שמורת רכס בשנית — הגולן"
        caption="שמורת רכס בשנית — יערות האלון על הרמה הוולקנית"
      />

      {/* ── מסלולים ───────────────────────────────────────── */}
      <h2 className="post-h2">מסלולים</h2>
      <p>
        שלושת המסלולים מתוארים מנקודת פתיחה של חניית שמורת בשנית הצפונית.
        כל המסלולים מסומנים בשילוט שביל ישראל ובשילוט רשות הטבע והגנים.
      </p>

      <RouteCard
        difficulty="קל"
        name="מסלול משפחתי — מעיין הבשנית"
        distance="4.2 ק״מ"
        time="1:45 שעות"
        description="לולאה נוחה סביב מעיין הבשנית ואזור הנחל. עלייה כוללת של 120 מטר בלבד. מתאים לילדים מגיל 5 ולבעלי ניסיון מועט. חורחית אחת מוצלת ב-700 מטר. בעונת האביב — שדות כלניות ואירוסים סגולים לאורך כל המסלול."
      />
      <RouteCard
        difficulty="בינוני"
        name="לולאת רכס בשנית — נוף ל-360°"
        distance="9.5 ק״מ"
        time="4.5 שעות"
        description="המסלול הקלאסי של הרכס. עולה לפסגה המרכזית (1,040 מ׳), עובר על קו הרכס עם נוף פנורמי לחרמון ולבקעת החולה, יורד דרך יער האלונים חזרה לנחל. עלייה כוללת 380 מטר. מומלץ להצטייד ב-2.5 ליטר מים לפחות."
      />
      <RouteCard
        difficulty="קשה"
        name="מסלול צלע הרכס המלא — מקצה לקצה"
        distance="14 ק״מ"
        time="6.5–7 שעות"
        description="מסלול נקודה לנקודה מן הצד הצפוני של הרכס ועד לצד הדרומי. כולל שני שיאים (1,040 ו-978 מ׳), מעבר גב צר ומדרון בזלת תלול. דורש ניסיון בניווט ונעלי הרים עם אחיזה. יש לתאם שניים רכבים מראש (נקודת סיום שונה) — ראו פירוט בטיפים."
      />

      {/* ── מה להביא ──────────────────────────────────────── */}
      <h2 className="post-h2">מה להביא</h2>
      <p>
        הגולן הצפוני ידוע בתנאי מזג אוויר משתנים. בחודשי החורף טמפרטורות יכולות
        לצנוח ל-0°C גם בשעות היום, ובמרץ-אפריל — מזג האוויר מתחלף כמה פעמים
        ביום. הצטיידו בהתאם.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {[
          {
            title: 'ביגוד',
            icon: '🧥',
            items: [
              'שכבת בסיס (merino או סינטטי)',
              'שכבת חמימות — פוך קל או fleece',
              'מעיל גשם עם ברדס (חובה!)',
              'כובע צמר לתנאי קור',
              'כפפות דקות',
            ],
          },
          {
            title: 'נעליים וציוד הליכה',
            icon: '🥾',
            items: [
              'נעלי הרים עם סוליית Vibram',
              'גרביים טכניות (כפול בחורף)',
              'מקלות הליכה — חובה במדרונות בזלת',
              'גטר אנטי-שיניים — הגולן מלא כאלה',
            ],
          },
          {
            title: 'ניווט ובטיחות',
            icon: '🧭',
            items: [
              'אפליקציית Topo Israel (אופליין)',
              'מפת 1:50,000 של הגולן הצפוני',
              'מצפן אנלוגי כגיבוי',
              'פנס ראש + סוללות עתודה',
              'ציוד עזרה ראשונה בסיסי',
            ],
          },
          {
            title: 'מים ואוכל',
            icon: '💧',
            items: [
              'מינימום 3 ליטר מים לאדם',
              'מסנן מים (Sawyer / Katadyn) לניצול מעיינות',
              'ארוחת צוהריים + 2 חטיפי אנרגיה',
              'ארוחת לינה — כירה + דלק גז',
            ],
          },
        ].map((cat) => (
          <div key={cat.title}
            className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm">
            <p className="font-bold text-dark mb-3">
              <span className="mr-2">{cat.icon}</span>{cat.title}
            </p>
            <ul className="space-y-1.5">
              {cat.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-dark/65">
                  <span className="text-orange-500 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── מתי לבקר ──────────────────────────────────────── */}
      <h2 className="post-h2">מתי לבקר</h2>

      <div className="space-y-3 my-5">
        {[
          {
            months: 'פברואר — אפריל',
            label: 'עונת השיא',
            color: 'border-r-green-500',
            badge: 'bg-green-100 text-green-800',
            desc: 'הרכס בשיא פריחתו — שטיחי כלנית, אירוס הגולן, ורקפת פרסית. הטמפרטורות נעימות (12–22°C), הנחלים זורמים. זוהי העונה המומלצת ביותר.',
          },
          {
            months: 'אוקטובר — נובמבר',
            label: 'עונת הסתיו',
            color: 'border-r-yellow-500',
            badge: 'bg-yellow-100 text-yellow-800',
            desc: 'הגולן מתכסה בגוונים חמים. פחות עמוסים מהאביב, הטמפרטורות נעימות (10–20°C). גשמים ראשונים מתחילים בנובמבר.',
          },
          {
            months: 'דצמבר — ינואר',
            label: 'עונת החורף',
            color: 'border-r-blue-500',
            badge: 'bg-blue-100 text-blue-800',
            desc: 'חוויה מיוחדת לחובבי קר — אפשרות לראות שלג על החרמון ולעיתים גם על הרכס עצמו. דורש הכנה ממוגברת. שבילים עשויים להיות חלקלקים.',
          },
          {
            months: 'יוני — ספטמבר',
            label: 'הימנעו',
            color: 'border-r-red-400',
            badge: 'bg-red-100 text-red-700',
            desc: 'הגולן בקיץ הוא ״תנור״ פתוח — 35–42°C, ללא צל, ומקורות מים מתייבשים. אם חייבים — צאו לפנות בוקר ב-5:00 וחיזרו עד 9:00 לפני שהחום מגיע לשיאו.',
          },
        ].map((season) => (
          <div key={season.months}
            className={`border-r-4 ${season.color} bg-white border border-orange-100 rounded-xl p-4 shadow-sm`}>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="font-bold text-dark">{season.months}</span>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${season.badge}`}>
                {season.label}
              </span>
            </div>
            <p className="text-dark/65 text-sm leading-relaxed">{season.desc}</p>
          </div>
        ))}
      </div>

      {/* ── מקורות מים ────────────────────────────────────── */}
      <h2 className="post-h2">מקורות מים</h2>
      <p>
        הגולן הצפוני עשיר במעיינות ובנחלים עונתיים — אך זהירות: רוב המים
        בשטח אינם מסוננים ועלולים להכיל חיידקים. <strong>תמיד סננו או טפלו במים לפני שתייה.</strong>
      </p>

      <ul className="space-y-3 my-4">
        {[
          {
            name: 'מעיין הבשנית',
            detail: 'זורם כל השנה, נגיש בסמוך למסלול המשפחתי. מים קרים ונקיים יחסית — בכל זאת סננו.',
            available: 'כל השנה',
          },
          {
            name: 'נחל גלבון',
            detail: 'זרימה חזקה בחורף ובאביב. מתייבש בחלקו בקיץ. קיימות בריכות עמוקות גם בחודשי הקיץ בנקודות מסוימות.',
            available: 'נובמבר–יוני',
          },
          {
            name: 'מקור מים ליד חניית מרום הגולן',
            detail: 'ברז מי שתייה ציבורי בתחילת שביל. פעיל בעונות הרטובות. בדקו לפני הגעה אם עדיין פעיל.',
            available: 'עונתי',
          },
          {
            name: 'בריכות בזלת בגב הרכס',
            detail: 'בריכות גשמים טבעיות בקערות בזלת — מתמלאות בחורף ומחזיקות עד אפריל. לא לשתייה ישירה — סיכון למלריה עופות.',
            available: 'ינואר–אפריל',
          },
        ].map((source) => (
          <li key={source.name}
            className="flex gap-3 bg-white border border-orange-100 rounded-xl p-4">
            <span className="text-2xl flex-shrink-0">💧</span>
            <div>
              <p className="font-semibold text-dark text-sm">{source.name}</p>
              <p className="text-dark/60 text-sm leading-relaxed">{source.detail}</p>
              <p className="text-xs text-blue-600 mt-1">זמינות: {source.available}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* ── טיפים חשובים ──────────────────────────────────── */}
      <h2 className="post-h2">טיפים חשובים</h2>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 my-6">
        <p className="font-bold text-amber-800 mb-3 flex items-center gap-2">
          <span>⚠️</span> אזורים צבאיים ואישורים
        </p>
        <ul className="space-y-2 text-amber-900/80 text-sm">
          <li className="flex gap-2">
            <span className="flex-shrink-0">•</span>
            חלקים מרכס בשנית נמצאים בסמוך לרצועת הביטחון ולגדרות הגבול. חובה לבדוק מראש
            אם נדרש אישור כניסה מפיקוד הצפון (<strong>פיקוד הצפון, קצין ביטחון שטח</strong>).
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">•</span>
            אין לחצות גדרות, חסמים או שלטי "כניסה אסורה" — גם אם הן נראות ישנות.
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">•</span>
            ללינת שטח פראית דרוש אישור של <strong>רשות הטבע והגנים</strong>. פנו מראש ל-
            מוקד רט"ג הצפון.
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">•</span>
            שימו לב לשלטי "שדה מוקשים" — הגולן עדיין כולל שטחים ממוקשים שאינם מסומנים
            בכל המפות. הישארו בשבילים מסומנים בלבד.
          </li>
        </ul>
      </div>

      <div className="space-y-3 my-4">
        {[
          {
            icon: '📱',
            tip: 'כיסוי סלולרי',
            detail: 'קליטה חלקית ברוב הרכס (בזק ופרטנר — סביר; HOT Mobile — מוגבל). שמרו על הורדת מפות אופליין לפני הגעה.',
          },
          {
            icon: '🚁',
            tip: 'הרשמה לפני יציאה',
            detail: 'הודיעו לאדם אחראי על המסלול המתוכנן, שעת יציאה וחזרה. בגולן הצפוני חלון הזמן לחיפוש וחילוץ קצר.',
          },
          {
            icon: '🐍',
            tip: 'זוחלים ומזיקים',
            detail: 'בעונת האביב-קיץ פעילות נחשים גבוהה. לבשו מכנסיים ארוכים, בדקו נעליים בבוקר, ואל תכניסו ידיים לסדקי בזלת.',
          },
          {
            icon: '🔋',
            tip: 'שני רכבים למסלול נקודה לנקודה',
            detail: 'מסלול הצלע המלא דורש שתי נקודות. חנו רכב אחד בחניית נחל גלבון (סיום), נסעו ברכב שני לחניית שמורת בשנית (התחלה).',
          },
          {
            icon: '🌩️',
            tip: 'רעמים וברקים',
            detail: 'הרכס גבוה וחשוף — בסערות אלקטרוסטטיות ירדו מייד לשפל. בדקו תחזית אלבידו עם Windy.com לפני היציאה.',
          },
        ].map((tip) => (
          <div key={tip.tip} className="flex gap-3 border border-orange-100 rounded-xl p-4 bg-white">
            <span className="text-2xl flex-shrink-0">{tip.icon}</span>
            <div>
              <p className="font-semibold text-dark text-sm">{tip.tip}</p>
              <p className="text-dark/60 text-sm leading-relaxed">{tip.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── גלריה מהשטח ────────────────────────────────────── */}
      <h2 className="post-h2">גלריה — מהשטח</h2>

      <PhotoGrid images={[
        {
          src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1770912581/Bashanit_1_yrtmvf.webp',
          alt: 'רכס בשנית — הגולן הצפוני',
          caption: 'רכס בשנית — נוף מהרמה הוולקנית',
        },
        {
          src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1770912579/Bashanit_2_vhxm9c.webp',
          alt: 'רכס בשנית',
          caption: 'הגולן הצפוני — יפה בכל עונה',
        },
        {
          src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1770912912/NofHermon_fdfne3.jpg',
          alt: 'נוף החרמון מהרכס',
          caption: 'נוף החרמון מרכס בשנית — בגובה מבט',
        },
      ]} />

      <blockquote className="post-quote">
        "הגולן הצפוני הוא לא פארק בילוי — הוא שטח חי, פעיל, ומלא הפתעות.
        לכו מוכנים, ותחזרו משתנים."
      </blockquote>

    </PostLayout>
  )
}
