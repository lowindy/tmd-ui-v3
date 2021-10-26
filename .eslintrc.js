module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // 禁止空语句块
    'no-empty': 2,
    // 多行尾随逗号
    'comma-dangle': [2, 'always-multiline'],
    // 强制分号
    semi: ['error', 'always'],
    'arrow-parens': 0,
    // 参数后面不允许任何空格
    'space-before-function-paren': 0,
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 0,
    // typescript
    '@typescript-eslint/ban-types': 'off',
    '@type-eslint/no-explicit-any': 'off',
    '@type-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@type-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-var-requires': 0,
    '@type-eslint/ban-ts-comment': 'off',
    '@type-eslint/ban-types': 'off',
    'no-console': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
