/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "rgba(255, 255, 255, 0.08) 0 0 0px 30px,rgba(255, 255, 255, 0.06) 0 0 0px 60px,rgba(255, 255, 255, 0.04) 0 0 0px 90px",
      },
      backgroundSize: {
        loading: "100% 100%",
      },
    },
  },
  plugins: [],
};
