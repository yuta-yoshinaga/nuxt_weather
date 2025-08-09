export default defineNuxtConfig({
  // 開発ツールを有効化
  devtools: { enabled: true },

  // SPAモードの設定
  ssr: false,

  // CSS の設定
  css: ['@/assets/sass/style.scss'],

  // モジュールの設定
  modules: [
    '@pinia/nuxt',
  ],

  // アプリケーションの head タグ設定
  app: {
    head: {
      title: 'Weather App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js Weather App' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // APIプロキシや環境変数の設定 (必要に応じて)
  runtimeConfig: {
    public: {
      weatherApiBaseUrl: 'https://weather.tsukumijima.net'
    }
  }
})