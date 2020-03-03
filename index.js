module.exports = {
  extends: [
    'standard',
    'plugin:vue/recommended',
    'plugin:unicorn/recommended',
    'plugin:varspacing/recommended',
  ],
  plugins      : ['unicorn', 'varspacing'],
  env          : { es6: true },
  parser       : 'vue-eslint-parser',
  parserOptions: { parser: 'babel-eslint', sourceType: 'module' },
  rules        : {
    'curly'                : ['error', 'multi-or-nest'],
    'array-element-newline': ['error', { multiline: true, minItems: 3 }],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems : 3,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline    : true,
          minProperties: 3,
        },
        ObjectPattern    : 'never',
        ImportDeclaration: 'never',
        ExportDeclaration: 'always',
      },
    ],
    'object-property-newline': 'error',
    'camelcase'              : 'warn',
    'comma-dangle'           : ['error', 'always-multiline'],
    'no-multi-spaces'        : [
      'error',
      {
        exceptions: {
          VariableDeclarator  : true,
          AssignmentExpression: true,
        },
      },
    ],
    'no-var'              : 'error',
    'prefer-template'     : 'error',
    'linebreak-style'     : 'off',
    'no-console'          : ['error', { allow: ['warn', 'error'] }],
    'prefer-const'        : ['error', { destructuring: 'all' }],
    'quote-props'         : ['error', 'consistent-as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing'         : [
      'error',
      {
        align: {
          beforeColon: false,
          afterColon : true,
          on         : 'colon',
        },
      },
    ],
    'arrow-parens'                         : ['error', 'always'],
    'operator-linebreak'                   : ['error', 'before'],
    'vue/require-default-prop'             : 'off',
    'vue/require-prop-types'               : 'off',
    'vue/prop-name-casing'                 : ['error', 'camelCase'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-closing-bracket-newline'     : [
      'error',
      {
        singleline: 'never',
        multiline : 'never',
      },
    ],
    'unicorn/catch-error-name'     : ['error', { name: 'error' }],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkProperties         : false,
        checkShorthandProperties: false,
        whitelist               : { getErrMsg: true },
      },
    ],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: { 'unicorn/filename-case': ['error', { case: 'pascalCase' }] },
    },
    {
      files: ['*.spec.js'],
      env  : { node: true, mocha: true },
      rules: { 'no-console': 'off' },
    },
    {
      files: ['pages/**/*.vue', 'layouts/**/*.vue'],
      rules: { 'unicorn/filename-case': ['error', { case: 'kebabCase' }] },
    },
  ],
}
