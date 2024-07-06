export default function Newsletter() {
  return (
    <div className="mt-10 border-t border-gray-200 pt-10 text-center md:text-left">
      <h3 className="mb-6 text-lg font-bold md:mb-8">
        Get all of our updates directly to your inbox.
      </h3>
      <form>
        <div className="mx-auto flex max-w-sm flex-col justify-center sm:max-w-none sm:flex-row md:justify-start">
          <div className="relative mb-2 flex sm:mb-0 sm:mr-2 sm:min-w-[340px]">
            <div className="pointer-events-none absolute flex h-full w-10 items-center justify-center">
              <svg
                className="fill-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={14}
                fill="none"
              >
                <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
              </svg>
            </div>
            <input
              type="email"
              className="form-input w-full pl-10"
              placeholder="Your email..."
              aria-label="Your email"
            />
          </div>
          <button
            className="btn whitespace-nowrap bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
