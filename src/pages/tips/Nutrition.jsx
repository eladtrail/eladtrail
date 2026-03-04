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
  title:    'תזונה בשטח — מה אוכלים כשיוצאים לטיול',
  category: '💡 טיפים',
  date:     'פברואר 2025',
  readTime: 12,
  image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Nuts_and_seeds_small.jpg/1280px-Nuts_and_seeds_small.jpg',
  imageAlt: 'תזונה בשטח',
}

export default function TipsNutrition() {
  return (
    <PostLayout meta={META}>

      <p>
        תזונה בשטח היא לא דיאטה — היא דלק. הגוף שלכם שורף בטיול של 8 שעות
        פי 3–4 מהרגיל. מי שלא מתדלק נכון יגיע לשעה הרביעית עייף, עצבני,
        וחושב שהוא "לא בכושר". לרוב הוא פשוט רעב.
      </p>
      <p>
        הכלל הפשוט: <strong>אכלו לפני שאתם רעבים, שתו לפני שאתם צמאים.</strong>
        הגוף מאחר בסיגנל. עד שאתם מרגישים — כבר מאוחר מדי.
      </p>

      <blockquote className="post-quote">
        "הרגל הכי טוב שפיתחתי בשטח: לעצור כל שעה-שעתיים, לאכול משהו, ולשתות — גם אם לא מרגיש."
      </blockquote>

      <h2 className="post-h2">כמה קלוריות צריך בטיול?</h2>
      <InfoCard icon="🔢" title="חישוב צרכי אנרגיה">
        <ul className="space-y-2 text-sm">
          {[
            ['טיול קל (עד 4 שעות)', "1,800–2,200 קל\'"],
            ['טיול בינוני (4-7 שעות)', "2,500–3,200 קל\'"],
            ['טיול קשה (7+ שעות / עליות)', "3,000–4,000 קל\'"],
            ['שביל ישראל (יום מלא)', "3,500–5,000 קל\'"],
            ['כלל אצבע', '400–600 קלוריות לשעת הליכה + בסיס'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-orange-600 font-semibold">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <h2 className="post-h2">מה אני לוקח — הרשימה שלי</h2>

      <InfoCard icon="⚡" title="חטיפי אנרגיה מהירה (בכיס)">
        <div className="space-y-3">
          <GearRow icon="🍫" name="Clif Bar" why="250 קל', 9 גרם חלבון. מחזיק לחץ, טעים, לא נמס בחום ישראלי." price="12–16 ₪" />
          <GearRow icon="🥜" name="תערובת אגוזים + פירות יבשים" why="הכי קל, הכי צפוף קלורית. 100 גרם = ~550 קל'. מכינים לבד בזול." price="15 ₪/100 גרם" />
          <GearRow icon="🍬" name="Medjool Dates (תמרים)" why="סוכר טבעי מהיר + אשלגן. מונע התכווצויות שרירים. 3-4 תמרים בשעה = פנומנלי." price="20–30 ₪/250 גרם" />
          <GearRow icon="🍫" name="שוקולד מריר 70%+" why="שומן + סוכר + אנטיאוקסידנטים. הרבה יותר טוב מחטיף מסחרי. לא נמס עד ~35°." price="10–15 ₪" />
        </div>
      </InfoCard>

      <InfoCard icon="🍱" title="ארוחות ממשיות בשטח">
        <div className="space-y-3">
          <GearRow icon="🫙" name="Jetboil + אוכל לייופיל (Freeze Dried)" why="אוכל צבאי/טבעי שמחזיר מים רותחים לאוכל מלא. 450–600 קל' לשקית. כבד מעט אבל שווה." price="80–150 ₪/שקית" />
          <GearRow icon="🌯" name="פיתה + חומוס + ירקות" why="לטיול יומי — הכי קל. פחמימות + חלבון + ויטמינים. 3 שעות ראשונות שמח." price="20–30 ₪" />
          <GearRow icon="🧀" name="גבינה קשה + קרקרים" why="גבינה קשה (פרמזן, ג'וק, גאודה) מחזיקה יומיים ללא קירור. עתירת קלוריות וחלבון." price="25–40 ₪" />
          <GearRow icon="🥛" name="אבקת חלבון (Whey) + שייקר" why="לאחרי טיול — 30 גרם חלבון בתוך שעה. מפחית כאב שרירים ב-48 שעות הבאות." price="35–50 ₪/מנה" />
        </div>
      </InfoCard>

      <h2 className="post-h2">מים — הנושא הכי חשוב</h2>
      <div className="space-y-3 my-5">
        <TipCard num={1} title="500 מ&quot;ל לשעת הליכה — מינימום"
          text="בחום של 30°+ בנגב: 750–1,000 מ&quot;ל לשעה. לא מנחש — מוציא בבוקר חישוב: שעות × 500 מ&quot;ל = כמות מינימלית." />
        <TipCard num={2} title="מלחים + אלקטרוליטים — לא רק מים"
          text="הזעה = אובדן נתרן, אשלגן, מגנזיום. שתיית מים בלי מלחים מדללת את הדם. קחו טבליות Nuun, Tailwind, או פשוט — אוכלים מלוח." />
        <TipCard num={3} title="פילטר מים — Sawyer Squeeze"
          text="150 גרם. מסנן כל בקטריה. בישראל יש מעיינות, בריכות ונחלים — עם הפילטר אפשר למלא בכל מקום ולהמשיך." />
        <TipCard num={4} title="השתן — אינדיקטור"
          text="צהוב כהה = שותים מעט. שקוף = מספיק. ירוק/חום = חירום. בדקו כל כמה שעות." />
      </div>

      <h2 className="post-h2">לפני הטיול, בזמן, אחרי</h2>
      <InfoCard icon="📅" title="תזמון נכון">
        <ul className="space-y-2 text-sm">
          {[
            ['ערב לפני', 'ארוחת פחמימות גדולה — פסטה, אורז, לחם. לא חריף, לא שומני מדי.'],
            ['בוקר הטיול (2 שעות לפני)', 'פחמימות + קצת חלבון. שיבולת שועל, ביצה, בננה. לא על קיבה ריקה.'],
            ['כל 45–90 דקות בשטח', "משהו קטן — 100–200 קל'. לא להמתין לרעב."],
            ['חצי שעה לפני סיום', 'משהו עם חלבון — מכין את הגוף לשיקום.'],
            ['שעה ראשונה אחרי', '4:1 פחמימות:חלבון. שייק + בננה. חלון זהב לשיקום שרירים.'],
          ].map(([k, v]) => (
            <li key={k} className="flex flex-col border-b border-orange-100 pb-2 last:border-0">
              <span className="font-semibold text-dark text-sm">{k}</span>
              <span className="text-dark/60 text-sm">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <blockquote className="post-quote">
        "שלחתי חבר לביתו באמצע שביל עם 'עייפות כללית'. הגיע הביתה, אכל ארוחה גדולה, וביום למחרת חש מצוין. לא היה עייף — היה רעב."
      </blockquote>

    </PostLayout>
  )
}
