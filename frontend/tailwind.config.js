/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-brown": "#a26b39",
        "custom-tan": "#f5ca78",
      },
    },
  },
  plugins: [require("daisyui")],
};
