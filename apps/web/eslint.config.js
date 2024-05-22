import baseConfig, { restrictEnvAccess } from '@pbd/eslint-config/base';
import nextjsConfig from '@pbd/eslint-config/nextjs';
import reactConfig from '@pbd/eslint-config/react';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['.next/**'],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
