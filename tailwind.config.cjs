/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          50: "#DEDBFF",
          100: "#B8B3FF",
          200: "#756BFF",
          300: "#2E1FFF",
          400: "#0E00D1",
          500: "#090088",
          600: "#07006B",
          700: "#050052",
          800: "#040038",
          900: "#020019",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
