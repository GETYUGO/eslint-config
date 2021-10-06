module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
    fetch: true,
    XMLHttpRequest: true,
    FormData: true,
  },
  parser: '@babel/eslint-parser',
  plugins: [
    'react',
    'react-hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.web.js', '.ios.js', '.android.js', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
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
    eqeqeq: [1, 'smart'],
    'import/extensions': [1, { js: 'never', ts: 'never' }],
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'hooks',
      ],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.ts', '.web.js', '.ios.tsx', '.android.tsx', '.tsx', '.js', '.jsx', '.json'],
          },
        },
        react: {
          version: 'detect',
        },    
      },
      rules: {
        'no-multi-spaces': [2, { ignoreEOLComments: true, exceptions: { VariableDeclarator: true } }],
        'no-console': 0,
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
        'padding-line-between-statements': [2, { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' }, { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }],
        'no-multiple-empty-lines': [2, { max: 1 }],
        'react/destructuring-assignment': 0,
        'no-bitwise': 0,
        'no-plusplus': 0,
        'jsx-a11y/accessible-emoji': 0,
        eqeqeq: [1, 'smart'],
        'import/extensions': [1, { js: 'never', ts: 'never' }],
        '@typescript-eslint/no-floating-promises': [1, { ignoreVoid: false }],
        '@typescript-eslint/no-namespace': 0,
        'react/prop-types': 0,
        '@typescript-eslint/restrict-template-expressions': [2, { allowBoolean: true, allowAny: true, allowNullish: true }],
        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
        'hooks/sort': [2, {
          groups: [
            'useSelector',
            'useState',
            'useDispatch',
            'useRef',
            'useNavigation',
            'useRoute',
            'usePrevious',
            'useMemo',
            'useEffect',
            'useCallback',
          ],
        }],
      },
    },
  ],
};
