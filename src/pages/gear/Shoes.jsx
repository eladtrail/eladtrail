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
  title:    'מדריך נעלי הרים — איך בוחרים ואיזה כדאי',
  category: '🎒 ציוד',
  date:     'פברואר 2025',
  readTime: 13,
  image:    'https://upload.wikimedia.org/wikipedia/commons/3/3b/Hiking_boot_on_a_rock_%28Unsplash%29.jpg',
  imageAlt: 'נעלי הרים',
}

export default function GearShoes() {
  return (
    <PostLayout meta={META}>

      <p>
        הטעות הכי יקרה שמטייל מתחיל עושה: לוקח נעלי ריצה לשטח.
        הטעות הכי יקרה שמטייל מנוסה עושה: קונה נעלי הרים בלי לנסות עם משקל.
        שתיהן מסתיימות בשלפוחיות, בכאב ברכיים, ולפעמים — בפינוי.
      </p>
      <p>
        ביליתי שנים בנסיון ובשגיאות. הנה מה שלמדתי על בחירת נעל הנכונה לשטח הישראלי.
      </p>

      <blockquote className="post-quote">
        "אפשר להתפשר על תרמיל. אפשר להתפשר על ביגוד. על נעליים — לא."
      </blockquote>

      <h2 className="post-h2">4 הסוגים — מה מתאים לכם</h2>
      <InfoCard icon="👟" title="סוגי נעלי שטח">
        <div className="space-y-4 text-sm">
          {[
            { type: 'נעל שטח קלה (Trail Runner)', use: 'טיולים יומיים, מסלולים קלים-בינוניים', pros: 'קלה, מהירה להתאים', cons: 'אין תמיכת קרסול, פחות עמידה', ex: 'Salomon Speedcross, Hoka Speedgoat' },
            { type: 'מגף שטח נמוך (Low Cut)', use: 'רוב המסלולים בישראל', pros: 'איזון בין קלות לתמיכה', cons: 'קרסול פגיע בירידות תלולות', ex: 'Salomon X Ultra 4, Merrell Moab 3' },
            { type: 'מגף שטח גבוה (Mid Cut)', use: 'שטח קשה, שביל ישראל, נשיאה כבדה', pros: 'תמיכת קרסול מלאה', cons: 'כבד יותר, פחות נושם', ex: 'Lowa Renegade, Scarpa Zodiac' },
            { type: 'מגף טיפוס (Mountaineering)', use: "חרמון, קילימנג'רו, שלג", pros: 'קשיח, כרמפונים נתמכים', cons: 'כבד, לא לשביל רגיל', ex: 'La Sportiva Nepal, Scarpa Mont Blanc' },
          ].map((row) => (
            <div key={row.type} className="border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-dark mb-2">{row.type}</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                <span className="text-dark/50">מתאים ל:</span><span>{row.use}</span>
                <span className="text-green-600">✓ יתרונות:</span><span>{row.pros}</span>
                <span className="text-red-500">✗ חסרונות:</span><span>{row.cons}</span>
                <span className="text-dark/50">דגמים:</span><span className="text-orange-600 font-medium">{row.ex}</span>
              </div>
            </div>
          ))}
        </div>
      </InfoCard>

      <h2 className="post-h2">GTX — Gore-Tex — כן או לא?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">✓ GTX מומלץ כשיש:</p>
          <ul className="space-y-2 text-sm text-green-900/70">
            {['חורף בגולן / חרמון', 'גשם סביר בחצי שנה', 'מסלולים עם שלוליות/נחלים', 'תנאי בוץ'].map(i=>(
              <li key={i} className="flex gap-2"><span className="text-green-500">•</span>{i}</li>
            ))}
          </ul>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <p className="font-bold text-amber-800 mb-3">⚠️ GTX פחות מתאים כשיש:</p>
          <ul className="space-y-2 text-sm text-amber-900/70">
            {['קיץ ישראלי חם', 'טיולים ממושכים בחום', 'נגב וערבה (יבש תמיד)', 'מי שרגליים מזיעות הרבה'].map(i=>(
              <li key={i} className="flex gap-2"><span className="text-amber-500">•</span>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="post-h2">הדגמים שאני ממליץ — 2025</h2>
      <InfoCard icon="⭐" title="בחירות מומלצות לשוק הישראלי">
        <div className="space-y-3">
          <GearRow icon="🥇" name="Salomon X Ultra 4 GTX — הכי מגוון"
            why="מתאים ל-80% מהמסלולים בישראל. קל (380 גרם), GTX איכותי, אחיזה מצוינת. הנעל שאמליץ למתחיל ולמנוסה."
            price="680–850 ₪" />
          <GearRow icon="🏆" name="Merrell Moab 3 — תקציב / איכות"
            why="הספר המצוין של עולם נעלי השטח. פחות יפה, אבל עמיד ונוח. מתאים לתקציב מוגבל."
            price="420–550 ₪" />
          <GearRow icon="🔝" name="Lowa Renegade GTX Mid — שביל ישראל"
            why="מגף גבוה, תמיכת קרסול מלאה. לנשיאת תרמיל 14+ ק&quot;ג — זה הדגם."
            price="950–1,200 ₪" />
          <GearRow icon="⚡" name="Hoka Speedgoat 5 — מהירות"
            why="סוליה בולמת הלם מהטובות בשוק. מעולה למסלולים ארוכים עם הרבה אספלט מעורב."
            price="700–900 ₪" />
        </div>
      </InfoCard>

      <h2 className="post-h2">איך בוחרים — 6 כללים</h2>
      <div className="space-y-3 my-5">
        <TipCard num={1} title="תמיד נסו עם משקל"
          text="הכניסו לתרמיל 8–10 ק&quot;ג לפני הנסיון. רגל עם משקל = גודל שונה, נקודות לחץ שונות. כל חנות טובה תאפשר זאת." />
        <TipCard num={2} title="גודל: חצי מספר גדול יותר"
          text="רגל מתנפחת תוך כדי הליכה. אצבע בוהן צריכה מרחק של 1 ס&quot;מ מהקצה. בהרים בירידות — פחות מזה = כאב." />
        <TipCard num={3} title="קנו בסוף היום"
          text="רגליים מתנפחות עם הזמן. נסו בסוף יום עבודה — זה המצב הכי קרוב לרגל בשטח." />
        <TipCard num={4} title="אמנו 3 שבועות לפני"
          text="נעל חדשה לא הולכת לטיול ארוך. 3 שבועות הליכות יומיות עם גרביים טכניות — חובה." />
        <TipCard num={5} title="גרביים — Merino Wool בלבד"
          text="כותנה = לחות = שלפוחיות. Darn Tough, Smartwool — יקרים, מצדיקים כל שקל." />
        <TipCard num={6} title="לאחר 600–800 ק&quot;מ — החליפו"
          text="הסוליה נשחקת. הרפידה מאבדת כ-50% מהבלימה. לא בהכרח נראה מבחוץ — תחושו בברכיים." />
      </div>

      <blockquote className="post-quote">
        "קניתי נעליים ב-400 ₪ כדי לחסוך 400 ₪. שילמתי 1,200 ₪ לפיזיותרפיסט. חישבו."
      </blockquote>

    </PostLayout>
  )
}
