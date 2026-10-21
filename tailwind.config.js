/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                gold: {
                    50: '#fbf8ec',
                    100: '#f5edd0',
                    200: '#ebdba1',
                    300: '#e1c972',
                    400: '#d7b743',
                    500: '#c9a52d',
                    600: '#a88624',
                    700: '#87681b',
                    800: '#664a12',
                    900: '#452c09',
                },
                dark: {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#333333',
                    900: '#1a1a1a',
                }
            },
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                inter: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
} 