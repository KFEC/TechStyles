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
    'jest',
  ],
  rules: {
    indent: [2, 2],
    'no-console': 0,
    'eol-last': 0,
    'no-multiple-empty-lines': 0,
    'react/function-component-definition': 0,
    'arrow-body-style': 0,
    'import/extensions': 0,
    'no-confusing-arrow': 0,
    'arrow-parens': 0,
    'padded-blocks': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-param-reassign': 0,
  },
};