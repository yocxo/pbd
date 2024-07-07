import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="-z-1 pointer-events-none absolute bottom-0 left-1/2 -mb-64 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            {/* 404 content */}
            <h1 className="h1 mb-4">Oh, No! You stumbled upon a rarity</h1>
            <div className="mt-8">
              <Link
                href="/"
                className="btn bg-blue-600 text-white hover:bg-blue-700"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
