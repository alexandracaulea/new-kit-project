module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'function-paren-newline': 0,
    'linebreak-style': ['error', 'windows'],
    'jsx-quotes': ['error', 'prefer-double'],
  },
};
