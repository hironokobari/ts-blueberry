const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: [
    '@typescript-eslint',
    'only-warn',
    'unused-imports',
    'import',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['.*.js', 'node_modules/'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
      rules: {
        'unused-imports/no-unused-imports': 'warn',
        'prettier/prettier': ['error', { singleQuote: true, semi: true }],
      },
    },
  ],
};
