module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript'
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'no-multi-spaces': [2, { ignoreEOLComments: true, exceptions: { VariableDeclarator: true } }],
    'import/no-dynamic-require': 0,
    'no-console': 0,
    'no-use-before-define': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'padding-line-between-statements': [2, { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' }, { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }],
    'no-multiple-empty-lines': [2, { max: 1 }],
    'react/destructuring-assignment': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    'jsx-a11y/accessible-emoji': 0,
    'eqeqeq': [1, 'smart'],
    'import/extensions': [1, { js: 'never', ts: 'never' }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function', unamedComponents: '' }],
    'import/no-relative-packages': 0,
    'function-paren-newline': 0,
  },
  overrides: [
    {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
  ],
};
