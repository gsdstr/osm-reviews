module.exports = {
  extends: '@antfu',
  rules: {
    '@typescript-eslint/consistent-type-imports': ['off', {
      prefer: 'no-type-imports',
    }],
  },
}
