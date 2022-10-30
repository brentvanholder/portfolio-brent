module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif']
      },
      keyframes: {
        nav: {
          '100%': { backgroundColor: 'rgb(255, 255, 255, 1)', opacity: '100' },
          '0%': {
            backgroundColor: 'rgb(255, 255, 255, 0)', opacity: '0'
          }
        },
        textEffect: {
          '0%': { transform: 'translate3d(0px, 30px, 0px)', opacity: '0' },
          '100%': { transform: 'translate3d(0px, 0px, 0px)', opacity: '100' }
        },
        imageEffect: {
          '0%': { transform: 'translate3d(0px, 120px, 0px)', opacity: '0' },
          '100%': { transform: 'translate3d(0px, 0, 0px)', opacity: '100' }
        }
      },
      animation: {
        'navScroll': 'nav 3s',
        'textFirst': 'textEffect 1s',
        'textSecond': 'textEffect 1.5s',
        'textThird': 'textEffect 2s',
        'translateImage': 'imageEffect 1s'
      }
    },
  },
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]
}
