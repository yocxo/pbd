import Link from 'next/link';

import { cn } from '@pbd/ui';
import { buttonVariants } from '@pbd/ui/button';

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl bg-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold text-primary-foreground sm:text-5xl">
            Shape tomorrow's markets today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary">
            In a world of constant flux, market leaders don't just adapt, they
            anticipate and create. We partner to help you to turn global
            challenges into catalysts for unprecedented growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/vision"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'secondary' }),
                '',
              )}
            >
              Get in Touch
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#1746A2" />
                <stop offset={1} stopColor="#FF371D" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
