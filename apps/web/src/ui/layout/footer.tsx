import Link from 'next/link';

import { ThemeToggle } from '@pbd/ui/theme';

import { siteConfig } from '#/config/site';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-card">
      <div className="mx-auto max-w-7xl px-6 py-2 md:flex md:items-center md:justify-between md:py-6 lg:px-8">
        <div className="flex items-center justify-center space-x-6 md:order-2">
          <ThemeToggle />
          <Link
            href="mailto:with@seepaleblue.com?subject=I'd%20like%20a%20new%20perspective&body=Hello%2C%0A%0AI'd%20like%20to%20discuss%20outcome-driven%20strategies%20for%20my%20organization.%20Please%20contact%20me.%0A%0AThanks"
            target="_blank"
            className="text-xs font-bold text-alternate"
          >
            Contact
          </Link>
        </div>
        <div className="mt-2 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
