import Search from './search';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-10 text-center">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              How can we help?
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-700">
                Need support or have a question about Simple? We're here to
                help.
              </p>
            </div>
          </div>
          {/* Search */}
          <Search />
        </div>
      </div>
    </section>
  );
}
