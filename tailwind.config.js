/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'isGray': '#5B6871', 
        'skyBlue': "#148ED7",
        'skyBlue10': "#9898F0",
        'skyBlue500': "#148ED7",
        'isSkyBlue50': "#E7F4FB",
        'isSkyBlue55': "#E8F4FB",
        'isSkyBlue100': "#D0E8F7",
        'isSkyBlue400': "#282873",
        'isSkyBlue500': "#0C0C54",
        'isSkyBlue550': "#148ED7",
        'isSkyBlue600': "#1072AC",
        'isDark300': "#5C5C5C",
        'isDark400': "#3F3F3F",
        'isDark500': "#212121",
        'isPurple150': "#E0E0FA",
        'isPurple300': "#C1C1F6",
        'isPurple400': "#ADADF3",
      }
    },
  },
  plugins: [],
}
