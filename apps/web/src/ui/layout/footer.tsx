import Link from 'next/link';

import { ThemeToggle } from '@pbd/ui/theme';

import { siteConfig } from '#/config/site';
import Logo from '../shared/logo';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t bg-[#0F0805]">
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
              <Link
                href={item.href}
                className="leading-6 text-[#F3F3EC] hover:text-white/80"
                aria-label={`Navigate to ${item.name} page in same window`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex items-center justify-center space-x-4">
          <p className="text-xs leading-5 text-[#A09294]">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
          <ThemeToggle className="border-[#2B2727] bg-transparent text-white" />
        </div>
      </div>
    </footer>
  );
}
