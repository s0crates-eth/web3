module.exports = {
  parserOptions: {
    'sourceType': 'script',
    'ecmaVersion': 2017,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'impliedStrict': true,
      'modules': true,
      'blockBindings': true,
      'arrowFunctions': true,
      'objectLiteralShorthandMethods': true,
      'objectLiteralShorthandProperties': true,
      'templateStrings': true,
      'classes': true,
    },
  },

  globals: {
    'web3': 'readonly',
    'ethereum': 'readonly',
  },

  env: {
    'browser': true,
  },

  plugins: [
    'json',
  ],

  extends: [
    '@metamask/eslint-config',
    '@metamask/eslint-config/config/nodejs',
  ],

  overrides: [{
    'files': ['src/index.js'],
    'parserOptions': {
      'sourceType': 'module',
    },
  }],

  globals: {
    'web3': true,
    'ethereum': true,
  },
}
