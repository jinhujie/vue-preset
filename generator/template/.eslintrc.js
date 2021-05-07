// .eslintrc.js
module.exports = {
  extends: [
    // 'plugin:vue/recommended',
    'plugin:vue/vue3-recommended',
    // "plugin:prettier/recommended"
  ],
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // "prettier/prettier": [
    //   "error",
    //   {
    //     "endOfLine": "auto"
    //   }
    // ]
  },
}