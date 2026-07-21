import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Evita usar any manualmente.
      '@typescript-eslint/no-explicit-any': 'error',

      // Variables sin usar.
      // Permite ignorarlas usando "_" al comienzo.
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Obliga a usar === y !==.
      eqeqeq: ['error', 'always'],

      // Detecta variables que podrían ser const.
      'prefer-const': 'warn',

      // Evita redeclarar variables.
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'warn',

      // Console permitido mientras desarrollás.
      // Solo avisa por console.log, pero permite warn y error.
      'no-console': 'warn',
    },
  },
]);
