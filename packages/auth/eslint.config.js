import baseConfig, { restrictEnvAccess } from '@pbd/eslint-config/base';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...restrictEnvAccess,
];
