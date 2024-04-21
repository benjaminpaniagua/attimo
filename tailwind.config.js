/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins, Arial, sans-serif'
      },
      fontSize: {
        'fs-xlarge': '2.25rem', //36px
        'fs-large': '1.5rem', //24px
        'fs-med': '1.25rem', //20px
        'fs-normal': '1rem', //16px
        'fs-small': '0.875rem', //14px
        'fs-xsmall': '0.75rem' //12px
      },
      fontWeight: {
        'semibold': '600'
      },
      colors:{
        //Light Mode
        'clr-blue': 'hsla(230, 37%, 33%, 1)',
        'clr-dark-blue': 'hsla(230, 27%, 22%, 1)',

        'clr-light-gray': 'hsla(240, 11%, 66%, 1)',
        'clr-dark-gray': 'hsla(245, 11%, 43%, 1)',

        'clr-light-green': 'hsla(172, 100%, 86%, 1) ',
        'clr-dark-green': 'hsla(173, 63%, 28%, 1)',

        'clr-light-pink': 'hsla(328, 100%, 94%, 1)',
        'clr-dark-pink': 'hsla(331, 48%, 44%, 1)',
        
        'clr-light-bg': 'hsla(331, 48%, 44%, 1)',
        'clr-light-secondary-bg': 'hsla(245, 38%, 87%, 1)',
        'clr-white': 'hsla(0, 0%, 100%, 1)',
      },
      gridTemplateColumns: {
        'auto-150': 'repeat(auto-fit, minmax(150px, 1fr))',
        'auto-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-350': 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}

