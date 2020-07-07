module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:vue/recommended', 'prettier', 'prettier/vue'],
  plugins: [],
  // add your custom rules here
  rules: {
    // Only allow debugger in development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // Only allow `console.log` in development
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
  },
}
