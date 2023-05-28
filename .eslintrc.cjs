module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    soureType: 'module'
  },
  plugins: ['react', '@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/no-unused-vars": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-newline": [2, { "prevent": true, "allowMultilines": true }],
    "react/jsx-indent": [2, 'tab', { checkAttributes: true, indentLogicalExpressions: true }],
  },
  // 针对eslint-plugin-react的配置，详见：https://github.com/yannickcr/eslint-plugin-react#configuration
  settings: {
    react: {
      version: 'detect'
    }
  }
};
