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
  title:    'ציוד מומלץ למטייל — הרשימה המלאה',
  category: '💡 טיפים',
  date:     'ינואר 2025',
  readTime: 14,
  image:    'https://upload.wikimedia.org/wikipedia/commons/0/0d/Osprey_Atmos_AG_65_Backpack_%2847347379172%29.jpg',
  imageAlt: 'ציוד מטייל',
}

export default function TipsGearGuide() {
  return (
    <PostLayout meta={META}>

      <p>
        אחד השאלות הכי נפוצות שמגיעות אלי: <strong>"מה לוקחים לטיול?"</strong>
        התשובה תמיד תלויה — כמה זמן, איזה אקלים, מה רמת הקושי. אבל יש בסיס
        קבוע שאני לוקח לכל טיול, בלי יוצא מהכלל.
      </p>
      <p>
        הרשימה הזאת מבוססת על שנים של טיולים בישראל ובעולם. לא מספרים על ציוד
        שקניתי ולא השתמשתי — רק מה שעבר שטח בפועל.
      </p>

      <blockquote className="post-quote">
        "הציוד הכי טוב הוא לא הכי יקר — הוא זה שאתה שוכח שיש לך."
      </blockquote>

      <h2 className="post-h2">הגוף — ביגוד ונעליים</h2>
      <InfoCard icon="👟" title="נעליים וגרביים">
        <div className="space-y-3">
          <GearRow icon="👟" name="נעלי הרים — Salomon X Ultra 4 GTX"
            why="GTX = Gore-Tex = רגליים יבשות. קלות יחסית, אחיזה מצוינת, תמיכת קרסול בינונית. מתאימות לרוב המסלולים בישראל."
            price="680–850 ₪" />
          <GearRow icon="🧦" name="גרביים — Darn Tough Hiker"
            why="מרינו וול. לא מסריחות, לא יוצרות שלפוחיות, עמידות לנצח (אחריות לכל החיים). שווה כל שקל."
            price="80–110 ₪" />
          <GearRow icon="🩴" name="כפכפים — Teva Hurricane XLT2"
            why="לסוף יום בקמפינג. לא הולכים איתם לשטח — אבל לאחרי הטיול זה גן עדן לרגליים."
            price="250–350 ₪" />
        </div>
      </InfoCard>

      <InfoCard icon="🧥" title="ביגוד — שכבות">
        <div className="space-y-3">
          <GearRow icon="👕" name="שכבה בסיס — Smartwool Merino 150"
            why="מרינו וול לא מסריח, מייבש מהר, נוח בטמפ' רחבה. לובשים ישר על הגוף."
            price="200–280 ₪" />
          <GearRow icon="🧣" name="שכבת ביניים — Patagonia Nano Puff"
            why="חמימות ממשקל נמוך. מתקפלת לשקית קטנה, חמה גם כשרטובה. מושלמת לגולן ולחרמון."
            price="650–800 ₪" />
          <GearRow icon="🌧️" name="שכבת גשם — Arc'teryx Beta SL"
            why="הכי קל בכיתה. Gore-Tex. תופס מקום כמו אגרוף. מגן מגשם ורוח כמו שום דבר אחר."
            price="1,100–1,400 ₪" />
          <GearRow icon="🩲" name="תחתונים — ExOfficio Give-N-Go"
            why="מיקרופייבר. מייבשים תוך שעה, לא מגרדים, ניתן לכביסה בכיור. חובה למסעות ארוכים."
            price="90–130 ₪" />
        </div>
      </InfoCard>

      <h2 className="post-h2">הגב — תרמיל ואחסון</h2>
      <InfoCard icon="🎒" title="תרמילים לפי סוג טיול">
        <div className="space-y-3">
          <GearRow icon="🎒" name="טיול יומי — Osprey Talon 22"
            why="22 ליטר. כיס הידרציה מובנה, קל, נוח. מושלם לכל טיול יומי בישראל."
            price="500–650 ₪" />
          <GearRow icon="🎒" name="לינה 2-5 ימים — Osprey Atmos AG 65"
            why="מסקרנו בפוסט נפרד. תקציר: האוורור הכי טוב בשוק. 65 ליטר. עמיד. שלנו."
            price="950–1,200 ₪" />
          <GearRow icon="💧" name="שלפוחית מים — Platypus Big Zip 3L"
            why="3 ליטר עם צינור שתייה. BPA-free. מתגלגלת כשריקה. הרבה יותר נוחה מבקבוקים."
            price="120–160 ₪" />
        </div>
      </InfoCard>

      <h2 className="post-h2">ניווט ואלקטרוניקה</h2>
      <InfoCard icon="🧭" title="ניווט ותקשורת">
        <div className="space-y-3">
          <GearRow icon="📱" name="אפליקציה — Topo Israel / AllTrails Pro"
            why="מפות אופליין לישראל. Topo Israel היא הסטנדרט המקומי. AllTrails לבינלאומי."
            price="חינם / 25$ לשנה" />
          <GearRow icon="🌐" name="GPS ייעודי — Garmin inReach Mini 2"
            why="תקשורת לוויין דו-כיוונית + SOS. לטיולים מרוחקים — לא אופציה, זה חיים."
            price="1,800–2,200 ₪" />
          <GearRow icon="🔋" name="פוורבנק — Anker PowerCore 10000"
            why="10,000mAh. טוען טלפון 2-3 פעמים. קומפקטי. מחזיק שלושה ימים בשטח."
            price="120–160 ₪" />
        </div>
      </InfoCard>

      <h2 className="post-h2">בטיחות ועזרה ראשונה</h2>
      <InfoCard icon="🩺" title="ערכת עזרה ראשונה בסיסית">
        <div className="space-y-3">
          <GearRow icon="🩹" name="Leukotape P"
            why="הפלסטר הכי טוב נגד שלפוחיות. מחזיק גם כשרטוב. גלגל אחד מחזיק עשרות טיולים."
            price="25–35 ₪" />
          <GearRow icon="🔦" name="פנס ראש — Black Diamond Spot 400"
            why="400 לומן. סוללות AAA (קל להחליף בשטח). עמיד למים. לא תצאו בחשיכה בלי זה."
            price="180–230 ₪" />
          <GearRow icon="🌡️" name="כסנית חירום (שמיכת כסף)"
            why="עולה 5 ₪. שוקלת 50 גרם. מצילת חיים בהיפותרמיה. אין סיבה לא לקחת."
            price="5–15 ₪" />
          <GearRow icon="🧴" name="קרם הגנה SPF 50+"
            why="בישראל — חובה. שמש מדברית שורפת בעשרים דקות. תמחו כל שעה-שעתיים."
            price="30–60 ₪" />
        </div>
      </InfoCard>

      <h2 className="post-h2">מה לא לקחת</h2>
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 my-6">
        <p className="font-bold text-amber-800 mb-3">⚠️ 5 דברים שכולם לוקחים ולא צריך</p>
        <div className="space-y-2">
          {[
            ['☕ קנקן קפה כבד', 'קחו טבליות נס קפה. חיסכון של 400 גרם.'],
            ['📚 ספר נייר', 'Kindle או אפליקציה. 200 גרם לעומת קילו.'],
            ['🔪 סכין גדולה', 'סכין קטנה (Victorinox Classic) מספיקה ל-99% מהמקרים.'],
            ['👔 ביגוד כותנה', 'כותנה שומרת לחות ולא מתייבשת. מרינו וול או סינטטי תמיד.'],
            ['🏕️ אוהל שלם לטיול יומי', 'לינת שטח = אוהל. טיול יומי = בית יחכה לכם.'],
          ].map(([item, reason]) => (
            <div key={item} className="flex gap-2 text-sm">
              <span className="text-amber-500 flex-shrink-0">✗</span>
              <span><strong>{item}</strong> — {reason}</span>
            </div>
          ))}
        </div>
      </div>

      <blockquote className="post-quote">
        "כל קילוגרם שלא לוקחים — הוא קילוגרם שלא כואב לכם בשעה השישית."
      </blockquote>

    </PostLayout>
  )
}
