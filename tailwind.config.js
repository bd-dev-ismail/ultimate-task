/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        ultimateTheme: {
          primary: "#1678CB",

          secondary: "#3B8BEA",

          accent: "#68D6F5",

          neutral: "#242424",

          "base-100": "#FFFFFF",
          grayy: "#767676",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
