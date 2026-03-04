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
  title:    'ביגוד לטיולים — שכבות, חומרים ומה שעובד',
  category: '🎒 ציוד',
  date:     'מאי 2025',
  readTime: 11,
  image:    'https://upload.wikimedia.org/wikipedia/commons/9/93/Hiking_at_Glacier_National_Park_%282%29.jpg',
  imageAlt: 'ביגוד לטיולים',
}

export default function GearClothing() {
  return (
    <PostLayout meta={META}>

      <p>
        ביגוד לא נכון ממיר טיול נוח לסיוט. בשכבות — זה הכלל. שלוש שכבות שמכסות
        כל תרחיש: בסיס שמנדף לחות, ביניים שמחממת, חיצונית שמגנה. בישראל
        לרוב מסתפקים בשתיים — אבל חשוב להבין למה.
      </p>

      <blockquote className="post-quote">
        "לבשתי כותנה לגולן בחורף. גשם ב-12°. לא חזרתי עם כותנה. חזרתי עם לקח."
      </blockquote>

      <h2 className="post-h2">מערכת השכבות — הבסיס</h2>
      <InfoCard icon="👕" title="שכבה 1 — בסיס (Base Layer)">
        <p className="text-sm mb-3">ישירות על הגוף. תפקיד: לנדף לחות. <strong>לא כותנה</strong> — לעולם.</p>
        <div className="space-y-3">
          <GearRow icon="🐑" name="Merino Wool (מרינו) — הטוב ביותר"
            why="לא מסריח גם אחרי יומיים. מסדיר טמפ'. רך, נוח, לא מגרד. Smartwool, Icebreaker."
            price="180–350 ₪" />
          <GearRow icon="⚡" name="Polyester / Nylon סינטטי — זול יותר"
            why="מייבש מהר, עמיד, זול. מסריח לאחר יום אחד. Patagonia Capilene, Under Armour HeatGear."
            price="80–160 ₪" />
          <GearRow icon="🚫" name="כותנה — לא בשטח"
            why="שומרת לחות ולא מתייבשת. ב-15° עם רוח ורטיבות — קרה. ב-35° — לחה ומרגיזה."
            price="—" />
        </div>
      </InfoCard>

      <InfoCard icon="🧣" title="שכבה 2 — ביניים (Mid Layer)">
        <p className="text-sm mb-3">חמימות. ניתן להסיר בקלות לפי צורך.</p>
        <div className="space-y-3">
          <GearRow icon="🪶" name="פוך (Down) — חם, קל, קטן"
            why="חם/משקל יחס הטוב ביותר. מתקפל לשקית קטנה. לא עובד כשרטוב — בישראל גשמית יש לשקול."
            price="600–1,400 ₪" />
          <GearRow icon="🧊" name="סינטטי (Synthetic) — פחות חם, עובד ברטיבות"
            why="Patagonia Nano Puff, Arc'teryx Atom. כשגשמייה לא מושלמת — הביניים הסינטטית ממשיכה לחמם."
            price="500–1,000 ₪" />
          <GearRow icon="🐑" name="פליז (Fleece) — תקציב, בישראל מעולה"
            why="Patagonia R1, Helly Hansen. קל, נושם, עמיד. לישראל — לרוב מספיק בחורף ג'ולן/ים."
            price="200–500 ₪" />
        </div>
      </InfoCard>

      <InfoCard icon="🌧️" title="שכבה 3 — חיצונית (Shell)">
        <p className="text-sm mb-3">גשם ורוח. ניתן להסיר כשיפה. השקעה שמשתלמת.</p>
        <div className="space-y-3">
          <GearRow icon="🏆" name="Gore-Tex Pro — הכי טוב"
            why="Arc'teryx Alpha SV, Mammut Nordwand. אטום לחלוטין, נושם, עמיד 10+ שנה. לשימוש רציני."
            price="1,500–3,500 ₪" />
          <GearRow icon="💡" name="Gore-Tex — סטנדרט"
            why="Arc'teryx Beta SL, Salomon Outline GTX. ברמה הנכונה לרוב הפעילויות. מה שיש לי."
            price="800–1,800 ₪" />
          <GearRow icon="💰" name="2.5L / Hardshell תקציבי"
            why="Decathlon Forclaz, Columbia Watertight. מגן מגשם בסיסי. לא נושם כמו GTX אבל עושה עבודה."
            price="200–500 ₪" />
        </div>
      </InfoCard>

      <h2 className="post-h2">ביגוד לפי עונה בישראל</h2>
      <InfoCard icon="📅" title="מה לובשים מתי">
        <div className="space-y-3 text-sm">
          {[
            { season: 'קיץ (מאי–ספטמבר)', rec: 'חולצת UPF 50+ ארוכה, מכנסיים קלות, כובע שמש, גרביים מרינו קצרות' },
            { season: 'חורף ים תיכוני (נובמבר–פברואר)', rec: 'בסיס מרינו + פליז + גשמייה. כפפות ב-Golan. שכבות.' },
            { season: 'גולן בחורף', rec: 'בסיס מרינו + ביניים פוך + גשמייה GTX + כובע + כפפות. קר ולח.' },
            { season: 'נגב וסיני', rec: 'חולצה ארוכה UPF + מכנסיים ארוכות (מגנות מחום) + כפיה/באף לראש' },
            { season: 'חרמון / קילי', rec: 'בסיס כבד + ביניים כבד + שאל 3 שכבות + כפפות מקצועיות + בלקלבה' },
          ].map(({ season, rec }) => (
            <div key={season} className="flex flex-col border-b border-orange-100 pb-2 last:border-0">
              <span className="font-semibold text-dark">{season}</span>
              <span className="text-dark/60">{rec}</span>
            </div>
          ))}
        </div>
      </InfoCard>

      <h2 className="post-h2">חמישה כללים שאני שומר</h2>
      <div className="space-y-3 my-5">
        <TipCard num={1} title="לא כותנה — אי פעם"
          text="כותנה = לחות = קור/חום/שפשוף. מרינו וול או סינטטי לכל שכבת בסיס וביניים. גם בקיץ." />
        <TipCard num={2} title="שכבות — לא חתיכה אחת עבה"
          text="חתיכה אחת עבה = לא גמישה. שלוש שכבות דקות = מתאים לכל מצב. מורידים/מוסיפים לפי צורך." />
        <TipCard num={3} title="לבשו לפני שקר — לא כשכבר קר"
          text="הוספת שכבה כשכבר קרים לוקחת 10–15 דקות להתחמם. לבשו ברגע שיורד הקצב." />
        <TipCard num={4} title="ביגוד כהה — לא לנגב בקיץ"
          text="שחור ונייבי סופגים קרינה. לנגב וסיני — לבן, בז', ירוק בהיר. שינוי ב-8–10° בתחושה." />
        <TipCard num={5} title="כובע ורוח — לא נפרדים"
          text="גולן בינואר + רוח 30+ קמ&quot;ש + ללא כובע = קר גם ב-10°. כובע וול = חצי המשחק." />
      </div>

      <blockquote className="post-quote">
        "הביגוד הנכון לא עושה אתכם מגניבים יותר — הוא עושה אתכם חמים, יבשים, וצרים פחות בשעה השביעית."
      </blockquote>

    </PostLayout>
  )
}
