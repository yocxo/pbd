import Logo from '#/ui/shared/logo';

export function SectionStart() {
  return (
    <div className="relative min-h-screen">
      <span className="absolute right-4 top-4 text-lg md:right-8">Vision</span>

      <div className="container relative flex min-h-screen flex-col justify-between py-8">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full stroke-border [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-primary/10">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="container relative flex min-h-screen flex-col justify-between py-8">
          <div className="ml-4 md:ml-8">
            <Logo className="w-24 md:w-32" />
          </div>
          <h1 className="ml-4 pb-32 text-6xl font-bold uppercase md:ml-8 md:text-[150px]">
            Pale Blue Dot
          </h1>
        </div>
      </div>
    </div>
  );
}
