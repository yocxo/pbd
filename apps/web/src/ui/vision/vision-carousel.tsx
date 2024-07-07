'use client';

import { useEffect, useState } from 'react';

import type { CarouselApi } from '@pbd/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@pbd/ui/carousel';

import { CarouselToolbar } from '#/ui/vision/carousel-toolbar';
import { SectionAi } from '#/ui/vision/section-ai';
import { SectionBook } from '#/ui/vision/section-book';
import {
  SectionNot1,
  SectionNot2,
  SectionNot3,
  SectionNot4,
  SectionNot5,
  SectionNot6,
} from '#/ui/vision/section-not';
import { SectionReality } from '#/ui/vision/section-reality';
import { SectionStart } from '#/ui/vision/section-start';

export function VisionCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [_current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className="relative min-h-full w-full" setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <SectionStart />
        </CarouselItem>
        <CarouselItem>
          <SectionReality />
        </CarouselItem>
        <CarouselItem className="bg-alternate">
          <SectionNot1 />
        </CarouselItem>
        <CarouselItem className="bg-primary">
          <SectionNot2 />
        </CarouselItem>
        <CarouselItem>
          <SectionNot3 />
        </CarouselItem>
        <CarouselItem className="bg-alternate">
          <SectionNot4 />
        </CarouselItem>
        <CarouselItem className="bg-primary">
          <SectionNot5 />
        </CarouselItem>
        <CarouselItem>
          <SectionNot6 />
        </CarouselItem>
        <CarouselItem>
          <SectionAi />
        </CarouselItem>
        <CarouselItem>
          <SectionBook />
        </CarouselItem>
      </CarouselContent>

      <CarouselToolbar views={1000} />
    </Carousel>
  );
}
