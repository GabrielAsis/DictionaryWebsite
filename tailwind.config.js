/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#49796B',
        darkGreen: '#013220',
        lightGreen: '#98BCB1',
      },
      fontFamily: {
        righteous: ['Righteous', 'sans-serif'],
        poppins: ['Poppins', 'serif'],
        inter: ['Inter', 'serif'],
        neuton: ['Neuton', 'serif']
      },
      backgroundImage: {
        'dictionary-pattern': "url('/src/assets/pattern background.png')"
        
      },
      backgroundSize: {
        'customSize': '2rem 2rem',
      },
    },
  },
  plugins: [],
}

