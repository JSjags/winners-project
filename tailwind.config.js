/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Inter", sans-serif',
        urbanist: '"Urbanist", sans-serif',
        manrope: '"Manrope", sans-serif',
      },
      backgroundImage: {
        abstract: "url(/login-graphic.svg)",
      },
      colors: {
        "dull-white": "#DADADA",
      },
    },
  },
  plugins: [],
};
