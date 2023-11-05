/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#1dbb90",
            secondary: "#1eaace",
         },
      },
   },
   plugins: [],
};
