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
      xs: ["10px", "13px"],
      s: ["12px", "15px"],
      m: ["14px", "18px"],
      l: ["16px", "20px"],
      xl: ["18px", "22px"],
      "2xl": ["22px", "26px"],
      "3xl": ["27px", "33px"],
      "4xl": ["33px", "41px"],
      "5xl": ["40px", "47px"],
      "6xl": ["47px", "54px"],
      "7xl": ["62px", "69px"]
    },
    fontFamily: {
      primary: ["LineFont"]
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
        'emoji-pattern': "linear-gradient(rgba(28, 30, 43, 0.9), rgba(28, 30, 43, 0.9)), url('assets/background/emoji_pattern.png')",
      }
    }
  },
  plugins: []
};
