module.exports = {
  root: true,
  parser: 'babel-parser',
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'error',
  },
};
