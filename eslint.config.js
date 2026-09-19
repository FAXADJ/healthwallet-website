export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
    files: ['**/*.{js,mjs}'],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
];
