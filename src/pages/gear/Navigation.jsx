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
  title:    'ציוד ניווט — מאפליקציה ועד GPS לוויני',
  category: '🎒 ציוד',
  date:     'אפריל 2025',
  readTime: 10,
  image:    'https://upload.wikimedia.org/wikipedia/commons/a/a4/GPS_Receiver.jpg',
  imageAlt: 'ניווט GPS',
}

export default function GearNavigation() {
  return (
    <PostLayout meta={META}>

      <p>
        אובדן כיוון בשטח הוא לא בעיה של אנשים שלא מכירים — זו בעיה של אנשים
        שסומכים על קליטה שאין. בגולן, בנגב, בערבה — ב-80% מהשטח אין 4G.
        ניווט נכון מתחיל לפני שיוצאים, לא כשנאבדים.
      </p>

      <blockquote className="post-quote">
        "הניווט הכי טוב שיש — הוא לדעת לאן הולכים לפני שמתחילים ללכת."
      </blockquote>

      <h2 className="post-h2">שכבות הניווט — מהבסיסי למתקדם</h2>

      <InfoCard icon="📱" title="שכבה 1: אפליקציות (חובה לכולם)">
        <div className="space-y-3">
          <GearRow icon="🇮🇱" name="Topo Israel"
            why="הסטנדרט לישראל. מפות טופוגרפיות מפורטות עם כל שבילי ה-SPNI. הורדת אזורים אופליין. חינם."
            price="חינם" />
          <GearRow icon="🌍" name="AllTrails Pro"
            why="לבינלאומי + ביקורות ממשתמשים + GPX. $36/שנה. מתאים לטיולים בחו&quot;ל בעיקר."
            price="$36/שנה" />
          <GearRow icon="🗻" name="Gaia GPS"
            why="הכי גמיש — שכבות מפה מרובות, ייבוא GPX, מאגר מסלולים. מועדף של מטיילי UL."
            price="$40/שנה" />
          <GearRow icon="🧭" name="OsmAnd"
            why="מבוסס OpenStreetMap. גמיש, חינמי, עובד אופליין. דורש הגדרה — פחות ידידותי."
            price="חינם / פרמיום" />
        </div>
      </InfoCard>

      <InfoCard icon="⌚" title="שכבה 2: שעון GPS (מומלץ)">
        <div className="space-y-3">
          <GearRow icon="🥇" name="Garmin Fenix 7 — פרו"
            why="17 ימי סוללה. מפות טופו מובנות. בטיחות מתקדמת. סטנדרט של מסעות. כבד מהשקל בנסיון."
            price="2,500–3,500 ₪" />
          <GearRow icon="💡" name="Garmin Instinct 2 — איזון"
            why="מחיר-ביצועים מנצח. 28 ימי סוללה (מד GPS), עמיד, GPS מדויק. בלי מפות — כן GPX."
            price="1,200–1,600 ₪" />
          <GearRow icon="🏃" name="Coros Vertix 2 — טיפוס"
            why="60 שעות GPS. מושלם לאקספדיציות. מפות טופו. סוללה = יתרון אדיר בימים ארוכים."
            price="2,200–2,800 ₪" />
        </div>
      </InfoCard>

      <InfoCard icon="🛰️" title="שכבה 3: GPS לוויני (לשטח מרוחק)">
        <div className="space-y-3">
          <GearRow icon="🚨" name="Garmin inReach Mini 2"
            why="הכי קומפקטי. תקשורת לוויין דו-כיוונית (SMS גם ללא קליטה). SOS ישיר למרכז חילוץ. מנוי דרוש."
            price="1,800–2,200 ₪ + מנוי" />
          <GearRow icon="📡" name="SPOT Gen4"
            why="SOS + מעקב + הודעות. פשוט יותר מ-inReach — לא דו-כיווני. טוב לבסיסי."
            price="900–1,200 ₪ + מנוי" />
          <GearRow icon="⚡" name="PLB (Personal Locator Beacon)"
            why="חד-פעמי (SOS בלבד) ללא מנוי. ACR ResQLink. מתאים למי שרוצה ביטוח בסיסי בלבד."
            price="500–700 ₪ (חד פעמי)" />
        </div>
      </InfoCard>

      <h2 className="post-h2">טיפים לניווט</h2>
      <div className="space-y-3 my-5">
        <TipCard num={1} title="הורידו מפה אופליין לפני כל יציאה"
          text="גם אם יש קליטה — הורידו. סוללה מתה, קליטה נעלמת. מפה אופליין = ביטוח בלי מחיר." />
        <TipCard num={2} title="למדו קרוא מפה טופוגרפית"
          text="קווי גובה בישראל = כל 20 מטר. קווים צפופים = מדרון תלול. בלגן אמיתי?" />
        <TipCard num={3} title="שלחו GPX גם לחבר"
          text="לפני יציאה — שלחו GPX לאחראי שנשאר בבית. אם לא חוזרים — הוא יידע לאן לתחקר חילוץ." />
        <TipCard num={4} title="קליברציה של המצפן"
          text="מצפן דיגיטלי בשעון צריך כיול אחת לכמה שבועות. 8 תנועות קלות — ראו מדריך יצרן." />
      </div>

      <blockquote className="post-quote">
        "GPS הציל אותי פעם אחת. הידיעה איך לנווט בלי GPS הצילה אותי שלוש פעמים."
      </blockquote>

    </PostLayout>
  )
}
