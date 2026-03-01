// pages/About.jsx — עמוד אודות
export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="title-divider" />
        <h1 className="section-title mb-6">אודות אלעד</h1>

        {/* ← שנה את ה-src לתמונה של אלעד */}
        <img
          src="https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?w=800&q=80"
          alt="אלעד דויטש"
          className="w-full h-72 object-cover rounded-2xl shadow-lg mb-8"
        />

        {/* ===== תוכן — ערוך כאן את הטקסט ===== */}
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-5">
          <p>
            היי, אני אלעד דויטש — ג'ינג'י מקריית מוצקין שמצא את עצמו הולך על שבילים
            כשאחרים ישבו מול הטלוויזיה.
          </p>
          <p>
            {/* הוסף כאן את הסיפור של אלעד */}
            הבלוג הזה נולד מתוך צורך פשוט: רציתי לתעד את הטיולים שלי בצורה אמיתית,
            בלי פילטרים ובלי שקרים.
          </p>
          <p>
            אתה תמצא כאן מסלולים מפורטים, ציוד שאני ממש משתמש בו, וטיפים שלמדתי
            הדרך הקשה.
          </p>
        </div>
      </div>
    </section>
  )
}
