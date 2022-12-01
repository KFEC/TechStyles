module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'indent': [2, 2],
    'no-console': false,
    'eol-last': false,
  },
};
