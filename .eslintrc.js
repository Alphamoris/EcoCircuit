module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn'
  },
  // Ignore specific files or patterns if needed
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/'
  ]
} 