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
  title:    'מדריך תרמילים — כמה ליטר ואיזה מותג',
  category: '🎒 ציוד',
  date:     'מרץ 2025',
  readTime: 12,
  image:    'https://upload.wikimedia.org/wikipedia/commons/0/0d/Osprey_Atmos_AG_65_Backpack_%2847347379172%29.jpg',
  imageAlt: 'תרמיל הרים',
}

export default function GearBackpacks() {
  return (
    <PostLayout meta={META}>

      <p>
        בחירת תרמיל שגויה מסיימת טיולים. לא מגזים. תרמיל רע שיושב לא נכון
        על הגב הופך כל צעד מהשעה הרביעית לקדימה לייסורים.
        תרמיל טוב — שוכחים שהוא קיים.
      </p>
      <p>
        הכלל הראשון: <strong>נפח = ימי טיול × 10–15 ליטר</strong>.
        טיול יומי = 20–25L. לינה אחת = 35–40L. שביל ישראל = 60–70L.
      </p>

      <h2 className="post-h2">איזה נפח — לפי סוג טיול</h2>
      <InfoCard icon="📏" title="מדריך נפחים">
        <ul className="space-y-2 text-sm">
          {[
            ['10–20 ליטר', 'טיול יומי קצר (עד 6 שעות)', 'Osprey Talon 11, Deuter Speed Lite 20'],
            ['20–35 ליטר', 'טיול יומי ארוך + צלחת לינה', 'Osprey Talon 22, Gregory Zulu 30'],
            ['35–50 ליטר', 'לינה 1–3 ימים', 'Osprey Exos 48, Deuter Futura Vario 45'],
            ['55–75 ליטר', 'שביל ישראל, 5+ ימים', 'Osprey Atmos 65, Gregory Baltoro 65'],
            ['75+ ליטר', 'אקספדיציות ומסע', 'Osprey Aether 85, Deuter Aircontact 75+10'],
          ].map(([size, use, models]) => (
            <li key={size} className="border-b border-orange-100 pb-2 last:border-0">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-orange-100 text-orange-700 font-bold text-xs px-2 py-0.5 rounded-full">{size}</span>
                <span className="font-semibold text-dark text-sm">{use}</span>
              </div>
              <p className="text-dark/50 text-xs mt-1">{models}</p>
            </li>
          ))}
        </ul>
      </InfoCard>

      <h2 className="post-h2">מאפיינים שחשוב לבדוק</h2>
      <div className="space-y-3 my-5">
        <TipCard num={1} title="מערכת גב — הכי חשוב"
          text="AG (Anti-Gravity כמו Osprey) = רשת מרווח = אוורור מעולה. מסגרת קשיחה (כמו Deuter Aircontact) = פחות אוורור אבל יציבות לנשיאה כבדה." />
        <TipCard num={2} title="חגורת מותן — 80% מהמשקל עוברת כאן"
          text="נסו לכוון שהחגורה על עצמות האגן, לא הבטן. אם החגורה צרה מדי — לא יעזור כמה שהתרמיל יקר." />
        <TipCard num={3} title="גישה לתא ראשי"
          text="תא עליון בלבד = מוציאים הכל לגשת לשק שינה. גישה תחתונה (רוב ה-60L+) = גן עדן ארגוני." />
        <TipCard num={4} title="כיסוי גשם מובנה"
          text="כמעט כל תרמיל 40L+ מגיע עם כיסוי גשם. אם לא — תוסיפו אחד חיצוני (30–60 ₪). כי גשם בגולן לא מזמין." />
      </div>

      <h2 className="post-h2">ההמלצות שלי — 2025</h2>
      <InfoCard icon="⭐" title="תרמילים מומלצים לפי שימוש">
        <div className="space-y-3">
          <GearRow icon="🥇" name="Osprey Atmos AG 65 — הכל-כולל"
            why="הטוב ביותר שניסיתי בסגמנט המחיר. AG, אחריות עולמית, ארגון מדהים. סקרנו בנפרד."
            price="950–1,200 ₪" />
          <GearRow icon="🏃" name="Osprey Talon 22 — יומי"
            why="22 ליטר. כיס הידרציה. קל ב-900 גרם. הכי נוח שסחבתי ליומי."
            price="480–620 ₪" />
          <GearRow icon="💰" name="Decathlon Forclaz Trek 900 — תקציב"
            why="65 ליטר ב-400 ₪. לא AG, לא הכי קל — אבל בסיסי, עמיד, ומושלם למתחיל."
            price="380–450 ₪" />
          <GearRow icon="⚡" name="Hyperlite Mountain Gear 3400 — UL"
            why="חובבי Ultra Light: Dyneema. 600 גרם ל-55 ליטר. לא זול — אבל המשקל שלו שינה לי ימים."
            price="2,200–2,800 ₪" />
        </div>
      </InfoCard>

      <h2 className="post-h2">איך לארוז נכון</h2>
      <InfoCard icon="📦" title="סדר ארגון אופטימלי">
        <div className="space-y-2 text-sm">
          {[
            { zone: 'תחתית', items: 'שק שינה, בגדי לינה, כל מה שלא נוגעים ביום' },
            { zone: 'אמצע — ליד הגב', items: 'הכבד ביותר! אוכל, מים, ציוד כבד — כמה שיותר קרוב לגב' },
            { zone: 'אמצע — רחוק מגב', items: 'ביגוד, שמיכה, ציוד קל' },
            { zone: 'עליון', items: 'ציוד שצריך מהיר: גשמייה, חטיפים, עזרה ראשונה, שמש' },
            { zone: 'כיסי צד', items: 'בקבוקי מים — מגיעים בלי להוריד תרמיל' },
            { zone: 'כיס ראש', items: 'ארנק, מפתחות, טלפון, פנס' },
          ].map(({ zone, items }) => (
            <div key={zone} className="flex gap-3 border-b border-orange-50 pb-2 last:border-0">
              <span className="bg-orange-600 text-white text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 h-fit">{zone}</span>
              <span className="text-dark/60">{items}</span>
            </div>
          ))}
        </div>
      </InfoCard>

      <blockquote className="post-quote">
        "תרמיל הוא לא רק שקית לציוד — הוא המנוע של הטיול. שווה לקנות את הנכון."
      </blockquote>

    </PostLayout>
  )
}
