import pkg from './package'

export default {
  mode: 'universal',
  router: {
    base: '/'
  },
  head: {
    title: 'Mia Salazar portfolio',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#CF3476' },
    ],
    link: [
      { rel:'apple-touch-icon',  href: 'touch-icon-ipad.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
      },
    ],
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  modules: [],
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
