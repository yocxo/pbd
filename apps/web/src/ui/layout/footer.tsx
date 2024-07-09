import Link from 'next/link';

import { cn } from '@pbd/ui';
import { ThemeToggle } from '@pbd/ui/theme';

import { siteConfig } from '#/config/site';
import Logo from '../shared/logo';

interface NavigationItem {
  name: string;
  href: string;
  disabled?: boolean;
}

const navigation: { main: NavigationItem[] } = {
  main: [
    { name: 'Vision', href: '/vision' },
    { name: 'Contact', href: '/contact', disabled: true },
    { name: 'Privacy', href: '/privacy', disabled: true },
    { name: 'Terms', href: '/terms', disabled: true },
    { name: 'Accessibility', href: '/accessibility', disabled: true },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t bg-[#0A070D]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mb-8 flex justify-center">
          <Logo className="size-8 md:size-16" />
        </div>
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 text-center sm:flex sm:justify-center sm:space-x-12"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              {item.disabled ? (
                <span
                  className={cn(
                    'cursor-not-allowed leading-6 text-[#EBE4F1] opacity-50',
                    'pointer-events-none',
                  )}
                  aria-disabled="true"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="leading-6 text-[#EBE4F1] hover:text-white/80"
                  aria-label={`Navigate to ${item.name} page in same window`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-10 flex items-center justify-center space-x-4">
          <p className="text-xs leading-5 text-[#8D88AA]">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
          <ThemeToggle className="border-[#1F1627] bg-transparent text-white" />
        </div>
      </div>
    </footer>
  );
}
