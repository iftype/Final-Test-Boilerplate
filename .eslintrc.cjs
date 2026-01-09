module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },

  ignorePatterns: ['package*', '.npmrc', '*.md', '.*', '__tests__'],

  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'no-undef': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'off',
    'no-process-exit': 'warn',

    'arrow-body-style': 'off',

    'max-depth': ['warn', 2],
    'max-lines-per-function': ['warn', { max: 25, skipBlankLines: true, skipComments: true }],
    complexity: ['warn', 7],
    'class-methods-use-this': 'off',

    'no-await-in-loop': 'off',
    'no-else-return': 'warn',
    'no-nested-ternary': 'error',
    'no-ternary': 'warn',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['acc', 'e'] }],
    'no-plusplus': 'off',

    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
  },
};
