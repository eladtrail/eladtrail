import PostLayout, { InlineImage } from '../components/PostLayout'

const META = {
  title:    'שביל ישראל — הסיפור האמיתי',
  category: '🇮🇱 ישראל',
  date:     'פברואר 2025',
  readTime: 14,
  image:    'https://upload.wikimedia.org/wikipedia/commons/0/07/IsraelTrailGalilaea2.jpg',
  imageAlt: 'מטייל על שביל ישראל — הגליל',
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

// ── כרטיס קטע מסלול ─────────────────────────────────────────
function SectionCard({ region, distance, days, highlights, difficulty }) {
  const colors = {
    'צפון': { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-100 text-green-800' },
    'מרכז': { bg: 'bg-yellow-50', border: 'border-yellow-200', badge: 'bg-yellow-100 text-yellow-800' },
    'דרום': { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-800' },
  }
  const style = colors[region] ?? colors['מרכז']
  return (
    <div className={`${style.bg} border ${style.border} rounded-2xl p-5 my-4`}>
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <span className="font-bold text-dark text-lg">{region}</span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${style.badge}`}>
          {difficulty}
        </span>
      </div>
      <div className="flex gap-5 text-sm text-dark/50 mb-3">
        <span>📏 {distance}</span>
        <span>📅 {days}</span>
      </div>
      <p className="text-dark/65 text-sm leading-relaxed">{highlights}</p>
    </div>
  )
}

// ════════════════════════════════════════════════════════════
export default function PostShvilIsrael() {
  return (
    <PostLayout meta={META}>

      {/* ── פסקת פתיחה ────────────────────────────────────── */}
      <p>
        שביל ישראל — 1,100 ק"מ מדן לאילת, מהצפון הירוק ועד הדרום האדמדם.
        על הנייר זה נשמע כמו הרפתקה. במציאות, זה הרבה יותר מסובך, כואב ומדהים
        ממה שחשבתי. לקח לי שלושה חודשים ועשרה זוגות גרביים, אבל בסוף הבנתי
        דבר אחד: ישראל היא לא מדינה — היא ספר שאף פעם לא גומרים לקרוא.
      </p>
      <p>
        האינסטגרם יראה לכם תמונות פנורמיות עם שקיעות מושלמות. אני הולך לספר לכם
        גם על הימים שרציתם לוותר, על הרגליים שהפסיקו לשמוע פקודות, ועל הרגעים
        שגרמו לכם להבין למה יצאתם לשביל בכלל.
      </p>

      <blockquote className="post-quote">
        "רק מי שהלך על השביל יודע מה זה אומר לראות את הארץ הזאת ברגל — קמט אחרי קמט."
      </blockquote>

      {/* ── מה זה שביל ישראל ──────────────────────────────── */}
      <h2 className="post-h2">מה זה בכלל שביל ישראל?</h2>
      <p>
        שביל ישראל הוא שביל הליכה ארוך-טווח המחבר את קצות המדינה — מתל דן שבגליל
        העליון ועד לאילת שבמפרץ אדום. השביל עובר דרך כמעט כל הנופים שישראל יכולה
        להציע: גליל ירוק, כרמל מוצל, שרון עם פרדסים, הרי יהודה, מדבר יהודה, ערבה
        ומכתש רמון. הוא לא מסלול בתוך פארק — הוא מסע דרך הארץ עצמה.
      </p>

      <InfoCard icon="📊" title="נתוני השביל — בקצרה">
        <ul className="space-y-1.5">
          {[
            ['אורך כולל', '1,100 ק"מ (מן לאילת)'],
            ['זמן הליכה', '40–60 יום (ממוצע: 45 יום)'],
            ['עלייה מצטברת', 'כ-46,000 מטר עלייה'],
            ['תקופה מומלצת', 'נובמבר–מרץ (צפון), פברואר–אפריל (דרום)'],
            ['סימון השביל', 'כתום–לבן–כחול (3 פסים)'],
            ['קושי ממוצע', 'בינוני–קשה, תלוי בקטע'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between text-sm border-b border-orange-100 pb-1.5 last:border-0">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* ── למה לצאת לשביל ────────────────────────────────── */}
      <h2 className="post-h2">למה בכלל לצאת לשביל?</h2>
      <p>
        זו השאלה שכולם שואלים לפני, ואיש לא שואל אחרי. כשאתה על השביל שבוע,
        שבועיים, חודש — התשובה פשוט מתגבשת בתוכך בלי שתבחין.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {[
          {
            icon: '🇮🇱',
            title: 'להכיר את הארץ מחדש',
            text: 'אפשר לגור בישראל 30 שנה ולא להכיר אותה. השביל מראה לך פינות שלא ידעת שקיימות — כפרים בגליל, ערוצי ואדי בנגב, מושבים ישנים בשפלה.',
          },
          {
            icon: '🧠',
            title: 'לנקות את הראש',
            text: 'אין פגישות, אין טלפונים, אין לחצים. רק צעד אחרי צעד. לאחר שבוע בשטח, סדר העדיפויות שלך פשוט משתנה.',
          },
          {
            icon: '💪',
            title: 'לגלות מה אתה מסוגל',
            text: 'יהיו ימים שתרצה לעצור. ואז תמשיך. ואז תגיע לסוף היום ותבין שאתה יכול הרבה יותר ממה שחשבת.',
          },
          {
            icon: '🤝',
            title: 'הקהילה על השביל',
            text: 'ה"שביל משפחה" (Trail Family) הוא תופעה אמיתית — אנשים שנפגשים בשטח וחלקם נשארים חברים לחיים. השביל מייצר סוג אחר של קשרים.',
          },
        ].map((item) => (
          <div key={item.title}
            className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm">
            <div className="text-3xl mb-3">{item.icon}</div>
            <p className="font-bold text-dark mb-2">{item.title}</p>
            <p className="text-dark/60 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* ── תכנון ─────────────────────────────────────────── */}
      <h2 className="post-h2">תכנון — לפני שיוצאים</h2>
      <p>
        שביל ישראל לא דורש ניסיון של אלפיניסט, אבל הוא כן דורש הכנה רצינית.
        הטעות הכי גדולה שמתחילים עושים היא לצאת ללא תוכנית ברורה.
      </p>

      <InfoCard icon="📅" title="מתי לצאת — עונות מומלצות">
        <div className="space-y-3">
          {[
            {
              period: 'נובמבר — ינואר',
              label: 'הצפון (דן עד גילבוע)',
              color: 'text-green-700',
              desc: 'הגליל והכרמל ירוקים, מזג האוויר נוח (12–20°C). הצפון יפה במיוחד אחרי גשמים ראשונים.',
            },
            {
              period: 'פברואר — אפריל',
              label: 'המרכז עד הנגב הצפוני',
              color: 'text-yellow-700',
              desc: 'פריחת האביב בשיאה. שדות כלניות בשפלה, אירוסים בגליל. מזג האוויר אידיאלי לפני החום.',
            },
            {
              period: 'מרץ — מאי',
              label: 'הנגב, הערבה, ומכתש רמון',
              color: 'text-orange-700',
              desc: 'הדרום עוד לא חם מדי. מכתש רמון בבוקר קר — חוויה שאי אפשר לשכוח.',
            },
          ].map((s) => (
            <div key={s.period} className="border-r-4 border-orange-300 pr-3">
              <p className={`font-bold text-sm ${s.color}`}>{s.period} | {s.label}</p>
              <p className="text-dark/60 text-sm mt-0.5">{s.desc}</p>
            </div>
          ))}
        </div>
      </InfoCard>

      {/* ── קטעי השביל ────────────────────────────────────── */}
      <h2 className="post-h2">קטעי השביל — מה מחכה לכם</h2>

      <SectionCard
        region="צפון"
        distance="כ-380 ק״מ"
        days="14–18 יום"
        difficulty="בינוני"
        highlights="מדן דרך הגולן, כינרת, גליל עליון ותחתון, כרמל ועד זיכרון יעקב. הקטע הירוק ביותר — נחלים, פרחים ועצי אלון. קצב שחמת הגוף קל יחסית."
      />
      <SectionCard
        region="מרכז"
        distance="כ-320 ק״מ"
        days="12–15 יום"
        difficulty="בינוני"
        highlights="מנס ציונה ועד באר שבע — שפלת יהודה, הרי ירושלים ומדבר יהודה. הקטע שמפתיע הכי הרבה אנשים — עם כפרים ישנים, מנזרים וחזרה לשטח מוכר."
      />
      <SectionCard
        region="דרום"
        distance="כ-400 ק״מ"
        days="15–20 יום"
        difficulty="קשה"
        highlights="נגב, ערבה, מכתש רמון ועד אילת. השטח הכי מאתגר: ימים ארוכים, חום, מרחקים בין נקודות מים. אבל גם הנוף הכי ייחודי שיש בישראל."
      />

      <InlineImage
        src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Berg_Arbel_oberhalb_des_See_Genezareth%2C_Israel-Trail.jpg"
        alt="שביל ישראל — הר ארבל מעל הכינרת"
        caption="הר ארבל מעל הכינרת — שביל ישראל בצפון"
      />

      {/* ── ציוד ──────────────────────────────────────────── */}
      <h2 className="post-h2">הציוד שלקחתי</h2>
      <p>
        אחרי מחקר ממושך ועצות מכמה שביליסטים מנוסים, הגעתי לרשימה הבאה.
        שמתי דגש על משקל: כל קילוגרם שמוריד מהתרמיל הופך לשמחה בסוף יום 30.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {[
          {
            title: 'תרמיל ושינה',
            icon: '🎒',
            items: [
              'תרמיל 45 ליטר Osprey Atmos AG — הגב שלי לא כאב פעם',
              'שק שינה עד 5°C — מינימליסטי ל-80% מהלילות',
              'אוהל אולטרה-לייט 1-2 ק"ג (MSR Hubba Hubba)',
              'מחצלת שינה מבודדת — חובה לנגב',
            ],
          },
          {
            title: 'נעליים וביגוד',
            icon: '🥾',
            items: [
              'Salomon X Ultra 4 GTX — עמידות ואחיזה מעולות',
              'גרביים מרינו Darn Tough — 3 זוגות, חובה להחליף',
              'שכבת בסיס + fleece + מעיל גשם קל',
              'כובע שמש + כובע צמר לדרום בלילות',
            ],
          },
          {
            title: 'ניווט ובטיחות',
            icon: '🧭',
            items: [
              'אפליקציית Topo Israel — הורידו קטעים אופליין',
              'פנס ראש עם סוללות עתודה — חובה ביציאות לפנות בוקר',
              'ערכת עזרה ראשונה עם תחבושות כוויות (שלפוחיות)',
              'PLB (מאותת חירום) לקטעי הדרום הבודדים',
            ],
          },
          {
            title: 'מים ואוכל',
            icon: '💧',
            items: [
              'מסנן Sawyer Squeeze — חיסך לי המון בעלויות מים',
              '2 בקבוקים של 1 ליטר + שק מים 2 ליטר לנגב',
              'כירת גז MSR PocketRocket + 2 מחסניות',
              'תפריט יומי: שיבולת שועל + אוכל יבש + חטיפי אנרגיה',
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

      {/* ── הרגעים הקשים ──────────────────────────────────── */}
      <h2 className="post-h2">מה שהאינסטגרם לא מראה</h2>
      <p>
        כולם מפרסמים את השקיעות. אני הולך לספר לכם על שאר הדברים.
      </p>

      <div className="space-y-4 my-6">
        {[
          {
            day: 'יום 5',
            title: 'הרגליים שוברות',
            text: 'שלפוחיות בכל מקום אפשרי. הלכתי 28 ק"מ ביום הראשון כי "הרגשתי טוב". גאווה שעלתה לי שבוע של כאב. שיעור ראשון: הקשיבו לגוף, לא לאגו.',
          },
          {
            day: 'יום 12',
            title: 'רציתי לחזור הביתה',
            text: 'עלייה לרמת הגולן, 35 מעלות, אין צל. הרגליים בוערות, המים מסתיימים. ישבתי בצד השביל 40 דקות בלי לזוז. ואז קמתי והמשכתי.',
          },
          {
            day: 'יום 23',
            title: 'לילה בלי אוהל',
            text: 'שכחתי לבדוק תחזית. גשם חזק בלב מדבר יהודה. ישנתי מתחת לסלע עם ה-bivy bag. היה קר מאוד. לא כתבתי על זה באינסטגרם.',
          },
          {
            day: 'יום 38',
            title: 'מכתש רמון ב-42°C',
            text: 'יצאתי ב-4:30 בבוקר. חזרתי לצל בשתיים. 18 ק"מ בחום שאפוי. אבל הנוף של הכתש עם הזריחה — שווה כל שניה.',
          },
        ].map((moment) => (
          <div key={moment.day}
            className="border-r-4 border-orange-400 bg-orange-50 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {moment.day}
              </span>
              <span className="font-bold text-dark">{moment.title}</span>
            </div>
            <p className="text-dark/65 text-sm leading-relaxed">{moment.text}</p>
          </div>
        ))}
      </div>

      {/* ── לינה ──────────────────────────────────────────── */}
      <h2 className="post-h2">איפה ישנים?</h2>
      <p>
        שביל ישראל מציע שלושה סוגי לינה עיקריים, וצריך לתכנן לפי הקטע:
      </p>

      <div className="space-y-3 my-5">
        {[
          {
            icon: '⛺',
            title: 'קמפינג פראי',
            desc: 'הנפוץ ביותר, בחינם. ברוב קטעי השביל — קיימות נקודות קמפינג מסומנות. בצפון — שפע. בדרום — חובה לתכנן מראש כי המרחקים גדולים.',
          },
          {
            icon: '🏠',
            title: 'הכנסת אורחים / Airbnb',
            desc: 'בערים ובמושבים לאורך השביל. מומלץ פעם בשבוע לנוח במיטה אמיתית, להתקלח ולסדר ציוד. עלות: 150–300 ₪ ללילה.',
          },
          {
            icon: '⛪',
            title: 'האכסניות הציבוריות',
            desc: 'בחלק מהתחנות יש אכסניות סמוכות לשביל. מומלץ להזמין מראש בעונת השיא (מרץ–אפריל) כשהשביל עמוס.',
          },
        ].map((opt) => (
          <div key={opt.title}
            className="flex gap-4 bg-white border border-orange-100 rounded-xl p-4 shadow-sm">
            <span className="text-2xl flex-shrink-0">{opt.icon}</span>
            <div>
              <p className="font-bold text-dark text-sm mb-1">{opt.title}</p>
              <p className="text-dark/60 text-sm leading-relaxed">{opt.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── תזונה ─────────────────────────────────────────── */}
      <h2 className="post-h2">תזונה בשטח — מה עובד</h2>
      <p>
        על השביל שורפים 3,500–5,000 קלוריות ביום. לא הזמן לדיאטה.
        לקח לי שבוע להבין שאני צריך לאכול הרבה יותר ממה שהורגלתי.
      </p>

      <InfoCard icon="🍽️" title="תפריט יום טיפוסי בשטח">
        <div className="space-y-2 text-sm">
          {[
            ['☀️ בוקר (05:30)', 'שיבולת שועל מיידית + חמאת בוטנים + קפה נמס. מהיר להכנה לפני הזריחה.'],
            ['🌤️ אמצע הדרך (10:00)', 'חטיף אנרגיה, תמרים, אגוזים. ללא הפסקה ארוכה — מומנטום חשוב.'],
            ['☀️ צוהריים (12:30)', 'עצירה בצל חובה בקיץ ובנגב. לחם קשה + גבינה מיובשת + ירקות.'],
            ['🌅 ערב (18:00)', 'ארוחה חמה: אורז/פסטה עם קפיות, תוספת שמן זית קלורי. זה רגע היום הכי טוב.'],
          ].map(([time, meal]) => (
            <div key={time} className="border-b border-orange-100 pb-2 last:border-0">
              <p className="font-semibold text-dark">{time}</p>
              <p className="text-dark/60">{meal}</p>
            </div>
          ))}
        </div>
      </InfoCard>

      {/* ── טיפים חשובים ──────────────────────────────────── */}
      <h2 className="post-h2">10 טיפים שהייתי רוצה לדעת מראש</h2>

      <div className="space-y-3 my-5">
        {[
          { num: '01', tip: 'אל תצאו מהיום הראשון עם 30+ ק"מ', detail: 'גופכם צריך שבועיים להסתגל. 20–22 ק"מ ביום הראשון — מקסימום.' },
          { num: '02', tip: 'הורידו מפות אופליין לפני כל קטע', detail: 'בנגב ובגולן הקליטה גרועה. Topo Israel עם מפות מורדות הוא חובה.' },
          { num: '03', tip: 'תדעו איפה מים לפני שיוצאים', detail: 'במיוחד בדרום — בדקו כל יום מראש. מקורות מים שנסגרים בקיץ יכולים להיות מסוכנים.' },
          { num: '04', tip: 'שמרו על הרגליים כמו אוצר', detail: 'כל שלפוחית שמתחילה — טפלו מיד. Leukotape P הוא הדבק הכי טוב למניעה.' },
          { num: '05', tip: 'ה"Trail Family" היא אמיתית', detail: 'הכירו את האנשים שפוגשים. תכנון משותף, לינה משותפת — השביל הרבה יותר כיף עם אחרים.' },
          { num: '06', tip: 'יום מנוחה הוא לא ויתור', detail: 'פעם בשבוע — עיר, מקלחת, מיטה. הגוף מחלים בזמן המנוחה, לא בזמן ההליכה.' },
          { num: '07', tip: 'תאכלו יותר שומן', detail: 'שמן זית, חמאת בוטנים, אגוזים — קלוריות צפופות שחוסכות משקל בתרמיל.' },
          { num: '08', tip: 'תכנון פינאנסי מראש', detail: 'תקצוב ריאלי: 120–180 ₪ ליום (אוכל + לינה מדי פעם). חודשיים = 7,000–11,000 ₪.' },
          { num: '09', tip: 'צאו מוקדם, ישנו בצהריים', detail: 'במיוחד בדרום ובקיץ — 04:30 יציאה, עצירה בצל בין 12:00 ל-15:00, המשך אחר כך.' },
          { num: '10', tip: 'אל תפסיקו אחרי יום קשה', detail: 'כמעט כל אחד רוצה לוותר ביום 3, ביום 10 וביום 20. אלה בדיוק הימים שחשוב להמשיך.' },
        ].map((tip) => (
          <div key={tip.num}
            className="flex gap-4 border border-orange-100 rounded-xl p-4 bg-white shadow-sm">
            <span className="font-display text-3xl text-orange-200 font-bold flex-shrink-0 leading-none mt-0.5">
              {tip.num}
            </span>
            <div>
              <p className="font-bold text-dark text-sm mb-1">{tip.tip}</p>
              <p className="text-dark/60 text-sm leading-relaxed">{tip.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── סיכום ─────────────────────────────────────────── */}
      <h2 className="post-h2">בסוף, בנקודה האחרונה</h2>
      <p>
        כשאתה מגיע לאילת — עייף, שרוף ומאושר — אתה עושה משהו מוזר. אתה נוגע
        בים האדום, מרגיש את הסיום, ואז שואל את עצמך: "מה עכשיו?"
      </p>
      <p>
        כי השביל לא גומר אותך. הוא מתחיל אותך מחדש. 1,100 ק"מ של ישראל שנכנסת
        לתוך הגוף שלך, קפל אחרי קפל, עלייה אחרי עלייה. ואחרי כל זה — הארץ הזאת
        הופכת להיות שלך בצורה שאף ספר ואף תמונה לא יכולים לתת.
      </p>
      <p>
        אם אתם מתלבטים — תצאו. ממש. תצאו.
      </p>

      <blockquote className="post-quote">
        "שביל ישראל לא מסביר את עצמו. הוא פשוט מראה לך מי אתה כשאין לאן לברוח."
      </blockquote>

    </PostLayout>
  )
}
