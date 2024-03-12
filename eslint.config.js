import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'node/prefer-global/process': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'no-cond-assign': 'off',
  },
})
