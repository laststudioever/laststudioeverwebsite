export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Last Studio Ever',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My name is Usama Ahmed Siddiquie. This site is a database of my procedural artwork.' },
      { name: 'format-detection', content: 'telephone=no' },

      // Open Graph
      { property:'og:url', content: 'https://colatz.com/' },
      { property:'og:type', content: 'website' },
      { property:'og:title', content: 'Colatz | Database for Usama Ahmed' },
      { property:'og:description', content: 'My name is Usama Ahmed Siddiquie. This site is a database of my procedural artwork.' },
      { property:'og:image', content: 'https://colatz.com/link-share-banner.png' },
      { property:'og:image:alt', content: 'https://colatz.com/link-share-banner.png' },
      { property:'og:image:secure_url', content: 'https://colatz.com/link-share-banner.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon-round-32.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
  }
}
