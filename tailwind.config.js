/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        zx7speakbg: "url('/home/desktop/image-speaker-zx7.jpg')",
      },
      container: {
        center: true,
        screens: {
          DEFAULT: "1440px",
        },
      },
    },
    plugins: [],
  },
};
