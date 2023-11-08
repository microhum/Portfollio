/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    colors: {
      current: "currentColor",
      background1: "#060606",
      background2: "#0c0c0e",
      color1: "#edebe8",
      color2: "#999999",
      gray: "#cccccc",
      primary: "#FF5733",
      border1: "#333333"
    },
    fontSize: {
      xs: ["12px", "15px"],
      s: ["14px", "17px"],
      m: ["16px", "20px"],
      l: ["18px", "22px"],
      xl: ["20px", "24px"],
      "2xl": ["24px", "28px"],
      "3xl": ["29px", "35px"],
      "4xl": ["35px", "43px"],
      "5xl": ["42px", "49px"],
      "6xl": ["49px", "56px"],
      "7xl": ["64px", "71px"]
    },
    fontFamily: {
      primary: ["-apple-system", "BlinkMacSystemFont", "Inter", "Helvetica", "Arial", "sans-serif"]
    },
    extend: {
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5"
      },
      backgroundImage: {
        'emoji-pattern': "linear-gradient(rgba(28, 30, 43, 0.8), rgba(28, 30, 43, 0.8)), url('assets/background/emoji_pattern.png')",
      }
    }
  },
  plugins: []
};
