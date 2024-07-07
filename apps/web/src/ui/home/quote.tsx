'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import Particles from '#/ui/shared/particles';

export function Quote() {
  const { theme } = useTheme();
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000');
  }, [theme]);

  return (
    <section>
      <div className="py-16 sm:py-24">
        <div className="mx-auto">
          <div className="relative overflow-hidden px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <div className="relative mx-auto max-w-2xl md:max-w-5xl">
              <figure className="text-center">
                <blockquote className="mt-6 text-5xl font-semibold md:text-7xl">
                  <p className="text-balance">
                    Do not go where the path may lead, go instead where there is
                    no path and leave a trail
                  </p>
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-alternate">Emerson</div>
                </figcaption>
              </figure>
            </div>
            <Particles
              className="absolute inset-0"
              quantity={100}
              ease={80}
              color={color}
              refresh
            />
          </div>
        </div>
      </div>
    </section>
  );
}
