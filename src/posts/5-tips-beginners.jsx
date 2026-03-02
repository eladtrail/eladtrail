import PostLayout, { InlineImage } from '../components/PostLayout'

const META = {
  title:    '5 טעויות שכל מטייל מתחיל עושה',
  category: '💡 טיפים',
  date:     'דצמבר 2024',
  readTime: 11,
  image:    'https://upload.wikimedia.org/wikipedia/commons/e/ea/Berg_Arbel_oberhalb_des_See_Genezareth%2C_Israel-Trail.jpg',
  imageAlt: 'שביל ישראל — הר ארבל מעל הכינרת',
}

// ── כרטיס טעות מרכזי ────────────────────────────────────────
function MistakeCard({ number, title, icon, children }) {
  return (
    <div className="my-10">
      {/* כותרת */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-orange-600 text-white
                        flex flex-col items-center justify-center shadow-lg shadow-orange-200">
          <span className="text-xs font-bold opacity-70 leading-none">טעות</span>
          <span className="font-display text-2xl font-bold leading-none">{number}</span>
        </div>
        <div>
          <span className="text-2xl mr-2">{icon}</span>
          <span className="font-display text-2xl text-dark">{title}</span>
        </div>
      </div>
      {/* תוכן */}
      <div className="border-r-4 border-orange-200 pr-5 space-y-4">
        {children}
      </div>
    </div>
  )
}

// ── תיבת "מה לעשות במקום" ────────────────────────────────────
function FixBox({ children }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mt-4">
      <p className="font-bold text-green-800 mb-3 flex items-center gap-2 text-sm">
        <span className="text-lg">✅</span> הפתרון — מה לעשות במקום
      </p>
      <div className="text-green-900/70 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}

// ── תיבת אזהרה ──────────────────────────────────────────────
function WarnBox({ children }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-3">
      <p className="font-bold text-red-700 mb-2 flex items-center gap-2 text-sm">
        <span>⚠️</span> מה קורה בפועל
      </p>
      <div className="text-red-800/70 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════
export default function PostTips5() {
  return (
    <PostLayout meta={META}>

      {/* ── פתיחה ─────────────────────────────────────────── */}
      <p>
        כולנו התחלנו מאיפשהו. הטיול הראשון, הנעליים שמכאיבות, התרמיל הכבד מדי,
        ה-GPS שמת בדיוק כשצריך אותו. אני עשיתי את כל הטעויות האלה — חלק מהן פעם
        אחת, חלק יותר. הכתבה הזאת היא מה שהייתי רוצה שמישהו יגיד לי לפני
        הטיול הראשון שלי.
      </p>
      <p>
        חמש הטעויות הבאות הן הכי נפוצות שאני רואה אצל מטיילים מתחילים בישראל.
        הן לא מסוכנות תמיד — אבל הן הופכות טיול טוב לחוויה גרועה. ויותר מזה —
        הן גורמות לאנשים לא לחזור לשטח.
      </p>

      <blockquote className="post-quote">
        "הטיול הכי טוב הוא לא הכי קשה — הוא זה שאתה רוצה לחזור אליו."
      </blockquote>

      {/* ── סרגל טעויות ───────────────────────────────────── */}
      <div className="flex gap-2 flex-wrap my-6">
        {['01','02','03','04','05'].map((n) => (
          <div key={n}
            className="flex-1 min-w-[48px] bg-orange-100 rounded-xl py-2 text-center
                       font-display text-orange-600 font-bold text-lg">
            {n}
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════
          טעות 1
      ══════════════════════════════════════════════════════ */}
      <MistakeCard number="01" icon="🎒" title="לקחת יותר מדי ציוד">
        <p className="text-dark/70 leading-relaxed">
          קיפוד מיידי של כל חנות הציוד לתוך תרמיל 70 ליטר, ויציאה לטיול
          יומי של 8 ק"מ. זה הסצנה הכי נפוצה שאני רואה בחניון בתחילת
          שבילים. תרמיל שעושה 15–18 ק"ג לטיול של 6 שעות.
        </p>

        <WarnBox>
          <p>
            כל קילוגרם שעל הגב מוסיף 3–4× עומס על הברכיים בירידות.
            טיול שתוכנן ל-6 שעות הופך ל-9, הרגליים כואבות יום אחרי,
            ורבים מהמתחילים מחליטים שטיולים "לא בשבילם". זו לא בעיה של
            כושר — זו בעיה של משקל.
          </p>
        </WarnBox>

        <FixBox>
          <p><strong>כלל הבסיס:</strong> משקל התרמיל לטיול יומי — עד 10% ממשקל הגוף. לטיול לינה — עד 15–20%.</p>
          <ul className="space-y-1 mt-2">
            {[
              'מים: 500 מ"ל לשעת הליכה (בקיץ — כפול)',
              'אוכל: רק מה שצריך ליום הספציפי הזה',
              'ביגוד: שכבה אחת עתודה, לא שלוש',
              'ציוד חירום: עזרה ראשונה, פנס, כסנית — כן. "פשוט למקרה" — לא.',
            ].map(i => (
              <li key={i} className="flex gap-2">
                <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>{i}
              </li>
            ))}
          </ul>
          <p className="mt-3 bg-green-100 rounded-lg p-3 font-semibold text-green-800">
            💡 טריק: הוציאו מהתרמיל כל דבר שלא תשתמשו בו בוודאות. 9 מתוך 10 פעמים — אפשר להוריד עוד 2 ק"ג.
          </p>
        </FixBox>
      </MistakeCard>

      <div className="border-t border-orange-100" />

      {/* ══════════════════════════════════════════════════════
          טעות 2
      ══════════════════════════════════════════════════════ */}
      <MistakeCard number="02" icon="🌩️" title='לא לבדוק מזג האוויר בצורה מעמיקה'>
        <p className="text-dark/70 leading-relaxed">
          "בדקתי — כתוב בהיסטוריה שבדצמבר זה 18 מעלות" — זו המשפט שאני שומע
          הכי הרבה. מזג האוויר בישראל משתנה דרמטית לפי גובה, אזור וחודש.
          הגולן בינואר ≠ תל אביב בינואר. מדבר יהודה בפברואר ≠ הגליל בפברואר.
        </p>

        <WarnBox>
          <p>
            קיץ בנגב: 42°C בשעה 11:00, ללא צל, עם תרמיל 12 ק"ג — זה
            מצב חירום ממשי. חורף בגולן: גשם שמתחיל בחצות, שבילי בזלת
            שהופכים לנהרות בוץ. שניהם קורים בכל שנה ושניהם ניתנים למניעה
            מלאה בבדיקה פשוטה של 5 דקות.
          </p>
        </WarnBox>

        <FixBox>
          <p><strong>הכלים הנכונים לבדיקת תחזית לטיולים:</strong></p>
          <ul className="space-y-1.5 mt-2">
            {[
              { name: 'Windy.com', desc: 'תחזית שעתית לפי גובה — חיונית לגולן וחרמון' },
              { name: 'AccuWeather (שעתי)', desc: 'טמפרטורה + גשם לפי שעה, לא רק "תחזית יומית"' },
              { name: 'אפליקציית IMS', desc: 'השירות המטאורולוגי הישראלי — מדויק לאזורים ספציפיים' },
              { name: 'קבוצות פייסבוק מקומיות', desc: 'מטיילים שיצאו מאתמול — מידע אמיתי מהשטח' },
            ].map(({ name, desc }) => (
              <li key={name} className="flex gap-2">
                <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                <span><strong>{name}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 bg-green-100 rounded-lg p-3 font-semibold text-green-800">
            💡 כלל אצבע: אם יש יותר מ-30% סיכוי לגשם בנגב — דחו. בגולן ובחרמון — תתלבשו בהתאם, לא תדחו.
          </p>
        </FixBox>
      </MistakeCard>

      <div className="border-t border-orange-100" />

      {/* ══════════════════════════════════════════════════════
          טעות 3
      ══════════════════════════════════════════════════════ */}
      <MistakeCard number="03" icon="⛰️" title="להתחיל עם מסלול קשה מדי">
        <p className="text-dark/70 leading-relaxed">
          "ראיתי תמונות מחרמון, אני רוצה לעלות לחרמון" — הכוונה טובה. הביצוע,
          כשזה הטיול השלישי בחיים, פחות. מסלולי הרים בישראל מדורגים לפי
          קושי — ורוב האפליקציות מציגות "מסלול בינוני" שמשמעותו שונה לחלוטין
          ממה שמתחיל מדמיין.
        </p>

        <WarnBox>
          <p>
            מסלולים קשים מדי גורמים לפציעות (שפשופים, נקעים, שלפוחיות),
            לחוויה גרועה, ולהחלטה "טיולים זה לא בשבילי". רוב הנטישות של
            תחביב הטיולים קורות אחרי הטיול השלישי עד החמישי — כשהציפייה
            לא מתאימה ליכולת.
          </p>
        </WarnBox>

        <FixBox>
          <p><strong>מדרג מומלץ למתחילים:</strong></p>
          <div className="space-y-2 mt-3">
            {[
              { level: 'טיולים 1–5', desc: '4–8 ק"מ, עלייה עד 200 מ׳, שביל מסומן, קרוב לכביש', color: 'bg-green-100 text-green-800' },
              { level: 'טיולים 6–15', desc: '8–14 ק"מ, עלייה 200–400 מ׳, עם ניווט בסיסי', color: 'bg-yellow-100 text-yellow-800' },
              { level: 'טיולים 16+', desc: 'מסלולים ארוכים, לינת שטח, מסלולים לא מסומנים', color: 'bg-orange-100 text-orange-800' },
            ].map(({ level, desc, color }) => (
              <div key={level} className="flex gap-3 items-start">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${color}`}>
                  {level}
                </span>
                <span className="text-sm">{desc}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 bg-green-100 rounded-lg p-3 font-semibold text-green-800">
            💡 מסלולים מתחילים מומלצים בישראל: נחל מערות (כרמל), נחל ציפורי (גליל תחתון), שביל החי-בר (ערבה), עין גדי (יהודה).
          </p>
        </FixBox>
      </MistakeCard>

      <div className="border-t border-orange-100" />

      {/* ══════════════════════════════════════════════════════
          טעות 4
      ══════════════════════════════════════════════════════ */}
      <MistakeCard number="04" icon="👟" title="לא לאמן את הנעליים לפני הטיול">
        <p className="text-dark/70 leading-relaxed">
          קנייה ביום חמישי, טיול ביום שישי. הנעליים "מרגישות מצוין בחנות",
          אז למה לחכות? כי הרגל בחנות ≠ הרגל אחרי 4 שעות הליכה על בזלת.
          עור חדש + חיכוך = שלפוחיות שמסוגלות להפוך טיול מדהים לסיוט.
        </p>

        <WarnBox>
          <p>
            שלפוחיות שלא מטופלות נפצעות, מודלקות, ויכולות לגרום לזיהום.
            ב-2023 נפינה ל-MDA באמצע שביל ישראל בגלל שלפוחית שנהפכה
            לפצע פתוח ביום 4. זה נמנע לחלוטין עם 3 שבועות אימון מראש.
          </p>
        </WarnBox>

        <FixBox>
          <p><strong>פרוטוקול אימון נעליים — 3 שבועות:</strong></p>
          <div className="space-y-2 mt-3">
            {[
              { week: 'שבוע 1', action: 'הליכה 30–45 דקות ביום על מדרכה, עם גרביים טכניות' },
              { week: 'שבוע 2', action: 'הליכה 60–90 דקות, כולל עלייה וירידה קצרה' },
              { week: 'שבוע 3', action: 'יום שטח קצר (4–5 ק"מ) על שביל עפר' },
            ].map(({ week, action }) => (
              <div key={week} className="flex gap-3 items-start">
                <span className="bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                  {week}
                </span>
                <span className="text-sm">{action}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm"><strong>ציוד שמנע ממני שלפוחיות:</strong></p>
          <ul className="space-y-1 mt-1">
            {[
              'גרביים מרינו (Darn Tough / Smartwool) — לא כותנה!',
              'Leukotape P — לפני הטיול, על אזורי חיכוך ידועים',
              'Body Glide — לאצבעות ולעקב, לוקחים בנסיעה',
            ].map(i => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>{i}
              </li>
            ))}
          </ul>
        </FixBox>
      </MistakeCard>

      <div className="border-t border-orange-100" />

      {/* ══════════════════════════════════════════════════════
          טעות 5
      ══════════════════════════════════════════════════════ */}
      <MistakeCard number="05" icon="📵" title="לצאת לבד בלי לספר לאף אחד">
        <p className="text-dark/70 leading-relaxed">
          "אני הולך לאזור מוכר, יש לי טלפון, מה יכול לקרות?" — הרבה דברים.
          נקע ברגל ב-3 שעות הליכה מהחניה. סוללת טלפון שמתה בחום.
          גשם פתאומי שהפך שביל לבוצי. קליטה אפסית ב-80% משטחי הגולן והנגב.
          כל אחד מהם לבד — ניהול. כולם יחד — חירום.
        </p>

        <WarnBox>
          <p>
            ב-2024 היו בישראל 47 מבצעי חיפוש וחילוץ מטיילים שיצאו ללא
            תיאום מוקדם. עלות חילוץ: עשרות אלפי שקלים. בחלק מהמקרים —
            נזק גוף בלתי הפיך. כולם ניתנים למניעה עם 2 דקות הכנה.
          </p>
        </WarnBox>

        <FixBox>
          <p><strong>פרוטוקול "ספר לפני שיוצאים" — חובה:</strong></p>
          <ul className="space-y-2 mt-2">
            {[
              'שלחו WhatsApp לאדם אחד עם: מסלול, חניה, שעת יציאה, שעת חזרה משוערת',
              'הגדירו: "אם לא שמעתם ממני עד [שעה X] — התקשרו למשטרה / מד"א"',
              'הורידו מפות אופליין לפני הגעה (Topo Israel, Waze Offline)',
              'השאירו קישור ל-Google Maps של נקודת ההתחלה',
              'לאזורים מרוחקים — PLB (מאותת לוויין) עולה 400–600 ₪ ומציל חיים',
            ].map(i => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>{i}
              </li>
            ))}
          </ul>
          <p className="mt-3 bg-green-100 rounded-lg p-3 font-semibold text-green-800">
            💡 מספרי חירום לשטח: מד"א 101 | משטרה 100 | כיבוי 102 | חיפוש וחילוץ 110
          </p>
        </FixBox>
      </MistakeCard>

      {/* ── תמונה פנימית ──────────────────────────────────── */}
      <InlineImage
        src="https://upload.wikimedia.org/wikipedia/commons/7/73/Israel_National_Trail_on_red_dirt_road.JPG"
        alt="שביל ישראל — דרך אדמה אדומה בגליל"
        caption="שביל ישראל בגליל — הכנה נכונה הופכת כל מסלול לחוויה"
      />

      {/* ── רשימת בדיקה ───────────────────────────────────── */}
      <h2 className="post-h2">צ'קליסט — לפני כל טיול</h2>
      <p>שמרו את זה, שלחו לחבר, הדפיסו — תשתמשו בזה:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {[
          {
            title: '48 שעות לפני',
            icon: '📅',
            items: [
              'בדיקת תחזית ב-Windy + IMS',
              'תכנון מסלול + הורדת מפה אופליין',
              'וידוא שהנעליים מאומנות',
              'הכנת ציוד — לא ביום הטיול',
              'הודעה לגורם אחראי עם פרטי מסלול',
            ],
          },
          {
            title: 'בוקר הטיול',
            icon: '☀️',
            items: [
              'בדיקת תחזית עדכנית אחרונה',
              'וידוא מים — לפחות 500 מ"ל לשעה',
              'טלפון טעון 100% + פוורבנק',
              'Leukotape על אזורי חיכוך',
              'הודעת פתיחה לגורם האחראי',
            ],
          },
          {
            title: 'ציוד בסיסי שתמיד לוקחים',
            icon: '🎒',
            items: [
              'מים (!)‏ — יותר ממה שחשבתם',
              'עזרה ראשונה בסיסית + Leukotape',
              'פנס ראש + סוללה עתודה',
              'כסנית חירום (שמיכת כסף)',
              'מפה אופליין טעונה בטלפון',
            ],
          },
          {
            title: 'סיום הטיול',
            icon: '🏁',
            items: [
              'הודעת "הגעתי בשלום" לגורם האחראי',
              'בדיקת רגליים — טפלו בשלפוחיות מיד',
              'תיעוד: מה עבד, מה לא, מה לשפר',
              'תדלוק נכון — חלבון + פחמימות בשעה הראשונה',
              'מנוחה — הגוף מחלים בזמן שינה',
            ],
          },
        ].map((section) => (
          <div key={section.title}
            className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm">
            <p className="font-bold text-dark mb-3 flex items-center gap-2">
              <span className="text-xl">{section.icon}</span>
              {section.title}
            </p>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-dark/65">
                  <span className="text-orange-400 mt-0.5 flex-shrink-0 text-base leading-none">□</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── סיכום ─────────────────────────────────────────── */}
      <h2 className="post-h2">אחרי הכל — מה הכי חשוב?</h2>
      <p>
        חמש הטעויות האלה לא נובעות מחוסר כושר, חוסר אינטליגנציה, או חוסר
        רצינות. הן נובעות מחוסר מידע. עכשיו יש לכם את המידע. כל מה שנשאר
        זה לצאת לשטח, לטעות קצת, ולחזור — כי כל טיול מלמד אתכם משהו שאף
        מדריך לא יכול ללמד.
      </p>
      <p>
        הטיפ הכי חשוב שאני יכול לתת? צאו. עם כל חסרי השלמות, עם הציוד
        שעוד אין לכם, עם הניסיון שעוד תצברו — צאו לשביל. הטעויות הן חלק
        מהלמידה. רק תעשו אותן בבטחה.
      </p>

      <blockquote className="post-quote">
        "המטייל המנוסה לא זה שלא טעה — זה זה שטעה, למד, וחזר לשטח."
      </blockquote>

    </PostLayout>
  )
}
