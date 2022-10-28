module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '100' }
        },
        fadeOut: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '100' }
        },
      },
      animation: {
        'fadein2': 'fadeIn 2s',
        'fadein3': 'fadeIn 2.1s',
        'fadein5': 'fadeIn 2.2s',
        'fadeOut2': 'fadeOut 1.2s',
        'fadeOut3': 'fadeOut 1.3s',
        'fadeOut5': 'fadeOut 1.4s'
      },
    },
  },
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]
}
