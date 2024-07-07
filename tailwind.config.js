/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        white: "#f1f5f9",
      },
      backgroundColor: {
        green: {
          600: "#398818",
          500: "#68B83A",
        },
      },
    },
  },
  plugins: [],
};
