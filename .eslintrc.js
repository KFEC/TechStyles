module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: [2, 2],
    'no-console': 0,
    'eol-last': 0,
    'no-multiple-empty-lines': 0,
    'react/function-component-definition': 0,
    'arrow-body-style': 0,
  },
};