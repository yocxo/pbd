import Link from 'next/link';

import { cn } from '@pbd/ui';
import { buttonVariants } from '@pbd/ui/button';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl border bg-card md:min-h-[90vh] lg:rounded-3xl">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-border [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-primary/10">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-2xl px-6 py-32 sm:py-48 md:max-w-5xl md:px-8 lg:py-56">
        <div className="hidden sm:mb-8 sm:justify-center">
          <div className="relative rounded-md border px-3 py-1 text-sm leading-6 text-muted-foreground">
            Pale Blue Dot releases white paper on enterprise AI.{' '}
            <a href="/blog" className="font-semibold text-alternate">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-secondary-foreground">
            <span className="block text-7xl font-semibold lg:text-[160px]">
              Redefine impossible
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground lg:text-xl">
            For those already at the top, we engineer the next summit. Our
            strategies push the boundaries of what's achievable, ensuring you
            stay lightyears ahead.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/vision"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'primary' }),
                'text-white dark:text-background',
              )}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
