export default {
  head: {
    title: 'project-tz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },


  css: [
    '@/assets/css/default.css',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/mixins.scss',
      '~/assets/scss/variables.scss',
      '~/assets/scss/container.scss',
      '~/assets/scss/main.scss',
    ]
  },

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/style-resources'
  ],

  modules: [
    '@nuxtjs/toast',
  ],

  toast: {
    position: 'top-center',
    duration: '500',
    register: []
  },

  build: {
  }
}
