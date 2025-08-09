module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    // 必要に応じてルールを追加
  }
}