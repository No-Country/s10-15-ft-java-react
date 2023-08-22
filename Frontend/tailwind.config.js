/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2969E3", //primary color
          "primary-focus": "#1e40af", //focused primary color
          "secondary": "#FEA50A", //secondary color
          "neutral": "#2A2A2A", //fonts
          "base-100": "#F4F7FF", //base color
          "base-content": "#E3E3E3"  //content color to use on base color
        }
      }
    ],
  },
  plugins: [require("daisyui")],
}

