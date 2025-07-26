module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'text-primary',
    'border-primary',
    'bg-primary'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d6efd',
      }
    }
  },
  plugins: [],
}
