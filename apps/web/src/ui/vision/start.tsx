import { PbdContainer } from '#/ui/layout/pbd-container';
import Logo from '#/ui/shared/logo';

export function Start() {
  return (
    <PbdContainer>
      <div className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden rounded-2xl border bg-card lg:rounded-3xl">
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
        <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
          <Logo className="h-auto w-full" />
        </div>
      </div>
    </PbdContainer>
  );
}
