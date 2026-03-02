import PostLayout, { InlineImage } from '../components/PostLayout'
import AnimatedSection from '../components/AnimatedSection'

const META = {
  title:    'עין גדי — גן עדן על שפת ים המלח',
  category: '🇮🇱 ישראל',
  date:     'אפריל 2025',
  readTime: 16,
  image:    'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_1_rm1for.jpg',
  imageAlt: 'עין גדי — מפלים, ירוק ומדבר',
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

// ── רשת תמונות ───────────────────────────────────────────────
function PhotoGrid({ images }) {
  const cols = images.length === 2 ? 'grid-cols-2'
             : images.length === 3 ? 'grid-cols-3'
             : 'grid-cols-2 md:grid-cols-4'
  return (
    <AnimatedSection y={20}>
      <div className={`grid ${cols} gap-2 my-8`}>
        {images.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md border border-orange-100 aspect-[4/3]">
            <img
              src={img.src}
              alt={img.alt || 'עין גדי'}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}

// ── נגן וידאו ────────────────────────────────────────────────
function VideoClip({ src, caption }) {
  return (
    <AnimatedSection y={20}>
      <figure className="my-8">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-orange-100 bg-black">
          <video
            src={src}
            controls
            playsInline
            className="w-full max-h-[520px] object-contain"
            preload="metadata"
          />
        </div>
        {caption && (
          <figcaption className="text-center text-sm text-dark/40 mt-2 italic">
            {caption}
          </figcaption>
        )}
      </figure>
    </AnimatedSection>
  )
}

// ── כרטיס טיפ ───────────────────────────────────────────────
function TipCard({ num, title, text }) {
  return (
    <div className="flex gap-4 bg-white border border-orange-100 rounded-xl p-5 shadow-sm">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-600 text-white
                      flex items-center justify-center font-bold text-sm">
        {num}
      </div>
      <div>
        <p className="font-bold text-dark mb-1">{title}</p>
        <p className="text-dark/60 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

// ── מפה ─────────────────────────────────────────────────────
function TrailMap() {
  return (
    <AnimatedSection y={24}>
      <div className="my-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🗺️</span>
          <h3 className="font-display text-lg font-bold text-dark">מפת האזור — עין גדי</h3>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-orange-100">
          <iframe
            title="מפת עין גדי"
            src="https://www.openstreetmap.org/export/embed.html?bbox=35.3450%2C31.4200%2C35.4250%2C31.5050&layer=mapnik&marker=31.4628%2C35.3818"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-dark/60">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
            שמורת עין גדי
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-orange-500 inline-block" />
            כניסה נחל דוד
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
            כניסה נחל ערוגות (3 ק"מ דרומה)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
            ים המלח — 10 דקות נסיעה
          </span>
        </div>
      </div>
    </AnimatedSection>
  )
}

// ════════════════════════════════════════════════════════════
export default function PostEinGedi() {
  return (
    <PostLayout meta={META}>

      {/* ── פתיחה ─────────────────────────────────────────── */}
      <p>
        אם יש מקום אחד בישראל שיכול לשנות את הדרך שאתם מסתכלים על הארץ הזאת —
        זה <strong>עין גדי</strong>. לא בגלל שהוא הגבוה ביותר, הקשה ביותר, או הארוך ביותר.
        אלא בגלל שאין עוד מקום בעולם שבו אתה עומד בין מפל מים קרים, מדבר שורף,
        ים המלח הנוצץ ויעלים שמסתכלים עליך כאילו אתה האורח.
      </p>
      <p>
        ביקרתי בעין גדי כבר שמונה פעמים. בעונות שונות, עם אנשים שונים. בכל פעם
        גיליתי משהו שלא הבחנתי בו קודם. הפוסט הזה הוא הסיכום המלא — מה לראות,
        מה לדעת, ומה לא להחמיץ.
      </p>

      <VideoClip
        src="https://res.cloudinary.com/dcenbexvc/video/upload/v1/EinGedi_1_zqen3e.mp4"
        caption="עין גדי — התחושה האמיתית"
      />

      <PhotoGrid images={[
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_2_zz8jw3.jpg', alt: 'עין גדי' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_3_s5c7qs.jpg', alt: 'עין גדי' },
      ]} />

      {/* ── על המקום ──────────────────────────────────────── */}
      <h2 className="post-h2">עין גדי — מה המקום הזה בעצם?</h2>
      <p>
        עין גדי היא אחת השמורות הגדולות ביותר בישראל — כ-14,000 דונם של טבע
        מדברי, נחלים ומפלים המשתרעים מהמדבר עד לשפת ים המלח. השם "עין גדי"
        פירושו "מעיין הגדי" — עדות לגדיי יעלים שנשתו מהמעיינות מאות שנים.
      </p>
      <p>
        <strong>קצת היסטוריה:</strong> כבר בתקופת המקרא שיחק האזור תפקיד
        מרכזי. המלך דוד הסתתר כאן מפני שאול בין הצוקים (שמואל א כ"ד).
        שיר השירים מזכיר את "כפר הכופר בכרמי עין גדי". מיד לאחר כיבוש
        יריחו על ידי יהושע — עין גדי כבר הייתה יישוב ידוע.
      </p>

      <InfoCard icon="📍" title="עין גדי — עובדות מהירות">
        <ul className="space-y-2 text-sm">
          {[
            ['מיקום',           'ים המלח, 88 ק"מ מירושלים, 213 מ\' מתחת לפני הים'],
            ['שטח השמורה',      '~14,000 דונם'],
            ['נחלים עיקריים',   'נחל דוד + נחל ערוגות (2 כניסות נפרדות)'],
            ['גובה מפל דוד',    '~15 מטר — הגבוה ביותר בשמורה'],
            ['חיות',            'יעלים, שפנים, נחש הצבע, עקביות, שלל ציפורים'],
            ['כניסה',           'גן לאומי — כרטיס תקף לשני הנחלים ביום אחד'],
            ['זמן הגעה',        '~1.5 שעות מת"א, ~45 דקות מבאר שבע, ~1.5 שעות מירושלים'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60 text-left">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <PhotoGrid images={[
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_4_cz1qsy.jpg', alt: 'עין גדי' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_5_nl2zur.jpg', alt: 'עין גדי' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_6_ti3ckv.jpg', alt: 'עין גדי' },
      ]} />

      {/* ── נחל דוד ───────────────────────────────────────── */}
      <h2 className="post-h2">נחל דוד — המסלול שכולם מכירים (ולא לחינם)</h2>
      <p>
        <strong>נחל דוד</strong> הוא מסלול הדגל של עין גדי. 3.5 ק"מ, ~2 שעות
        הלוך-חזור, דרגת קושי בינונית עם כמה קטעי טיפוס קצרים. אבל המספרים
        לא אומרים כלום — עד שאתם לא מרגישים את ההבדל בין החום המדברי לטמפרטורה
        שליד המפלים.
      </p>
      <p>
        המסלול עולה לאורך הנחל דרך עמקים צרים, בין צוקי גיר לבנים וצמחייה
        ירוקה עבותה. תוצאה של שילוב נדיר: מים קרים מהר, שמש מדברית,
        ולחות שיוצרת מיקרו-אקלים ייחודי.
      </p>

      <InlineImage
        src="https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_7_latrbl.jpg"
        alt="נחל דוד — הדרך אל המפלים"
        caption="הכניסה לנחל דוד — כבר בהתחלה מבינים למה כולם מדברים על המקום הזה"
      />

      <VideoClip
        src="https://res.cloudinary.com/dcenbexvc/video/upload/v1/EinGedi_2_cepzir.mp4"
        caption="נחל דוד — שיאי המסלול"
      />

      <p>
        <strong>מפל דוד</strong> — 15 מטר של מים צוניים שנופלים לתוך בריכת
        טבע ירוקה. בקיץ, כשהשמש עומדת על 40 מעלות בצל, הגעה לכאן מרגישה כמו
        חנייה בגן עדן. מותר לרחוץ בבריכה — ולעשות את זה.
      </p>
      <p>
        <strong>עין שולמית</strong> — מעיין נסתר ממש מעל המפל הגדול. המים יוצאים
        ישר מהסלע, קרים כמעט כמו קרח גם בשיא הקיץ. הגעה אליו דורשת קצת
        טיפוס — שווה כל מדרגה.
      </p>

      <PhotoGrid images={[
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_8_qibjvo.jpg',  alt: 'נחל דוד' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_9_bosnd2.jpg',  alt: 'נחל דוד' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_10_jcqwke.jpg', alt: 'נחל דוד' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_11_ddbvvj.jpg', alt: 'נחל דוד' },
      ]} />

      <blockquote className="post-quote">
        "שניים ושלושה שעות הליכה בנחל דוד, ואז אתה עולה לנקודת תצפית
        ורואה את כל ים המלח מתחתיך — זה אחד הרגעים הכי ישראליים שיש."
      </blockquote>

      <VideoClip
        src="https://res.cloudinary.com/dcenbexvc/video/upload/v1/EinGedi_3_foauhd.mp4"
        caption="מפל דוד — השיא של נחל דוד"
      />

      {/* ── נחל ערוגות ────────────────────────────────────── */}
      <h2 className="post-h2">נחל ערוגות — הנחל שפחות מכירים ויותר שווה</h2>
      <p>
        שלושה קילומטרים דרומה מכניסת נחל דוד נמצאת כניסה נפרדת לחלוטין —
        <strong> נחל ערוגות</strong>. פחות תיירים, יותר טבע, ובאמצע הנחל
        מוצאים את <strong>בריכת אגמית</strong> — בריכת מים עמוקה עם שיחיית
        אגמית (צמח מים נדיר) שמרשרשת ברוח.
      </p>
      <p>
        המסלול הסטנדרטי: 4–5 ק"מ הלוך-חזור, ~2.5–3 שעות. ניתן לשלב עם
        מסלול הגן הבוטני לסיבוב מלא. זהירות — הנחל יותר פתוח לשמש ממסלול דוד,
        ובקיץ צריך לצאת מוקדם.
      </p>

      <InlineImage
        src="https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_12_ondvzy.jpg"
        alt="נחל ערוגות"
        caption="נחל ערוגות — פחות עמוס מנחל דוד ואפילו יותר יפה"
      />

      <VideoClip
        src="https://res.cloudinary.com/dcenbexvc/video/upload/v1/EinGedi_4_bin3hr.mp4"
        caption="נחל ערוגות — בריכת אגמית"
      />

      <PhotoGrid images={[
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_13_lilhdk.jpg', alt: 'נחל ערוגות' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_14_ossmbq.jpg', alt: 'נחל ערוגות' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_15_vexmgl.jpg', alt: 'נחל ערוגות' },
      ]} />

      {/* ── חיות הבר ──────────────────────────────────────── */}
      <h2 className="post-h2">חיות הבר — הבמה הזאת לא רק שלנו</h2>
      <p>
        אחד הדברים שהכי מפתיע מבקרים חדשים בעין גדי: היעלים.
        הם לא מסתתרים. הם לא בורחים. הם פשוט יושבים על הסלעים
        ומסתכלים עליכם כאילו אתם בגן חיות — רק שהגן חיות הוא אתם.
      </p>
      <p>
        מדי שנה נולדים ביעלים עשרות גדיים בשמורה. באביב אפשר לראות
        גדיים בני שבועות עם אמהות — אחד הדברים הכי מרגשים שיש.
        חוץ מהיעלים, שפנים סלע (שקשה מאוד לא לאהוב), שלל ציפורים
        כולל עזניים ושחפי-ים, ובלילה — שועלים ועטלפים.
      </p>

      <InlineImage
        src="https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_16_kjgxjl.jpg"
        alt="יעלי עין גדי"
        caption="יעלים בעין גדי — בעלי הבית האמיתיים של השמורה"
      />

      <VideoClip
        src="https://res.cloudinary.com/dcenbexvc/video/upload/v1/EinGedi_5_j1pbw9.mp4"
        caption="יעלי עין גדי — פגישה מקרוב"
      />

      <PhotoGrid images={[
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_17_phryah.jpg', alt: 'חיות עין גדי' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_18_yecxay.jpg', alt: 'עין גדי' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_19_bjwqvg.jpg', alt: 'עין גדי' },
      ]} />

      {/* ── עוד מהשטח ─────────────────────────────────────── */}
      <h2 className="post-h2">עוד מהשטח — רגעים שלא נשכחים</h2>
      <p>
        עין גדי היא לא רק מסלולים. זה גם הלינה בקיבוץ עין גדי עם חצר
        ירוקה ובריכה שמוקפת בדקלים, ים המלח בשקיעה שצובע הכל בכתום-ורוד,
        ועמדות המלח הלבנות המוזרות שצוצות מהמים.
      </p>
      <p>
        המלון הבוטיק של קיבוץ עין גדי מציע חדרים ישר מול ים המלח.
        אם אי פעם תתפשרו על לינה יקרה יותר — תעשו את זה כאן.
        שקיעה מהמרפסת, עם ים המלח ומצדה ברקע — אין תמחור שיכסה את זה.
      </p>

      <VideoClip
        src="https://res.cloudinary.com/dcenbexvc/video/upload/v1/EinGedi_6_rdd263.mp4"
        caption="עין גדי — עוד רגעים מהשטח"
      />

      <PhotoGrid images={[
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_20_jhvyr8.jpg', alt: 'עין גדי' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_21_rmpnoa.jpg', alt: 'עין גדי' },
        { src: 'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_22_qx7gwl.jpg', alt: 'עין גדי' },
      ]} />

      {/* ── מפה ───────────────────────────────────────────── */}
      <h2 className="post-h2">מפת האזור</h2>
      <p>
        שני הנחלים הם כניסות נפרדות — כ-3 ק"מ ביניהן. ניתן לרכוש כרטיס
        כניסה ולהכנס לשניהם ביום אחד (מומלץ — להתחיל בנחל ערוגות בבוקר
        ולסיים בנחל דוד אחה"צ לפני הסגירה).
      </p>

      <TrailMap />

      {/* ── מידע מעשי ────────────────────────────────────── */}
      <h2 className="post-h2">מידע מעשי — לפני שיוצאים</h2>

      <InfoCard icon="🕐" title="שעות פתיחה ומחירים">
        <ul className="space-y-2 text-sm">
          {[
            ['שעות כניסה (קיץ)',   'ראשון-חמישי 08:00–17:00, שישי 08:00–16:00'],
            ['שעות כניסה (חורף)',  'ראשון-חמישי 08:00–16:00, שישי 08:00–15:00'],
            ['כניסה — מבוגר',      '~29 ₪ (כולל שני הנחלים ביום אחד)'],
            ['כניסה — ילד (5-18)', '~15 ₪'],
            ['חברי רשות הטבע',    'חינם'],
            ['חניה',               'חינם בשני האתרים'],
            ['כלבים',              'אסור — שמורת טבע'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard icon="🚗" title="איך מגיעים">
        <ul className="space-y-2 text-sm">
          {[
            ['ברכב',               'כביש 90 (ים המלח) — שלטים ל"שמורת עין גדי"'],
            ['מת"א',               '~1 שעה 40 דקות (כ-130 ק"מ)'],
            ['מירושלים',           '~50 דקות (כ-55 ק"מ) — כביש 1 → כביש 90'],
            ['מבאר שבע',           '~1 שעה (כ-85 ק"מ) — כביש 25 → כביש 90'],
            ['באוטובוס',           'קו 486 (דן) ו-384 (אגד) עוברים בעין גדי'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* ── טיפים ─────────────────────────────────────────── */}
      <h2 className="post-h2">8 טיפים שכל מי שהולך לעין גדי חייב לדעת</h2>

      <div className="space-y-3 my-5">
        <TipCard num={1} title="צאו מוקדם — הכי מוקדם שאפשר"
          text="בקיץ, עד 10:00 האזור עדיין נסבל. בצהריים הטמפרטורה עולה ל-40–45 מעלות בחלקים הפתוחים. בואו ב-08:00, עם פתיחה. תסיימו שני נחלים לפני 14:00." />
        <TipCard num={2} title="קנו כרטיס אחד — גישה לשני הנחלים"
          text="כרטיס הכניסה מאפשר כניסה לנחל דוד ולנחל ערוגות באותו יום. אל תחמיצו את ערוגות — הוא עמוס פחות ויפה לא פחות." />
        <TipCard num={3} title="מים — הרבה יותר ממה שאתם חושבים"
          text="מינימום 3 ליטר לאדם בקיץ. בחורף 2 ליטר. אין מים בתוך המסלולים מחוץ לנקודת הכניסה. התייבשות בשמורה מדברית היא אמיתית." />
        <TipCard num={4} title="נחל ערוגות — התחילו שם"
          text="רוב האנשים הולכים קודם לנחל דוד (כי הוא הראשון שרואים בכביש). המלצה: להתחיל בנחל ערוגות בבוקר קריר, ולסיים בנחל דוד אחר הצהריים לפני סגירה." />
        <TipCard num={5} title="נעלי שטח — לא כפכפים"
          text="ישנם קטעי טיפוס, סלעים רטובים ליד המפלים, ואדמה לא אחידה. כפכפי בריכה מסוכנים — לא ממולץ בשום צורה. נעל שטח קלה עם אחיזה — שזה בדיוק הציוד הנכון." />
        <TipCard num={6} title="אל תאכילו את החיות"
          text="הפקחים ממש מחמירים על זה — ובצדק. האכלת יעלים ושפנים פוגעת בבריאות שלהם ובהתנהגות הטבעית שלהם. תסתכלו, תצלמו, תהנו — לא תאכילו." />
        <TipCard num={7} title="שלבו עם ים המלח"
          text="חניית עין גדי ביץ' (חניה בתשלום, כ-10 קילומטר צפונה) נותנת גישה לים המלח. אחרי מסלול בנחל — ריחוף במלח הוא הסיום המושלם של היום." />
        <TipCard num={8} title="אל תדלגו על הגן הבוטני"
          text="קיבוץ עין גדי מפעיל גן בוטני ענק עם צמחים ממדינות 25. פחות מוזכר אבל ייחודי מאוד. כניסה בתשלום נפרד, ושווה לתושבים של הסביבה." />
      </div>

      {/* ── סיכום ─────────────────────────────────────────── */}
      <h2 className="post-h2">אחרי כל הביקורים — למה אני חוזר?</h2>
      <p>
        כי עין גדי לא משעממת. בכל עונה היא נראית אחרת — בחורף הנחלים
        גועשים, באביב כל צוק ירוק, בקיץ המים מרגישים כמו פרס על ההליכה,
        ובסתיו הקדם-גשמי יש ריח שאי אפשר להסביר — ריח של עץ ושל אדמה יבשה
        שעוד רגע תקבל גשם.
      </p>
      <p>
        עין גדי היא גם הוכחה חיה לאחת האמיתות הכי גדולות שישראל מלמדת אותי
        שוב ושוב: אין מה לחפש רחוק. הגן עדן הוא כאן.
      </p>

      <blockquote className="post-quote">
        "בנחל דוד, לאחר שעתיים בשמש, קפצתי לבריכת המפל.
        תשע שניות של קור שלא תיאמין — ואז שקט. רק הצלצול של מים
        וציפור אחת מרחוק. זה עין גדי."
      </blockquote>

    </PostLayout>
  )
}
