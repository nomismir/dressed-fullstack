/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
        './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FE6B3A',
            },
            fontFamily: {
                play: ['Play', 'sans-serif'],
            },
        },
    },
    plugins: [require('daisyui')],
};
