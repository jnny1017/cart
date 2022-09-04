module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading":"off",
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'max-len': ['error', { code: 120 }],
    "no-param-reassign": ["error", { "props": false }],
    "@typescript-eslint/naming-convention": "off"
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
