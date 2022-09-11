/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        // pages, components 폴더 안에 있는 파일들에 tailwindCSS를 적용
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // 다크모드 이용 시s
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [],
};
