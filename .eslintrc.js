var webpack = require('./webpack.config.dev');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['react', 'jsx-a11y', 'flowtype', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    curly: 1,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 80,
        parser: 'flow',
      },
    ],
    'max-len': [
      2,
      120,
      {
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-confusing-arrow': 0,
    'react/prefer-stateless-function': 0,
    'flowtype/no-types-missing-file-annotation': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: webpack,
      },
    },
  },
};
