'use client';

import useScrollSpy from '#/utils/useScrollspy';

export default function SecondaryNav() {
  const links = useScrollSpy();

  return (
    <>
      {links.length > 0 && (
        <aside className="ml-6 w-60 shrink-0 max-md:hidden">
          <nav className="sticky top-24 border-l border-r p-5 [border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.5),transparent)1]">
            <div className="font-bold">On this page</div>
            <ul className="mt-2 space-y-2 text-sm">
              {links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    data-scrollspy-link
                    className="text-gray-700 hover:text-gray-900"
                    href={`#${link.id}`}
                  >
                    {link.innerText}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
}
