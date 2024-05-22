import type { Config } from 'tailwindcss';

import { fontFamily } from 'tailwindcss/defaultTheme';

import baseConfig from '@pbd/tailwind-config/web';

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [...baseConfig.content, '../../packages/ui/**/*.{ts,tsx}'],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-quattrocento)', ...fontFamily.serif],
        display: ['var(--font-oswald)', ...fontFamily.sans],
      },
    },
  },
} satisfies Config;
