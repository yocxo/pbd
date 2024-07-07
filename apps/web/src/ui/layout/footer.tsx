import Link from 'next/link';

import { ThemeToggle } from '@pbd/ui/theme';

import { siteConfig } from '#/config/site';
import Logo from '#/ui/shared/logo';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t bg-[#0B0909]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 text-center sm:flex sm:justify-center sm:space-x-12"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="leading-6 text-white hover:text-white/80"
                aria-label={`Navigate to ${item.name} page in same window`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex items-center justify-center space-x-4">
          <Logo className="h-8 w-auto" />
          <p className="text-xs leading-5 text-white">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
          <ThemeToggle />
        </div>
      </div>

      {/* Big text */}
      <div
        className="relative -mt-16 hidden h-24 w-full sm:block"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-x-0 mx-auto px-4 text-center text-[60px] font-bold leading-none before:bg-gradient-to-b before:from-primary before:to-primary before:to-70% before:bg-clip-text before:text-transparent before:content-['PALE_BLUE_DOT'] after:absolute after:inset-0 after:bg-primary/30 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['PALE_BLUE_DOT'] after:[text-shadow:0_1px_0_hsl(var(--background))] dark:after:mix-blend-lighten sm:text-[165px] md:px-8"></div>
        {/* Glow */}
        <div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-alternate blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
