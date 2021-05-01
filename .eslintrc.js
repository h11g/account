module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // prettier 放在最后覆盖前面与 eslint 冲突的规则
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: 'off',
    // https://github.com/eslint/eslint/issues/13956 解决 vscode eslint 插件报错问题
    '@typescript-eslint/indent': ['error', 2],
  },
}
