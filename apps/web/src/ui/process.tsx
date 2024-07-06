export default function Process() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-200 py-12 md:py-16">
          {/* Items */}
          <div className="relative mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            <div
              className="absolute top-1/2 hidden h-1 w-full bg-gradient-to-r from-blue-500 to-teal-300 lg:block"
              aria-hidden="true"
            ></div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center rounded bg-white p-6 shadow-xl">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                1
              </div>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Apply
              </h4>
              <p className="text-center text-gray-600">
                Duis aute irure dolor in reprehenderitin volupta velit esse
                cillum sint occaecat cupidatat.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center rounded bg-white p-6 shadow-xl">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                2
              </div>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Screening
              </h4>
              <p className="text-center text-gray-600">
                Duis aute irure dolor in reprehenderitin volupta velit esse
                cillum sint occaecat cupidatat.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center rounded bg-white p-6 shadow-xl">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                3
              </div>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Interview
              </h4>
              <p className="text-center text-gray-600">
                Duis aute irure dolor in reprehenderitin volupta velit esse
                cillum sint occaecat cupidatat.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center rounded bg-white p-6 shadow-xl">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                4
              </div>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Job Offer
              </h4>
              <p className="text-center text-gray-600">
                Duis aute irure dolor in reprehenderitin volupta velit esse
                cillum sint occaecat cupidatat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
