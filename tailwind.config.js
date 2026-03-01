/** @type {import('tailwindcss').Config} */
export default {
  // אמר ל-Tailwind לסרוק את כל קבצי ה-JSX שלנו
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ==== צבעי המותג של אלעד ====
      // שנה כאן כדי לעדכן את הצבעים בכל האתר
      colors: {
        forest: {
          dark:   '#1a2e1a',   // ירוק כהה – רקע Header
          mid:    '#2d5016',   // ירוק בינוני
          accent: '#6aaa2a',   // ירוק בהיר – כפתורים, הדגשות
        },
        sand:  '#e8d5a3',      // חול – טקסט על רקע כהה
        cream: '#faf6ef',      // שמנת – רקע ראשי
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],  // כותרות
        body:    ['Heebo', 'sans-serif'],           // טקסט רגיל
      },
    },
  },
  plugins: [],
}
