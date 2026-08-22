/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wt-blue': '#2B4EF0',
        'wt-blue-bright': '#1E9BFA',
        'wt-blue-deep': '#0A1445',
        'wt-blue-soft': '#EAF0FF',
        'wt-gold': '#F5B301',
        'wt-white': '#FFFFFF',
        'wt-off-white': '#F7F9FF',
        'wt-gray-text': '#5A6285',
        'wt-red-soft': '#FBEAEA',
        'wt-green-soft': '#E7F7EE',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(90deg, #2B4EF0, #1E9BFA)',
        'gradient-headline': 'linear-gradient(90deg, #1E9BFA, #2B4EF0 60%, #0A1445)',
      },
      boxShadow: {
        card: '0 2px 8px rgba(10,20,69,0.06), 0 12px 32px rgba(10,20,69,0.08)',
      },
      borderRadius: {
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}
