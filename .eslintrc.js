module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/base'],
  extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/base'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'standard/no-callback-literal': 0,
    'vue/attribute-hyphenation': 0,
  },
}
