/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {


    fontFamily: {
      "anuphan": ['Anuphan', 'sans-serif'],
      "chivo-mono": ['Chivo Mono', 'monospace'],
      "fraunces": ['Fraunces', 'serif'],
      "barlow": ['Barlow', 'serif'],
    },


    extend: {
      
      colors: {
        // Primary
        background: "hsl(51, 100%, 49%, 0.1)",
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%, 0.5)",
        "graphic-design-blue": "hsl(167, 40%, 24%)",
        "photography-blue": "hsl(198, 62%, 26%)",
        "footer-blue": "hsl(168, 34%, 41%)",
        "footer-bg": "#91D4C7",
        "footer-text": "rgba(129, 132, 152, 1)",
        // Neutral
        "very-dark-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
      },
      
    },

    plugins: [],
  },
};
