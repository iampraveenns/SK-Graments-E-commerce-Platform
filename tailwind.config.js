/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // customBg: "#f5f5f5",
        // primary: "purple",
        // secondary: "pink",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#570df8",
          "secondary": "#f000b8",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#f5f5f5", // 👈 background color
        },
      },
    ],
  },
}

