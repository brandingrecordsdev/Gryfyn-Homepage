/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        //12.6 15
        "mobile": 'calc(15px - ( (100vw - 700px) * 0.004615) )',
      },
      fontFamily: {
        'title': ['Neue Metana'],
        'body': ['Basier Circle'],        
      },        
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'body': '#E3DDD4',
      },        
    },
    screens: {
      "tablet-above": {"min": "1101px"},
      'tablet-below': {'max': '1100px'},
      'mobile-below': {'max': '700px'},
      
    }      
  },
  plugins: [],
}