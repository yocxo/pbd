import type { Metadata } from 'next';

import { VisionCarousel } from '#/ui/vision/vision-carousel';

export const metadata: Metadata = {
  title: 'Pitch',
  description: 'Pitch deck',
};

export default function Page() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 h-screen">
      <VisionCarousel />
    </div>
  );
}
