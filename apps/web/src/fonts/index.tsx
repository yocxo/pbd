import localFont from 'next/font/local';

export const fontLexend = localFont({
  src: '../../../../public/lexend-variable.woff2',
  variable: '--font-lexend',
  weight: '100 900',
});

export const fontOswald = localFont({
  src: '../../../../public/oswald-600.woff2',
  variable: '--font-oswald',
  weight: '600',
});

export const fontQuattrocento = localFont({
  src: '../../../../public/quattrocento-400.woff2',
  variable: '--font-quattrocento',
  weight: '400',
});
