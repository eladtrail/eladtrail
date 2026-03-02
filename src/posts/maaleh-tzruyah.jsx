import PostLayout, { InlineImage } from '../components/PostLayout'
import PhotoGrid from '../components/PhotoGrid'
import AnimatedSection from '../components/AnimatedSection'

const META = {
  title:    'מעלה צרויה — הנחל הנסתר של מדבר יהודה',
  category: '🇮🇱 ישראל',
  date:     'אפריל 2025',
  readTime: 16,
  image:    'https://res.cloudinary.com/dcenbexvc/image/upload/v1/EinGedi_1_rm1for.jpg',
  imageAlt: 'מעלה צרויה — מדבר יהודה',
}

// ── קיצורי URL ───────────────────────────────────────────────
const img = (id) => `https://res.cloudinary.com/dcenbexvc/image/upload/v1/${id}`
const vid = (id) => `https://res.cloudinary.com/dcenbexvc/video/upload/v1/${id}`

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

// ── נגן וידאו ────────────────────────────────────────────────
function VideoClip({ src, caption }) {
  return (
    <AnimatedSection y={20}>
      <figure className="my-8">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-orange-100 bg-black">
          <video src={src} controls playsInline
            className="w-full max-h-[520px] object-contain" preload="metadata" />
        </div>
        {caption && (
          <figcaption className="text-center text-sm text-dark/40 mt-2 italic">{caption}</figcaption>
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
                      flex items-center justify-center font-bold text-sm">{num}</div>
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
          <h3 className="font-display text-lg font-bold text-dark">מפת האזור — מעלה צרויה</h3>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-orange-100">
          <iframe
            title="מפת מעלה צרויה"
            src="https://www.openstreetmap.org/export/embed.html?bbox=35.3500%2C31.3800%2C35.4500%2C31.4700&layer=mapnik&marker=31.4200%2C35.3900"
            width="100%" height="420" style={{ border: 0, display: 'block' }} loading="lazy"
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-dark/60">
          {[
            { color: 'bg-orange-500', label: 'מעלה צרויה' },
            { color: 'bg-blue-500',   label: 'שמורת עין גדי (צפונה, ~5 ק"מ)' },
            { color: 'bg-red-400',    label: 'ים המלח' },
            { color: 'bg-green-500',  label: 'מצדה (דרומה, ~15 ק"מ)' },
          ].map(({ color, label }) => (
            <span key={label} className="flex items-center gap-1.5">
              <span className={`w-3 h-3 rounded-full ${color} inline-block`} />{label}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

// ════════════════════════════════════════════════════════════
export default function PostMaalehTzruyah() {
  return (
    <PostLayout meta={META}>

      {/* ── פתיחה ─────────────────────────────────────────── */}
      <p>
        יש מסלולים שמוצאים אותם בספר. ויש מסלולים שמוצאים אותם כי מישהו
        שאתה סומך עליו אמר: "תלך לשם". <strong>מעלה צרויה</strong> הוא
        מהסוג השני. נחל מדברי עמוק, כמעט לא מוזכר בבלוגי הטיולים הגדולים,
        ממש בלב מדבר יהודה — קילומטרים ספורים מעין גדי אבל עולם אחר לגמרי.
      </p>
      <p>
        בלי מפלי מים מפורסמים. בלי שלטי "כניסה לשמורה". בלי קופות כרטיסים.
        רק אתה, הצוקים, הצבעים האדומים-כתומים של הסלעים, ים המלח שמנצנץ
        למטה — ודממה שלמה שקשה למצוא אותה כל כך קרוב לתל אביב.
      </p>

      <VideoClip src={vid('EinGedi_1_zqen3e.mp4')} caption="מעלה צרויה — כך זה נראה מהשטח" />

      <PhotoGrid images={[
        { src: img('EinGedi_2_zz8jw3.jpg') },
        { src: img('EinGedi_3_s5c7qs.jpg') },
      ]} />

      {/* ── על המקום ──────────────────────────────────────── */}
      <h2 className="post-h2">מעלה צרויה — מה זה בעצם?</h2>
      <p>
        מעלה צרויה הוא נחל מדברי ומסלול עלייה בלב מדבר יהודה, ממוקם בין
        עין גדי לצפון לבין מצדה לדרום. המילה "מעלה" מציינת בדיוק את אופי
        המסלול — עלייה תלולה ומאתגרת מהמישור הנמוך ליד ים המלח לכיוון
        המצוק והרכסים שמעליו.
      </p>
      <p>
        הסלעים כאן הם גיר ואבן גופרית בגוונים של שמנת, כתום ואפור, מגולפים
        על ידי שחיקת גשמי חורף ורוחות שנים. בשעת בוקר מוקדמת, כשהאור נוגע
        בצוקים מהצד — הנחל פשוט נדלק.
      </p>

      <InfoCard icon="📍" title="מעלה צרויה — עובדות מהירות">
        <ul className="space-y-2 text-sm">
          {[
            ['מיקום',           'מדבר יהודה הדרומי, בין עין גדי למצדה'],
            ['גובה',            'מתחיל ~-400 מ\' (ים המלח) ועולה לכ-200+ מ\''],
            ['אורך מסלול',      '4–6 ק"מ הלוך-חזור (תלוי בנקודת סיום)'],
            ['זמן הליכה',       '3–4 שעות הלוך-חזור'],
            ['קושי',            'בינוני-קשה — עליות תלולות, סלע חלק'],
            ['כניסה',           'חינם — לא שמורה מוסדרת'],
            ['עונה מומלצת',     'אוקטובר–אפריל (בקיץ — מסוכן מאוד)'],
            ['מרחק מת"א',       '~2 שעות נסיעה (כ-145 ק"מ)'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60 text-left">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <PhotoGrid images={[
        { src: img('EinGedi_4_cz1qsy.jpg') },
        { src: img('EinGedi_5_nl2zur.jpg') },
        { src: img('EinGedi_6_ti3ckv.jpg') },
      ]} />

      {/* ── המסלול ────────────────────────────────────────── */}
      <h2 className="post-h2">המסלול — מהנחל אל המצוק</h2>
      <p>
        המסלול מתחיל ממטה — מהאזור הנמוך הסמוך לכביש 90 — ועולה בתוך הנחל
        לכיוון הרכסים. מהר מאוד מוצאים את עצמכם בין קירות סלע שצובעים
        כל כיוון בגוונים שונים. החמה נוגעת בחלק מהנחל רק בשעות מסוימות —
        וכשהיא כן, היא עוצרת נשימה.
      </p>

      <InlineImage
        src={img('EinGedi_7_latrbl.jpg')}
        alt="נחל — הדרך אל המעלה"
        caption="בתוך הנחל — הצוקים מקיפים אתכם מכל כיוון"
      />

      <VideoClip src={vid('EinGedi_2_cepzir.mp4')} caption="עלייה בתוך הנחל" />

      <PhotoGrid images={[
        { src: img('EinGedi_8_qibjvo.jpg') },
        { src: img('EinGedi_9_bosnd2.jpg') },
        { src: img('EinGedi_10_jcqwke.jpg') },
        { src: img('EinGedi_11_ddbvvj.jpg') },
      ]} />

      <blockquote className="post-quote">
        "בתוך הנחל הצוקים סוגרים עליך מכל כיוון — ואז פתאום יש פתח
        ואתה רואה את כל ים המלח. זה מה שרק ישראל יכולה לתת לך."
      </blockquote>

      <VideoClip src={vid('EinGedi_3_foauhd.mp4')} caption="המעלה — כך נראית העלייה" />

      {/* ── נוף מלמעלה ────────────────────────────────────── */}
      <h2 className="post-h2">הנוף מלמעלה — שווה כל מדרגה</h2>
      <p>
        כשמגיעים לחלק העליון של המסלול, פתאום נגמרים הצוקים שמשני
        הצדדים ומתגלה נוף 270 מעלות — ים המלח נראה כמו מראה עצומה
        שנשמטה לתוך השקע הגדול ביותר על פני כדור הארץ.
      </p>

      <InlineImage
        src={img('EinGedi_12_ondvzy.jpg')}
        alt="נוף מהמעלה"
        caption="מהחלק העליון — ים המלח ועבר הירדן"
      />

      <VideoClip src={vid('EinGedi_4_bin3hr.mp4')} caption="הנוף מלמעלה" />

      <PhotoGrid images={[
        { src: img('EinGedi_13_lilhdk.jpg') },
        { src: img('EinGedi_14_ossmbq.jpg') },
        { src: img('EinGedi_15_vexmgl.jpg') },
      ]} />

      {/* ── חיות הבר ──────────────────────────────────────── */}
      <h2 className="post-h2">חיות הבר — בעלי הבית האמיתיים</h2>
      <p>
        האזור הזה הוא שטח חיים של יעלים, שועלים, וציפורי מדבר נדירות.
        הסיכוי לראות יעלים כאן גבוה — הם לא מפחדים מהליכים, ולפעמים
        עוברים ממש לידך על הצוק כאילו אתה שם כדי לצפות בהם.
      </p>

      <InlineImage
        src={img('EinGedi_16_kjgxjl.jpg')}
        alt="יעלים בשטח"
        caption="יעלים — ממש לא עושים את עצמם מוטרדים"
      />

      <VideoClip src={vid('EinGedi_5_j1pbw9.mp4')} caption="פגישה עם יעלים בשטח" />

      <PhotoGrid images={[
        { src: img('EinGedi_17_phryah.jpg') },
        { src: img('EinGedi_18_yecxay.jpg') },
        { src: img('EinGedi_19_bjwqvg.jpg') },
      ]} />

      {/* ── עוד מהשטח ─────────────────────────────────────── */}
      <h2 className="post-h2">עוד מהשטח</h2>

      <VideoClip src={vid('EinGedi_6_rdd263.mp4')} caption="עוד רגעים מהשטח" />

      <PhotoGrid images={[
        { src: img('EinGedi_20_jhvyr8.jpg') },
        { src: img('EinGedi_21_rmpnoa.jpg') },
        { src: img('EinGedi_22_qx7gwl.jpg') },
        { src: img('EinGedi_23_trnxlj.jpg') },
      ]} />

      <PhotoGrid images={[
        { src: img('EinGedi_24_xiipbn.jpg') },
        { src: img('EinGedi_25_z4ipgg.jpg') },
        { src: img('EinGedi_26_ascj8a.jpg') },
        { src: img('EinGedi_27_uz0677.jpg') },
      ]} />

      <PhotoGrid images={[
        { src: img('EinGedi_28_yfqzq8.jpg') },
        { src: img('EinGedi_29_ddocnz.jpg') },
        { src: img('EinGedi_30_o3esgg.jpg') },
        { src: img('EinGedi_31_d5knuo.jpg') },
      ]} />

      <PhotoGrid images={[
        { src: img('EinGedi_32_sg1nvh.jpg') },
        { src: img('EinGedi_33_dstxcd.jpg') },
        { src: img('EinGedi_34_sznhza.jpg') },
        { src: img('EinGedi_35_hqjnbo.jpg') },
      ]} />

      {/* ── גלריה מלאה ────────────────────────────────────── */}
      <h2 className="post-h2">גלריה — כל הרגעים</h2>
      <p>
        למי שרוצה לראות את מלוא הטיול — כל התמונות מהשטח, כמות ופילטרים.
      </p>

      <PhotoGrid images={[
        { src: img('EinGedi_36_itajr4.jpg') },
        { src: img('EinGedi_37_czipth.jpg') },
        { src: img('EinGedi_38_e0huv7.jpg') },
        { src: img('EinGedi_39_qvktem.jpg') },
      ]} />

      <PhotoGrid images={[
        { src: img('EinGedi_40_vqkvjc.jpg') },
        { src: img('EinGedi_41_qq5gmd.jpg') },
        { src: img('EinGedi_42_fpyv6s.jpg') },
        { src: img('EinGedi_43_yy5rrw.jpg') },
      ]} />

      <PhotoGrid images={[
        { src: img('EinGedi_44_c8lm54.jpg') },
        { src: img('EinGedi_45_ikdvat.jpg') },
        { src: img('EinGedi_46_pow0xg.jpg') },
        { src: img('EinGedi_47_rccu1a.jpg') },
      ]} />

      <PhotoGrid images={[
        { src: img('EinGedi_48_arhyli.jpg') },
        { src: img('EinGedi_49_v8nzkd.jpg') },
        { src: img('EinGedi_50_ig1ivt.jpg') },
        { src: img('EinGedi_51_nyb2tb.jpg') },
      ]} />

      <PhotoGrid images={[
        { src: img('EinGedi_52_pc1euo.jpg') },
        { src: img('EinGedi_53_aytxea.jpg') },
        { src: img('EinGedi_54_olhcb5.jpg') },
        { src: img('EinGedi_55_uwlwn7.jpg') },
      ]} />

      <PhotoGrid images={[
        { src: img('EinGedi_56_axaq3z.jpg') },
        { src: img('EinGedi_57_rpytt8.jpg') },
        { src: img('EinGedi_6_ti3ckv.jpg') },
      ]} />

      {/* ── מפה ───────────────────────────────────────────── */}
      <h2 className="post-h2">מפת האזור</h2>
      <p>
        מעלה צרויה ממוקם לאורך כביש 90 בין עין גדי לצפון לבין אזור נחל
        צאלים ומצדה לדרום. אין שלט מסודר בכביש — משתמשים בוייז עם הכינוי
        "מעלה צרויה".
      </p>

      <TrailMap />

      {/* ── מידע מעשי ────────────────────────────────────── */}
      <h2 className="post-h2">מידע מעשי לפני שיוצאים</h2>

      <InfoCard icon="🕐" title="לוגיסטיקה ומידע שימושי">
        <ul className="space-y-2 text-sm">
          {[
            ['עונה מומלצת',       'אוקטובר–אפריל בלבד — בקיץ לא בטוח'],
            ['שעת יציאה',         'בוקר מוקדם — 07:00–08:00 לכל המאוחר'],
            ['כניסה',             'חינם — שטח פתוח, לא גן לאומי מוסדר'],
            ['חניה',              'ליד כביש 90 — חניה בצד הכביש'],
            ['מים',               'מינימום 3 ליטר לאדם גם בחורף'],
            ['ציוד',              'נעלי שטח עם אחיזה — חובה מוחלטת'],
            ['קושי',              'בינוני-גבוה — קטעי טיפוס על סלע חלק'],
            ['ילדים',             'מעל גיל 12 עם נסיון קודם בלבד'],
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
            ['ברכב',          'כביש 90 (ים המלח) — דרום לעין גדי כ-5 ק"מ'],
            ['מת"א',          '~1 שעה 45 דקות (כ-145 ק"מ)'],
            ['מירושלים',      '~55 דקות — כביש 1 → כביש 90 דרומה'],
            ['מבאר שבע',      '~1 שעה — כביש 25 → כביש 90 צפונה'],
            ['תחבורה ציבורית', 'קו 444 (ירושלים-אילת) עוצר בעין גדי — הליכה כ-20 דקות'],
          ].map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-orange-100 pb-1.5 last:border-0 flex-wrap gap-1">
              <span className="font-semibold text-dark">{k}</span>
              <span className="text-dark/60">{v}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* ── טיפים ─────────────────────────────────────────── */}
      <h2 className="post-h2">7 טיפים לפני שיוצאים למעלה צרויה</h2>

      <div className="space-y-3 my-5">
        <TipCard num={1} title="אל תבואו בקיץ — ברצינות"
          text="מדבר יהודה בקיץ הוא 42–46 מעלות ללא צל ובלי מים בנחל. מסלול כזה בתנאים אלה הוא לא אתגר — הוא סכנה אמיתית. חכו לחורף." />
        <TipCard num={2} title="נעלי שטח — לא אופציה"
          text="הסלעים באזור חלקים וחדים. כפכפים ונעלי ספורט רגילות לא מתאימים. נעל שטח עם סוליה מחוספסת ותמיכת קרסול — חובה." />
        <TipCard num={3} title="צאו בשניים לפחות"
          text="זה לא מסלול מוסדר עם פקחים וסיור. אם נפצעים — צריך מישהו להזעיק עזרה. לא להיכנס לבד לנחל מדברי לא מוכר." />
        <TipCard num={4} title="מים ואוכל — יותר ממה שמתכננים"
          text="3 ליטר לאדם גם בחורף. שקית אנרגיה, אגוזים, חטיפי אנרגיה — העלייה מכלה אנרגיה יותר מהר ממה שנדמה." />
        <TipCard num={5} title="שמרו על המסלול המסומן"
          text="אין הרבה שלטים — שמרו על וייז (ניווט לנקודה) או קובץ GPX שהורדתם מראש. מדבר יהודה עם כניסת חושך ובלי כיוון — לא מצב שרוצים להיות בו." />
        <TipCard num={6} title="לפצות את המסלול עם ים המלח"
          text="אחרי הירידה — ים המלח ממש ליד. הרחצה במים עם 34% מליחות היא החתימה המושלמת לכל מסלול מדברי." />
        <TipCard num={7} title="הודיעו על הכניסה"
          text="לפני שנכנסים — שלחו לאחד לבית הודעה עם שם המסלול, מספר המשתתפים ושעת היציאה. אם לא מתקשרים עד שעה X — לדווח למשטרה." />
      </div>

      {/* ── סיכום ─────────────────────────────────────────── */}
      <h2 className="post-h2">למה חוזרים?</h2>
      <p>
        כי מעלה צרויה מרגיש כמו גילוי. כשרוב האנשים נוסעים לעין גדי
        ועומדים בתור לשמורה — אתם יורדים קצת דרומה, מציבים את המכונית
        בצד הכביש, ומוצאים לעצמכם נוף שממש לא עמוס. זה מה שמסלולים
        כאלה עושים לך — מזכירים שישראל עדיין לא נגמרת.
      </p>

      <blockquote className="post-quote">
        "ירדנו מהמכונית, ראינו את פתח הנחל, והבנו שאנחנו הולכים להיות
        שם לבד לגמרי. שלוש שעות, בלי אף אדם אחר. בישראל. ב-2025.
        זה עדיין אפשרי."
      </blockquote>

    </PostLayout>
  )
}
