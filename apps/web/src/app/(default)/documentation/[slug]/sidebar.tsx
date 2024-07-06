'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Transition } from '@headlessui/react';

import useScrollSpy from '#/utils/useScrollspy';
import { useDocumentationProvider } from './documentation-provider';

export default function Sidebar({ docs }: { docs: any[] }) {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen } = useDocumentationProvider();
  const pathname = usePathname();
  const links = useScrollSpy();

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!sidebar.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      {/* Backdrop */}
      <Transition
        as="div"
        className="fixed inset-0 z-50 bg-gray-900 bg-opacity-20 transition-opacity md:hidden"
        show={sidebarOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        aria-hidden="true"
      />

      {/* Sidebar */}
      <Transition
        ref={sidebar}
        show={sidebarOpen}
        unmount={false}
        as="aside"
        id="sidebar"
        className="w-[268px] [border-image:linear-gradient(to_bottom,theme(colors.slate.200),theme(colors.slate.300),transparent)1] max-md:fixed max-md:inset-y-0 max-md:left-0 max-md:z-50 max-md:h-screen max-md:bg-gray-50 md:!block md:shrink-0 md:border-r md:!opacity-100"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="no-scrollbar sticky top-24 overflow-y-auto px-8 py-4 max-md:fixed max-md:inset-y-0 max-md:w-[268px] md:py-2">
          {/* Docs nav */}
          <nav className="space-y-8 md:block">
            <div>
              <div className="mb-3 font-bold">Documentation</div>
              <ul className="space-y-2 text-sm">
                {docs.map((doc, index) => (
                  <li key={index}>
                    <Link
                      href={`/documentation/${doc.slug}`}
                      className={`relative flex items-center text-gray-700 hover:text-gray-900 ${
                        pathname.includes(doc.slug) ? 'font-medium' : ''
                      }`}
                    >
                      {doc.metadata.kind === 'detailed' ? (
                        <>
                          <svg
                            className={`absolute -left-5 shrink-0 fill-gray-400 ${
                              pathname.includes(doc.slug) ? '' : '-rotate-90'
                            }`}
                            width="11"
                            height="7"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m2 .94 3.5 3.5L9 .94 10.06 2 5.5 6.56.94 2 2 .94Z" />
                          </svg>
                          <span>{doc.metadata.title}</span>
                        </>
                      ) : (
                        doc.metadata.title
                      )}
                    </Link>
                    {doc.metadata.kind === 'detailed' &&
                    pathname.includes(doc.slug) ? (
                      <ul className="mt-2 space-y-2 pl-4">
                        {links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              data-scrollspy-link
                              className="text-gray-500 hover:text-gray-900"
                              href={`#${link.id}`}
                            >
                              {link.innerText}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </Transition>
    </>
  );
}
