export default function Hero() {
  return (
    <div className="bg-backround relative isolate overflow-hidden md:min-h-[90vh]">
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
        <svg x="50%" y={-1} className="overflow-visible fill-primary/5">
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
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full border px-3 py-1 text-sm leading-6 text-muted-foreground">
            Announcing our next round of funding.{' '}
            <a href="#" className="font-semibold text-alternate">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-muted-foreground"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
