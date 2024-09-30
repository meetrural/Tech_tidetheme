/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'images': "url('.assets/bg.jpg')"
    },
    colors: {
        'custom-red': '#D84B50',
        'custom-orange': '#E5634B',
      },
      fontFamily: {
        'gilroy': ['Gilroy'],
      },
  },
  
  plugins: [],
}


}
