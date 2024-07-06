'use client';

import { useDocumentationProvider } from './documentation-provider';

export default function Hamburger() {
  const { sidebarOpen, setSidebarOpen } = useDocumentationProvider();

  return (
    <button
      className="group inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-center shadow transition hover:bg-gray-50"
      aria-controls="sidebar"
      aria-expanded={sidebarOpen}
      onClick={() => setSidebarOpen((prevState) => !prevState)}
    >
      <span className="sr-only">Menu</span>
      <svg
        className="pointer-events-none h-4 w-4 fill-current"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="ease-[cubic-bezier(.5,.85,.25,1.1)] origin-center transition-all duration-300 group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:[x:0] group-[[aria-expanded=true]]:[y:7]"
          y={2}
          x={7}
          width={9}
          height={2}
          rx={1}
        />
        <rect
          className="ease-[cubic-bezier(.5,.85,.25,1.8)] origin-center transition-all duration-300 group-[[aria-expanded=true]]:rotate-45"
          y={7}
          width={16}
          height={2}
          rx={1}
        />
        <rect
          className="ease-[cubic-bezier(.5,.85,.25,1.1)] origin-center transition-all duration-300 group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:[x:0] group-[[aria-expanded=true]]:[y:7]"
          y={12}
          width={9}
          height={2}
          rx={1}
        />
      </svg>
    </button>
  );
}
