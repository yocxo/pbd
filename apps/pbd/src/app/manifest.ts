import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pale Blue Dot',
    short_name: 'Pale Blue Dot',
    icons: [
      {
        src: '/icon3.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon4.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#1C1718',
    background_color: '#1C1718',
    display: 'standalone',
  };
}
