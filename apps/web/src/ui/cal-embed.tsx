'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

interface Props {
  calLink: string;
}

export function CalEmbed({ calLink }: Props) {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal('ui', {
          styles: { branding: { brandColor: '#000000' } },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      } catch (error) {
        console.error('Error initializing Cal API:', error);
      }
    })().catch(console.error); // Handle any unhandled promise rejections
  }, []);

  return (
    <Cal
      calLink={calLink}
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', theme: 'dark' }}
    />
  );
}
