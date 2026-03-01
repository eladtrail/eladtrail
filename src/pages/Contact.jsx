// pages/Contact.jsx — עמוד צור קשר
export default function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="title-divider mx-auto mb-4" />
        <h1 className="section-title mb-4">צור קשר</h1>
        <p className="text-gray-500 mb-10">
          שאלה? שיתוף פעולה? סתם רוצה לדבר על טיולים? אני כאן 🌿
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:eladtrail@gmail.com"
            className="btn-primary text-base"
          >
            ✉️ שלח מייל
          </a>
          <a
            href="https://www.instagram.com/eladtrail/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-base"
            style={{ background: '#e1306c' }}
          >
            📸 DM באינסטגרם
          </a>
        </div>
      </div>
    </section>
  )
}
