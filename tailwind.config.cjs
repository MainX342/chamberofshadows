/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out both",
      },
      gridTemplateColumns: {
        header: "400px 1fr 400px",
        footer: "200px minmax(900px, 1fr) 100px",
      },
      fontFamily: {
        philosopher: ["Philosopher", "sans-serif"],
      },
      colors: {
        primary: { ...colors.stone, DEFAULT: colors.stone[900] },
        secondary: "#d0d0d0",
        hover: { ...colors.sky, DEFAULT: colors.sky[600] },
        assa: { ...colors.green, DEFAULT: colors.green[500] },
        outlaw: { ...colors.red, DEFAULT: colors.red[500] },
        sub: { ...colors.purple, DEFAULT: colors.purple[500] },
      },
      fontSize: {
        clamp_heading: "clamp(1rem, 10vw, 2rem)",
        clamp_text: "clamp(0.5em, 10vw, 0.6em)",
      },
      maxWidth: {
        clamp_content: "clamp(310px, 95%, 1024px)",
        clamp_menu: "clamp(140px, 20%, 290px)",
      },
      width: {
        clamp: "clamp(40px, 10vw, 60px)",
        menu: "clamp(210px, 19vw, 280px)",
      },
      height: {
        clamp: "clamp(40px, 10vw, 60px)",
        menu: "clamp(360px, 19.125rem, 540px)",
      },
      minHeight: {
        clamp: "clamp(306px, 19.125rem, 500px)",
      },
      screens: {
        desktop: "1800px",
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme("colors");
      for (const color in colors) {
        if (typeof colors[color] === "object") {
          const color1 = colors[color][500];
          const color2 = colors[color][700];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),
  ],
};
