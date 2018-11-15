module.exports = {
  extends: [
    'standard',
    'plugin:vue/strongly-recommended',
    'plugin:unicorn/recommended',
    'plugin:varspacing/recommended',
  ],
  plugins: ['unicorn', 'varspacing'],
  env    : { es6: true },
  rules  : {
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
    'no-console'          : ['error', { allow: ['warn', 'error'] }],
    'prefer-const'        : ['error', { destructuring: 'all' }],
    'quote-props'         : ['error', 'consistent-as-needed'],
    'prefer-template'     : 'error',
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style'     : 'off',
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
    'arrow-parens'            : ['error', 'always'],
    'operator-linebreak'      : ['error', 'before'],
    'vue/require-default-prop': 'off',
    'vue/require-prop-types'  : 'off',
    'vue/prop-name-casing'    : ['error', 'camelCase'],
    'unicorn/catch-error-name': ['error', { name: 'err' }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: { 'unicorn/filename-case': ['error', { case: 'pascalCase' }] },
    },
    {
      files: ['*.spec.js'],
      env  : { node: true },
      rules: { 'no-console': 'off' },
    },
  ],
}
