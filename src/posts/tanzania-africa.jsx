import PostLayout, { InlineImage } from '../components/PostLayout'
import PhotoGrid from '../components/PhotoGrid'
import AnimatedSection from '../components/AnimatedSection'

const META = {
  title:    "טנזניה — מרו, קילימנג'רו וספארי",
  category: '🌍 חו"ל',
  date:     'ינואר 2025',
  readTime: 18,
  image:    'https://upload.wikimedia.org/wikipedia/commons/0/00/Kilimanjaro_from_Amboseli.jpg',
  imageAlt: "הר הקילימנג'רו — גג אפריקה",
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

// ── כרטיס טיפ ───────────────────────────────────────────────
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

// ── שלב בטיפוס ──────────────────────────────────────────────
function ClimbDay({ day, title, elevation, distance, desc }) {
  return (
    <div className="border-r-4 border-orange-500 pr-4 my-5">
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <span className="bg-orange-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          יום {day}
        </span>
        <span className="font-bold text-dark">{title}</span>
        <span className="text-dark/40 text-sm mr-auto">{elevation} | {distance}</span>
      </div>
      <p className="text-dark/60 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

// ════════════════════════════════════════════════════════════
export default function PostTanzaniaAfrica() {
  return (
    <PostLayout meta={META}>

      {/* ── פתיחה ─────────────────────────────────────────── */}
      <p>
        יש נסיעות שמתכננים אותן שנים. ויש נסיעות שנולדות ממשפט אחד
        שאמרת לאחד שאתה סומך עליו: <em>"בא לי לעלות על קילימנג'רו."</em>
        הוא אמר: <em>"בא. מתי?"</em> ואז פתאום זה אמיתי.
      </p>
      <p>
        <strong>טנזניה</strong> נתנה לי שלושה דברים שלא ציפיתי להם
        בו-זמנית: הר שמחרפן אותך עד הגבול — שניים מהם. ספארי שמוכיחה
        שמה שרואים בטלוויזיה הוא רק חצי מהסיפור. ואנשים שמחייכים
        כאילו הם בסדר עם העולם בצורה שלא ראיתי בשום מקום אחר.
      </p>
      <p>
        זה היה 14 הימים הכי מאשרים ומאתגרים שעשיתי בחיי — ב-2025,
        כשעלינו לגג אפריקה ויצאנו לראות אריות בשדות הסרנגטי.
      </p>

      <blockquote className="post-quote">
        "עמדתי על פסגת קילימנג'רו בגובה 5,895 מטר, עם פנס הראש עדיין
        דולק בחמש בבוקר, ולא הצלחתי להסביר למה אני בוכה. לא מקור.
        לא עייפות. פשוט — ידעתי שעשיתי משהו שלא יכולתי לדמיין
        את עצמי עושה."
      </blockquote>

      {/* ── הר מרו ────────────────────────────────────────── */}
      <h2 className="post-h2">הר מרו — ה"חימום" שלא ידעתי שצריך</h2>
      <p>
        הסדר הנכון הוא: <strong>קודם מרו, אחר כך קילימנג'רו</strong>.
        רוב האנשים מדלגים על מרו — טעות. מרו הוא 4,566 מטר של עלייה
        מפרכת בתוך יער גשם, קרחות ונוף שישכן אותך. הוא מכין את הגוף
        לגבהים, ונותן לך את הביטחון שתצטרך כשתעמוד בפני הר הגדול.
      </p>
      <p>
        הטיפוס על מרו לוקח <strong>3–4 ימים</strong> ומתחיל מ-Momella Gate
        בתוך שמורת Arusha National Park. מהר מאוד הדרך עוברת דרך יער
        עם קופי קולובוס, ג'ירפות שמציצות מבין האקליפטוסים, ואז
        מעל קו העצים — אל נוף ירח של אדמה שחורה-אפורה של לבה ישנה.
      </p>

      <InlineImage
        src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Mount_Meru_Tanzania.jpg"
        alt="הר מרו"
        caption="הר מרו — 4,566 מ', הכנה מושלמת לקילימנג'רו"
      />

      <InfoCard icon="⛰️" title="הר מרו — עובדות">
        <ul className="space-y-2 text-sm">
          {[
            ['גובה פסגה',      '4,566 מטר (Socialist Peak)'],
            ['משך הטיפוס',     '3–4 ימים הלוך-חזור'],
            ['נקודת כניסה',    'Momella Gate, Arusha NP'],
            ['קושי',           'בינוני-גבוה — צריך כושר טוב'],
            ['מחנות דרך',      "Miriakamba Hut (2,514 מ') → Saddle Hut (3,570 מ')"],
            ['ליווי חובה',     'מדריך + גן לאומי — חייב ע"פ חוק'],
            ['עלות משוערת',    '$400–700 לאדם כל כלול'],
            ['עונה מומלצת',    'ינואר–פברואר, יולי–ספטמבר'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60 text-left">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <p>
        הלילה לפני הפסגה ישנים ב-Saddle Hut בגובה 3,570 מ'. עוברים
        שם מהר גם לעלות לפסגה הקטנה של <strong>Little Meru (3,801 מ')</strong>
        לפני השקיעה — ומשם רואים לראשונה את קילימנג'רו ממש ממול,
        את הקרחון הלבן שלו בשמיים. זה הרגע שמבינים לאן הולכים הלאה.
      </p>
      <p>
        יצאתי לפסגה ב-01:30 בלילה עם הפנס. 995 מטר עלייה בחושך, על
        אדמת לבה שמחליקה תחת הרגליים, עם רוח קרה שנכנסת לכל חור
        בשכבות. עלינו לפסגה בשעה 6:00, ממש עם הזריחה. קילימנג'רו
        ממול נצבע כתום-ורוד. לא היה לי מה להגיד.
      </p>

      <blockquote className="post-quote">
        "מרו לימד אותי שהגוף יכול יותר ממה שהמוח מאמין.
        קילימנג'רו אחר כך הוכיח את זה עוד פעם."
      </blockquote>

      {/* ── קילימנג'רו ────────────────────────────────────── */}
      <h2 className="post-h2">קילימנג'רו — גג אפריקה, 5,895 מטר</h2>
      <p>
        קילימנג'רו הוא <strong>ההר הגבוה ביותר באפריקה</strong> — וההר
        הגבוה ביותר בעולם שניתן לטפס עליו בלי ציוד טיפוס. זה לא אומר
        שהוא קל. זה אומר שמי שמוכן גופנית ומנטלית — יכול לעמוד על
        הפסגה. ואנחנו הלכנו על <strong>מסלול מאצ'אמה</strong> (Machame Route)
        — "Whiskey Route" — שנחשב לאחד הציורי ביותר ועם שיעור הצלחה
        גבוה יחסית.
      </p>

      <InlineImage
        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Kilimanjaro_Dec_2009_edit1.jpg"
        alt="קילימנג'רו"
        caption="הר הקילימנג'רו — 5,895 מטר מעל פני הים"
      />

      <InfoCard icon="🏔️" title="קילימנג'רו — נתוני הטיפוס שלנו">
        <ul className="space-y-2 text-sm">
          {[
            ['גובה פסגה (Uhuru Peak)', '5,895 מטר'],
            ['מסלול',                  'Machame (7 ימים)'],
            ['מרחק כולל',              '~62 ק"מ הלוך-חזור'],
            ['עלייה כוללת',            '~4,800 מטר'],
            ['שיעור הצלחה — 7 ימים',   '~85%'],
            ['גן לאומי',               'Kilimanjaro NP'],
            ['מדריך',                  'חובה על פי חוק'],
            ['עלות כוללת',             '$1,800–2,500 לאדם (הכל כלול)'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60 text-left">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <h2 className="post-h2">7 הימים — יום אחר יום</h2>

      <div className="my-4">
        <ClimbDay day={1}
          title="Machame Gate → Machame Camp"
          elevation="1,800 מ' → 2,835 מ'"
          distance="11 ק&quot;מ"
          desc="יום ראשון: מהשער דרך יערות גשם ירוקים ולחים. הרבה מים, עצים ענקיים, ועלווה. קל יחסית — רגל טובה, ראש בוחן. הגשם עוטף הכל."
        />
        <ClimbDay day={2}
          title="Machame Camp → Shira Camp"
          elevation="2,835 מ' → 3,850 מ'"
          distance="5 ק&quot;מ"
          desc="הנוף מתחלף — מיער לשיח פתוח, ועד מישור הר שירה הרחב. כבר מרגישים את הגובה. צעדים קצרים, נשימות עמוקות."
        />
        <ClimbDay day={3}
          title="Shira Camp → Lava Tower → Barranco Camp"
          elevation="3,850 מ' → 4,630 מ' → 3,976 מ'"
          distance="10 ק&quot;מ"
          desc="היום הקריטי — עולים ל-Lava Tower ב-4,630 מ' ואז יורדים לישון נמוך יותר. Climb high, sleep low — הנוסחה של הצלחה בגבהים."
        />
        <ClimbDay day={4}
          title="Barranco Camp → Karanga Camp"
          elevation="3,976 מ' → 4,035 מ'"
          distance="5 ק&quot;מ"
          desc="יום קצר אבל דרמטי — דרך Barranco Wall, קיר סלע של 300 מ' שמטפסים עליו בידיים וברגליים. לא מסוכן, אבל מרגש. הנוף מלמעלה — מוחץ."
        />
        <ClimbDay day={5}
          title="Karanga Camp → Barafu Camp"
          elevation="4,035 מ' → 4,673 מ'"
          distance="5 ק&quot;מ"
          desc="המחנה הסופי לפני הפסגה. מגיעים בצהריים, אוכלים, מנסים לישון קצת — ויוצאים לפסגה בחצות. השינה לא ממש מגיעה."
        />
        <ClimbDay day={6}
          title="לילה: Barafu → Uhuru Peak → Mweka Camp"
          elevation="4,673 מ' → 5,895 מ' → 3,100 מ'"
          distance="17 ק&quot;מ"
          desc="יוצאים ב-00:00. חמש שעות עלייה בחושך על שלג-אבן. עולים ל-Stellar Point ב-5,739 מ', ואחר כך עוד 45 דקות על הקרחון ל-Uhuru. ירידה ארוכה אחר כך — הברכיים שואלות שאלות."
        />
        <ClimbDay day={7}
          title="Mweka Camp → Mweka Gate"
          elevation="3,100 מ' → 1,640 מ'"
          distance="9 ק&quot;מ"
          desc="הרגל האחרונה. ירידה דרך יער הגשם שוב. הגוף מרגיש כמו אחרי שבוע של מאמץ (כי כן). בשער מחכה תעודה, חיוך של המדריך, ובירה קרה."
        />
      </div>

      <PhotoGrid images={[
        { src: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Kilimanjaro_Machame_route.jpg' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Kibo_from_shira.jpg' },
      ]} />

      <h2 className="post-h2">הלילה הגדול — הפסגה</h2>
      <p>
        יצאנו ב-00:15 מ-Barafu Camp. המדריך שלנו — <strong>Omary</strong>, עם 14
        שנות ניסיון על קילימנג'רו — הוביל בקצב מדוד כאילו הולך בגן.
        אנחנו מאחוריו, בתור, בדומייה מוחלטת. רק הפנסים, הנשימות, והאבנים
        שמחרקות תחת הנעליים.
      </p>
      <p>
        בגובה 5,200 מ' הרגשתי בפעם הראשונה את <strong>הגובה</strong> — לא
        כאב ראש, אבל כל צעד נהיה קצת יותר כבד. כל נשימה — קצת יותר
        עבודה. Omary הסתכל לאחור כל כמה דקות, שמר, לא הגיד הרבה.
        רק: <em>"Pole pole"</em>. לאט לאט. זאת כל הפילוסופיה.
      </p>
      <p>
        Stellar Point — 5,739 מ'. הזריחה תפסה אותנו ממש שם. השמיים
        הפכו מכחול עמוק לכתום לוהט. ומתחת לנו — ים של עננים לבנים
        שמכסה את אפריקה כולה. עמדנו שם כמה דקות ולא אמרנו כלום.
      </p>
      <p>
        ואז עוד 45 דקות לאורך שפת הקרחון — לבן מסמא, לא מציאותי —
        עד לשלט הצהוב: <strong>CONGRATULATIONS — UHURU PEAK, TANZANIA,
        5895m AMSL.</strong>
      </p>

      <blockquote className="post-quote">
        "עמדתי שם, ראיתי את הקרחון, את המישור הסגול שמתחת, ואת
        השמיים שכחולים כמו שהם רק בגבהים. לא הצלחתי לדבר כמה
        דקות. ואני לא בן אדם שבוכה בקלות."
      </blockquote>

      <InlineImage
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Kilimanjaro_Uhuru_Peak.JPG"
        alt="Uhuru Peak"
        caption="Uhuru Peak — 5,895 מטר. גג אפריקה."
      />

      {/* ── ספארי ─────────────────────────────────────────── */}
      <h2 className="post-h2">הספארי — כשהטלוויזיה לא מכינה אותך לאמת</h2>
      <p>
        ירדנו מהקילי ואחרי שני ימי מנוחה ב-Arusha — יצאנו לספארי.
        שלושה ימים: <strong>Tarangire National Park, Ngorongoro Crater,
        Serengeti National Park</strong>. עם ג'יפ, מדריך מקומי (Jackson),
        ואוהל שהוקם לנו כל ערב בלב השמורה.
      </p>

      <InfoCard icon="🦁" title="הספארי שלנו — 3 פארקים">
        <ul className="space-y-2 text-sm">
          {[
            ['יום 1 — Tarangire',  'פילים. המון פילים. עדרים שלמים שעוברים לידך כאילו אינך קיים'],
            ['יום 2 — Ngorongoro', 'קלדרת ענק של 20 ק"מ — בתוכה: אריות, קרנפים, נו, פלמינגו'],
            ['יום 3 — Serengeti',  'ה-Big Five כולם ביום אחד. עדר נו גדול. שמש ושקיעה'],
            ['לינה',               'Tented Camp בלב השמורה — שומעים אריות בלילה'],
            ['מדריך',              'Jackson — 12 שנים, יודע כל עקב ועשב'],
            ['מחיר',               '$350–550 לאדם ליום (all-inclusive + park fees)'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60 text-left max-w-[55%]">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <p>
        מה שהטלוויזיה לא מכינה אותך אליו: <strong>הקנה מידה</strong>.
        הסרנגטי הוא 14,750 קמ"ר — כמעט כמו ישראל כולה. כשרואים עדר נו
        של עשרים אלף ראש שעובר במרחק של מאה מטר ממך, זה לא סרטון
        של BBC. זה אוויר, קול, ריח. ועפר שעולה לשמיים.
      </p>

      <PhotoGrid images={[
        { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Serengeti_Plain.jpg' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/African_Bush_Elephant.jpg' },
      ]} />

      <p>
        ב-Ngorongoro ישבנו בג'יפ 20 דקות בגובה 5 מטר מ<strong>קרנף שחור</strong> —
        אחד מהנדירים ביותר בעולם, פחות מ-700 נותרו בטבע. הוא הסתכל עלינו
        כמה שניות, החליט שאנחנו לא מעניינים, וחזר לרעות.
      </p>
      <p>
        ואריות — ראינו 11 ביום אחד. לא ספרנו. הם פשוט היו שם, שכובים
        בצל האקציה, עם אותה אדישות מלכותית שאין בה ספק מי מנהל
        את המקום הזה.
      </p>

      <blockquote className="post-quote">
        "שאלתי את Jackson אחרי הספארי מה הדבר שהכי מפחיד אותו
        בשטח. הוא חשב רגע ואמר: כלום — אני בבית.
        זה הסביר הכל."
      </blockquote>

      {/* ── מידע מעשי ─────────────────────────────────────── */}
      <h2 className="post-h2">מידע מעשי — לפני שמזמינים</h2>

      <InfoCard icon="✈️" title="לוגיסטיקה — טנזניה מישראל">
        <ul className="space-y-2 text-sm">
          {[
            ['טיסה',         'ת"א → Kilimanjaro International Airport (JRO) — עם עצירה, ~10–12 שעות'],
            ['ויזה',         'נדרשת — eVisa באתר הממשלה, ~$50, 3 ימי עסקים'],
            ['עונה מומלצת', 'ינואר–מרץ, יוני–ספטמבר (יבש ומתאים לטיפוס)'],
            ['בסיס',         'Arusha — מרכז הכל (הרים + ספארי)'],
            ['מטבע',         'שילינג טנזני (TZS) — דולרים מתקבלים בכל מקום'],
            ['בריאות',       'חיסון צהב חובה. מלריה — נדרש טיפול מניעתי'],
            ['זמן מומלץ',   'לפחות 14 ימים: 4 מרו + 7 קילי + 3 ספארי'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60 text-left max-w-[58%]">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard icon="💰" title="עלויות — כמה זה עולה באמת">
        <ul className="space-y-2 text-sm">
          {[
            ['טיפוס מרו (4 ימים)',    '$400–700 לאדם כולל כל הצוות'],
            ['טיפוס קילי (7 ימים)',    '$1,800–2,500 לאדם (כולל מדריכים ונשאים)'],
            ['ספארי 3 ימים',          '$1,000–1,500 לאדם (all-inclusive)'],
            ['לינה ב-Arusha',         '$30–80 ללילה'],
            ['ביטוח — חובה',          'כולל evacuation — $80–150'],
            ['סה"כ ממוצע — 14 ימים',  '$3,500–5,000 לאדם כל כלול'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-orange-600 font-semibold text-sm text-left">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* ── טיפים ─────────────────────────────────────────── */}
      <h2 className="post-h2">8 טיפים שהייתי רוצה לדעת לפני</h2>

      <div className="space-y-3 my-5">
        <TipCard num={1} title="תעשו קודם מרו — לא תתחרטו"
          text="רוב האנשים מדלגים על מרו לטובת קילי. גדולה הטעות. מרו לא רק מכין גופנית — הוא נותן ביטחון, ניסיון בגובה, ומסלול יפה לפחות כמו הגדול. תקצו 4 ימים." />
        <TipCard num={2} title="7 ימים על קילי — לא 5"
          text="חברות מציעות מסלול 5 ימים? ממליץ לסרב. שיעור ההצלחה של 5 ימים הוא ~50%. 7 ימים (מסלול Machame) — ~85%. ההבדל הוא ימי אקלום. זה שווה כל דולר." />
        <TipCard num={3} title="בחרו את הסוכנות בקפידה"
          text="הרבה סוכנויות ב-Arusha שמוכרות זול ומקמצות על הצוות. שכר ראוי לנשאים ומדריכים זה לא בונוס — זה מוסר. חפשו חברות עם ביקורות ברורות ומדיניות תשר שקופה." />
        <TipCard num={4} title="Pole pole — זה לא בדיחה"
          text="לאט לאט בסוואהילי. הסיבה מספר אחת לכישלון בקילי היא עלייה מהירה מדי. אם המדריך אומר לך להאט — הוא יודע. תפסיקו להיות ישראלים לכמה שעות." />
        <TipCard num={5} title="ציוד חמימות — ברצינות"
          text="Uhuru Peak יכול להגיע ל-20 מעלות מינוס עם רוח. כפפות פנימיות וחיצוניות, מכנסיים תרמיים, שכבות מרובות. נעל הרים איטומת רוח — חובה, לא נעלי ריצה." />
        <TipCard num={6} title="טיפ לצוות — חלק מהחווייה"
          text="הנשאים, הטבחים, המדריכים — בני אדם שעובדים קשה ומרוויחים מעט. $200–250 לאדם מחולק לצוות זה הסטנדרט המוסרי." />
        <TipCard num={7} title="הספארי — אל תתפשרו על הלינה"
          text="Tented Camp בלב השמורה שונה מהותית ממלון מחוץ לשמורה. ישנים עם הקולות, יוצאים לפני שחר, רואים חיות בשעות שתיירי יום לא מגיעים אליהן." />
        <TipCard num={8} title="תביאו זמן מנוחה אחרי"
          text="לא תרצו לטוס ישר הביתה אחרי 7 ימי קילי. תקצו לפחות 2 ימים ב-Arusha — בשביל הגוף, בשביל השוק המקומי, ובשביל הנפש שצריכה לספוג את מה שקרה שם." />
      </div>

      {/* ── סיכום ─────────────────────────────────────────── */}
      <h2 className="post-h2">אז למה בכלל הולכים לטנזניה?</h2>
      <p>
        כי יש מקומות בעולם שלא מבינים אותם עד שעומדים בהם.
        אפשר לראות תמונות של קילימנג'רו, אפשר לצפות בספארי ב-4K —
        אבל האוויר הדליל בגובה 5,895 מ', הריח של האדמה הטרייה אחרי
        גשם בסרנגטי, ועיניים של אריה שמסתכל בך מרחק של עשרה מטר —
        אלה דברים שאי אפשר לייבא.
      </p>
      <p>
        טנזניה הייתה בשבילי הנסיעה שהוכיחה שהגוף יכול יותר מהמוח
        מאמין, שטבע של ממש עדיין קיים, ושיש עדיין מקומות בעולם
        שגורמים לך להרגיש קטן — במובן הכי טוב שיש.
      </p>

      <blockquote className="post-quote">
        "בחזרה בישראל, אנשים שאלו אם זה קשה. אמרתי — כן. שאלו
        אם שווה. אמרתי — אין לי מילה אחרת חוץ מ'כן'."
      </blockquote>

    </PostLayout>
  )
}
