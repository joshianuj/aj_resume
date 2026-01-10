/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#F9F7F2',
                sidebar: '#2D1B1B', // Deep maroon/brown from reference
                accent: {
                    DEFAULT: '#3B82F6',
                    dark: '#1D4ED8',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
