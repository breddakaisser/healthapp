import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ],
      'no-console': 'off',
    },
  },
  // Add this block at the bottom to stop type-checking config files:
  {
    files: ['**/*.js', '**/*.mjs', 'playwright.config.ts'],
    ...tseslint.configs.disableTypeChecked,
  }
);
