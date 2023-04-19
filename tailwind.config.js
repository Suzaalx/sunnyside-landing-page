/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow", "serif"],
        Franunces: ["Franunces"],
      },

      colors: {
        // Primary
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "graphic-design-blue": "hsl(167, 40%, 24%)",
        "photography-blue": "hsl(198, 62%, 26%)",
        "footer-blue": "hsl(168, 34%, 41%)",

        // Neutral
        "very-dark-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
      },
      gridTemplateAreas: {
        desktop: ["one", "two", "three", "four", "five", "six"],
        
      },
    },

    plugins: [],
  },
};
