import Link from 'next/link';

import { cn } from '@pbd/ui';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex', className)}
      aria-label="A round circle representing Pale Blue Dot's Logo"
    >
      <span className="sr-only">Pale Blue Dot</span>
      <svg
        className="h-full w-full"
        viewBox="0 0 72 72"
        id="emoji"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="color">
          <circle cx="36" cy="36.0001" r="28" fill="#61b2e4" />
        </g>
      </svg>
    </Link>
  );
}
