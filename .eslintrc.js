module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'module-resolver'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['off', 'single'],
    semi: ['error', 'always'],
    'no-empty-function': 'off',
    'no-console': 'off',
    'react-native/no-inline-styles': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'always',
    'module-resolver/use-alias': 2,
  },
};
