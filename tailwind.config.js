/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
  ],
  // 다크모드 이용 시 필수
  darkMode: 'class',
  theme: {
      extend: {},
  },
  plugins: [],
}