import Link from 'next/link';

export default function Cta02() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="rounded bg-gray-900 px-8 py-10 shadow-2xl md:px-12 md:py-16"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="mb-6 text-center lg:mb-0 lg:mr-16 lg:w-1/2 lg:text-left">
                <h3 className="h3 text-white">
                  Sounds like we are building something cool?
                </h3>
              </div>

              {/* CTA button */}
              <div>
                <Link
                  href="/signup"
                  className="btn bg-blue-600 text-white hover:bg-blue-700"
                >
                  Join us today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
