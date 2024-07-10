'use client';

import { useEffect, useState } from 'react';

import type { CarouselApi } from '@pbd/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@pbd/ui/carousel';

import { Ai } from '#/ui/vision/ai';
import { Book } from '#/ui/vision/book';
import { CarouselToolbar } from '#/ui/vision/carousel-toolbar';
import { Not1, Not2, Not3, Not4, Not5, Not6 } from '#/ui/vision/not';
import { Reality } from '#/ui/vision/reality';
import { Start } from '#/ui/vision/start';

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
          <Start />
        </CarouselItem>
        <CarouselItem>
          <Reality />
        </CarouselItem>
        <CarouselItem className="bg-primary">
          <Not1 />
        </CarouselItem>
        <CarouselItem className="bg-alternate">
          <Not2 />
        </CarouselItem>
        <CarouselItem>
          <Not3 />
        </CarouselItem>
        <CarouselItem className="bg-primary">
          <Not4 />
        </CarouselItem>
        <CarouselItem className="bg-muted">
          <Not5 />
        </CarouselItem>
        <CarouselItem>
          <Not6 />
        </CarouselItem>
        <CarouselItem>
          <Ai />
        </CarouselItem>
        <CarouselItem>
          <Book />
        </CarouselItem>
      </CarouselContent>

      <CarouselToolbar views={1000} />
    </Carousel>
  );
}
