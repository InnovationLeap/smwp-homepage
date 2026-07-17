import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Ignore build artifacts and dependencies
  { ignores: ['dist/**', '.astro/**', 'node_modules/**'] },

  // Base recommended JS rules
  eslint.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Astro recommended rules
  ...eslintPluginAstro.configs['flat/recommended'],

  // Project-specific overrides
  {
    rules: {
      // Allow unused vars if prefixed with underscore
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
];
