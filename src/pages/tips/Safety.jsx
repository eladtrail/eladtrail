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
  title:    'בטיחות בשטח — הכללים שמצילים חיים',
  category: '💡 טיפים',
  date:     'מרץ 2025',
  readTime: 13,
  image:    'https://upload.wikimedia.org/wikipedia/commons/e/ea/Berg_Arbel_oberhalb_des_See_Genezareth%2C_Israel-Trail.jpg',
  imageAlt: 'בטיחות בשטח',
}

export default function TipsSafety() {
  return (
    <PostLayout meta={META}>

      <p>
        כשמדברים על בטיחות בטיולים, אנשים חושבים על נחשים ונפילות. המציאות?
        רוב האירועים שמסתיימים בחילוץ נגרמים מ<strong>התייבשות, היפותרמיה,
        ואובדן כיוון</strong>. שלושתם ניתנים למניעה כמעט מלאה עם הכנה נכונה.
      </p>
      <p>
        ב-2024 היו בישראל מאות פינויי חירום מטיילים. רובם מיותרים. זה לא
        אומר שאנשים פזיזים — זה אומר שאנשים לא יודעים. אז בואו נדבר על מה שצריך לדעת.
      </p>

      <blockquote className="post-quote">
        "המטייל המסוכן ביותר הוא לא זה שחסר לו ציוד — זה זה שחסר לו מידע."
      </blockquote>

      <h2 className="post-h2">לפני שיוצאים — הפרוטוקול</h2>
      <div className="space-y-3 my-5">
        <TipCard num={1} title="ספרו למישהו — חובה מוחלטת"
          text="שלחו WhatsApp עם: שם המסלול, נקודת חניה, שעת יציאה, שעת חזרה. הוסיפו: 'אם לא שמעת ממני עד [שעה] — התקשר ל-100.' זה לוקח 2 דקות ומציל חיים." />
        <TipCard num={2} title="הורידו מפה אופליין"
          text="Topo Israel, AllTrails, Gaia GPS — כולן מאפשרות הורדת מפות ללא אינטרנט. ב-80% מהשטח בישראל (גולן, נגב, ערבה) אין קליטה. מפה בטלפון ללא אינטרנט = חיים." />
        <TipCard num={3} title="בדקו תחזית — ביום הטיול"
          text="Windy.com לגובה, IMS לאזורים ספציפיים. אל תסתמכו על תחזית של יומיים קדימה. גשם בגולן = שביל בוץ. גשם בנגב = סכנת שיטפון." />
        <TipCard num={4} title="יצאו מוקדם"
          text="ברוב ישראל — יצאו לפני 07:30. בקיץ בנגב — לפני 06:00. מי שמתחיל מאוחר מסיים בחושך. מי שמסיים בחושך מסתכן." />
      </div>

      <h2 className="post-h2">5 הסכנות הנפוצות — ואיך מתמודדים</h2>

      <InfoCard icon="🌡️" title="התייבשות ומכת חום">
        <p className="text-sm mb-3">הגורם מספר אחת לחילוץ בישראל. בקיץ — תוך שעה ברמת הגוף.</p>
        <ul className="space-y-1.5 text-sm">
          {[
            ['סימנים מוקדמים', 'כאב ראש קל, פה יבש, עייפות — שתו מיד'],
            ['סימנים חמורים', 'סחרחורת, בלבול, הפסקת הזעה — STOP והתקשרו לעזרה'],
            ['מניעה', '500 מ"ל לשעה + מלחים + צל בשעות 11-15'],
            ['טיפול', 'צל, שתייה מדורגת, קרח על צוואר + פרקי ידיים'],
          ].map(([k, v]) => (
            <li key={k} className="flex gap-2 border-b border-orange-100 pb-1.5 last:border-0 flex-wrap">
              <span className="font-semibold text-dark min-w-[100px]">{k}:</span>
              <span className="text-dark/60">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard icon="🥶" title="היפותרמיה — מתחת ל-35°C בגוף">
        <p className="text-sm mb-3">לא רק בחרמון — גם בגולן ובנגב בלילה. גשם + רוח = סכנה גם ב-15°C.</p>
        <ul className="space-y-1.5 text-sm">
          {[
            ['סימנים מוקדמים', 'רעידות, עייפות, קושי בדיבור'],
            ['סימנים מאוחרים', 'הפסקת רעידות (!) — הגוף מתייאש'],
            ['מניעה', 'שכבות, ביגוד רוח, שינה יבשה'],
            ['טיפול', 'הסירו ביגוד רטוב, עטפו בשמיכת כסף, משקה חם'],
          ].map(([k, v]) => (
            <li key={k} className="flex gap-2 border-b border-orange-100 pb-1.5 last:border-0 flex-wrap">
              <span className="font-semibold text-dark min-w-[100px]">{k}:</span>
              <span className="text-dark/60">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard icon="🗺️" title="אובדן כיוון">
        <p className="text-sm mb-3">הפחד הכי גדול, אבל הכי קל למנוע.</p>
        <div className="space-y-2 text-sm">
          {[
            { step: 'STOP', desc: 'עצרו. אל תלכו עוד. ישיבה על הקרקע ונשימות עמוקות.' },
            { step: 'THINK', desc: 'מתי הייתם בוודאות על המסלול? כמה זמן עבר? לאן הלכתם?' },
            { step: 'OBSERVE', desc: 'הסתכלו סביב. יש שלטים? וואדי? כביש? צפון לפי השמש?' },
            { step: 'PLAN', desc: 'חזרה לנקודה ידועה אחרונה, לא קדימה לאן שלא יודעים.' },
          ].map(({ step, desc }) => (
            <div key={step} className="flex gap-3">
              <span className="bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 h-fit">{step}</span>
              <span className="text-dark/60">{desc}</span>
            </div>
          ))}
        </div>
      </InfoCard>

      <InfoCard icon="🐍" title="נחשים ועקרבים">
        <p className="text-sm mb-3">ישראל יש ~40 מינים. רובם לא אגרסיביים כשלא מאיימים עליהם.</p>
        <ul className="space-y-1.5 text-sm">
          {[
            ['כלל מספר 1', 'לא מגיעים לנחש — נחש לא מגיע אליכם'],
            ['בלילה ובבוקר', 'פנס ראש תמיד. עקרבים פעילים בלילה.'],
            ['נגיסה', 'הורידו תכשיטים, קשרו רפוי מעל הנגיסה, EVAC מיידי'],
            ['לא לעשות', 'לחתוך, למצוץ, לקשור חוסם עורקים — מסוכן'],
          ].map(([k, v]) => (
            <li key={k} className="flex gap-2 border-b border-orange-100 pb-1.5 last:border-0 flex-wrap">
              <span className="font-semibold text-dark min-w-[100px]">{k}:</span>
              <span className="text-dark/60">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard icon="🌊" title="שיטפונות — נגב וערבה">
        <p className="text-sm mb-3">שיטפון יכול לגיע מגשם שיורד 50 ק"מ משם. ב-2021 נהרגו מטיילים בנגב כך.</p>
        <ul className="space-y-1.5 text-sm">
          {[
            ['כלל ברזל', 'לא ישנים בתוך ואדי / נחל בנגב בחורף'],
            ['זיהוי סכנה', 'רעש גדול מרחוק + ריח עפר לח = ברחו לצדדים ולמעלה'],
            ['בדיקה לפני', 'תחזית גשמים ב-50 ק"מ ממקום הטיול, לא רק בנקודה'],
          ].map(([k, v]) => (
            <li key={k} className="flex gap-2 border-b border-orange-100 pb-1.5 last:border-0 flex-wrap">
              <span className="font-semibold text-dark min-w-[100px]">{k}:</span>
              <span className="text-dark/60">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <h2 className="post-h2">מספרי חירום</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-5">
        {[
          { num: '101', name: 'מד"א', emoji: '🚑' },
          { num: '100', name: 'משטרה', emoji: '🚔' },
          { num: '102', name: 'כיבוי', emoji: '🚒' },
          { num: '110', name: 'חיפוש וחילוץ', emoji: '🏔️' },
        ].map(({ num, name, emoji }) => (
          <div key={num} className="bg-white border-2 border-orange-200 rounded-2xl p-4 text-center shadow-sm">
            <div className="text-3xl mb-1">{emoji}</div>
            <div className="font-display text-2xl text-orange-600 font-bold">{num}</div>
            <div className="text-dark/60 text-xs mt-1">{name}</div>
          </div>
        ))}
      </div>

      <blockquote className="post-quote">
        "הטיול הכי בטוח הוא לא זה שאחריו אין כלום לספר. הוא זה שיצאתם מוכנים, ניהלתם סיכונים, וחזרתם בשלום."
      </blockquote>

    </PostLayout>
  )
}
