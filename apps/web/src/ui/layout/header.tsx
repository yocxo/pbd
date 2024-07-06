'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import Dropdown from '#/ui/dropdown';
import Logo from './logo';
import MobileMenu from './mobile-menu';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setTop(false);
    } else {
      setTop(true);
    }
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl border bg-white px-3 shadow-lg backdrop-blur-sm dark:bg-secondary">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  href="/about"
                  className="flex items-center text-secondary-foreground transition hover:text-secondary-foreground/80"
                >
                  About
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/customers"
                  className="flex items-center text-secondary-foreground transition hover:text-secondary-foreground/80"
                >
                  Customers
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/blog"
                  className="flex items-center text-secondary-foreground transition hover:text-secondary-foreground/80"
                >
                  Blog
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/documentation"
                  className="flex items-center text-secondary-foreground transition hover:text-secondary-foreground/80"
                >
                  Docs
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Extra">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/support"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-secondary-foreground transition hover:text-secondary-foreground/80"
                  >
                    Support center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apps"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-secondary-foreground transition hover:text-secondary-foreground/80"
                  >
                    Apps
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                Register
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
