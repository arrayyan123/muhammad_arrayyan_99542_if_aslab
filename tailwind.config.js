import defaultTheme from 'tailwindcss/defaultTheme';
const withMT = require("@material-tailwind/react/utils/withMT");
import forms from '@tailwindcss/forms';
import tailwindcssMotion from "tailwindcss-motion";

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms,
        tailwindcssMotion,
        require('@tailwindcss/typography'),
    ],
});
