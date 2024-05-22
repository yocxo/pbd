import baseConfig from '@pbd/eslint-config/base';
import reactConfig from '@pbd/eslint-config/react';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];
