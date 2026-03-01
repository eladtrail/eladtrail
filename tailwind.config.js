/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ===== פלטת הצבעים של EladTrail =====
        orange: {
          50:  '#fff7ed',
          100: '#ffedd5',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea6b0a',  // כתום ראשי
          700: '#c2540a',
        },
        israel: {
          blue:  '#0038b8',   // כחול דגל ישראל
          light: '#4d7fd4',   // כחול בהיר
        },
        cream:  '#fffbf5',    // רקע ראשי
        warm:   '#fdf3e7',    // רקע משני
        earth:  '#8B4513',    // חום אדמה
        dark:   '#1a0f00',    // כהה ראשי
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['Heebo', 'sans-serif'],
      },
      backgroundImage: {
        'israel-gradient': 'linear-gradient(135deg, #0038b8 0%, #ffffff 50%, #0038b8 100%)',
      },
    },
  },
  plugins: [],
}
