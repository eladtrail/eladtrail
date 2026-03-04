import PostLayout from '../../components/PostLayout'

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

function TipCard({ num, title, text }) {
  return (
    <div className="flex gap-4 bg-white border border-orange-100 rounded-xl p-5 shadow-sm my-3">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-600 text-white
                      flex items-center justify-center font-bold text-sm">{num}</div>
      <div>
        <p className="font-bold text-dark mb-1">{title}</p>
        <p className="text-dark/60 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function GearRow({ name, why, price, icon }) {
  return (
    <div className="flex items-start gap-3 border-b border-orange-50 pb-3 last:border-0 last:pb-0">
      <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
      <div className="flex-1">
        <p className="font-semibold text-dark text-sm">{name}</p>
        <p className="text-dark/55 text-xs leading-relaxed">{why}</p>
      </div>
      {price && <span className="text-orange-600 font-bold text-sm whitespace-nowrap">{price}</span>}
    </div>
  )
}

const META = {
  title:    'תכנון מסלול — מ-0 לטיול מושלם',
  category: '💡 טיפים',
  date:     'אפריל 2025',
  readTime: 11,
  image:    'https://upload.wikimedia.org/wikipedia/commons/0/07/IsraelTrailGalilaea2.jpg',
  imageAlt: 'תכנון מסלול',
}

export default function TipsPlanning() {
  return (
    <PostLayout meta={META}>

      <p>
        כל טיול גרוע שעשיתי בחיים — ניתן היה למנוע עם שעה אחת של תכנון מוקדם.
        כל טיול טוב שעשיתי — התחיל עם תכנון נכון. זה לא מקרה.
      </p>
      <p>
        תכנון טיול זה לא "להרוס את הספונטניות" — זה לדעת להיכן אתם הולכים, מה
        מחכה לכם שם, ומה לעשות אם משהו משתבש. ספונטניות יש בתוך המסגרת הנכונה.
      </p>

      <h2 className="post-h2">שלב 1 — בחרו את הטיול הנכון</h2>
      <div className="space-y-3 my-5">
        <TipCard num={1} title="הגדירו פרמטרים: זמן, קושי, אזור"
          text="כמה שעות יש? מה רמת הכושר של הכי חלש בקבוצה (!) ? ים, הר, מדבר? רק אחרי שיש תשובות — מחפשים מסלול." />
        <TipCard num={2} title="מאגרי מידע — Topo Israel, AllTrails, iNature"
          text="Topo Israel היא הסטנדרט לישראל. iNature עשירה בתיאורים. AllTrails עם ביקורות ממשתמשים. השתמשו בשלושתן לפני טיול חדש." />
        <TipCard num={3} title="קראו ביקורות של חודש האחרון"
          text="מסלול שהיה מצוין בקיץ יכול להיות מוצף בחורף. ביקורות עדכניות חושפות מה קורה עכשיו בשטח." />
        <TipCard num={4} title="בדקו סגירות ואישורים"
          text="פארקים לאומיים, שמורות, ואתרי צבא — יש ימי סגירה ודרישות אישור. כנסו לאתר רשות הטבע לפני." />
      </div>

      <h2 className="post-h2">שלב 2 — הכינו את הניווט</h2>
      <InfoCard icon="🗺️" title="ניווט נכון — צעד אחר צעד">
        <div className="space-y-3 text-sm">
          {[
            { step: '1', action: 'הורידו קובץ GPX מ-Topo Israel / AllTrails', detail: 'שמרו בטלפון ובשעון חכם אם יש.' },
            { step: '2', action: 'הורידו מפה אופליין לאזור', detail: 'גם אם לא מאמינים שתהיה בעיה — תורידו.' },
            { step: '3', action: 'זהו נקודות מפתח מראש', detail: 'פיצולי שבילים, מעיינות, חניות, נקודות חירום.' },
            { step: '4', action: 'לימדו את הסימון', detail: 'כחול = שביל ישראל. ירוק/כתום/אדום = דרגות קושי שונות.' },
          ].map(({ step, action, detail }) => (
            <div key={step} className="flex gap-3">
              <span className="bg-orange-100 text-orange-600 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">{step}</span>
              <div>
                <p className="font-semibold text-dark">{action}</p>
                <p className="text-dark/55">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </InfoCard>

      <h2 className="post-h2">שלב 3 — לוגיסטיקה</h2>
      <InfoCard icon="🚗" title="תחבורה, חניה, תיאום">
        <ul className="space-y-2 text-sm">
          {[
            ['נקודת כניסה ≠ נקודת יציאה', 'מסלולי לינאר: נדרשת רכב שני. תכננו תחבורה מראש.'],
            ['חניה', 'Google Maps לא תמיד מצביע על חניות רשמיות. iNature מפרטת.'],
            ['שעת הגעה', 'חשבו לאחור מסיום הטיול. לא להתחיל בשעה שתגרור סיום בחשיכה.'],
            ['תיאום עם קבוצה', 'WhatsApp קבוצה + ציון ברור מי הולך ומי לא עד יום לפני.'],
          ].map(([k, v]) => (
            <li key={k} className="flex flex-col border-b border-orange-100 pb-2 last:border-0">
              <span className="font-semibold text-dark text-sm">{k}</span>
              <span className="text-dark/60 text-sm">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <h2 className="post-h2">צ'קליסט תכנון — 72 שעות לפני</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {[
          {
            title: '72 שעות לפני', icon: '📅',
            items: ['בחרו מסלול + נסחו route sheet', 'הורידו GPX + מפה אופליין', 'תיאמו עם כל המשתתפים', 'הזמינו חניה/הסעה אם נדרש'],
          },
          {
            title: '24 שעות לפני', icon: '🌤️',
            items: ['בדקו תחזית ב-Windy + IMS', 'הכינו ציוד (לא בבוקר!)', 'טעינת טלפון + פוורבנק', 'הכינו אוכל ומים'],
          },
          {
            title: 'בוקר הטיול', icon: '☀️',
            items: ['בדיקת תחזית עדכנית', 'שלחו פרטי מסלול לאחראי', 'וידוא מים + עזרה ראשונה', 'יציאה בזמן שתוכנן'],
          },
          {
            title: 'בסיום', icon: '🏁',
            items: ['הודעת "הגעתי" לאחראי', 'תיעוד: מה עבד / לא עבד', 'בדיקת רגליים + תזונה', 'עדכון AllTrails/iNature'],
          },
        ].map((section) => (
          <div key={section.title} className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm">
            <p className="font-bold text-dark mb-3 flex items-center gap-2">
              <span className="text-xl">{section.icon}</span>{section.title}
            </p>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-dark/65">
                  <span className="text-orange-400 mt-0.5 flex-shrink-0">□</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <blockquote className="post-quote">
        "כל טיול שיצא לי טוב — לא היה מקרה. היה תכנון. ולפעמים גם מזל."
      </blockquote>

    </PostLayout>
  )
}
