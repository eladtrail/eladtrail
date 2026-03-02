import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  return (
    <section className="py-20 px-6">
      <AnimatedSection y={24}>
        <div className="max-w-xl mx-auto text-center">
          <div className="title-divider mx-auto mb-4" />
          <h1 className="section-title mb-4">צור קשר</h1>
          <p className="text-gray-500 mb-10">
            שאלה? שיתוף פעולה? סתם רוצה לדבר על טיולים? אני כאן 🌿
          </p>

          <div className="flex flex-col gap-4">
            <motion.a
              href="mailto:eladtrail@gmail.com"
              className="btn-primary text-base"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              ✉️ שלח מייל
            </motion.a>
            <motion.a
              href="https://www.instagram.com/eladtrail/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-base"
              style={{ background: '#e1306c' }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              📸 DM באינסטגרם
            </motion.a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
