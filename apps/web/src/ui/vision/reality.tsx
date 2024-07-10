import Image from 'next/image';

import Logo from '#/ui/shared/logo';

export function Reality() {
  return (
    <div className="relative min-h-screen">
      <Logo
        href
        className="absolute left-6 top-6 z-50 h-8 w-auto sm:size-10 md:left-8 md:top-8"
      />
      <div className="absolute inset-0">
        <Image fill alt="" src="/earth.jpg" className="object-cover" />
        <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply" />
      </div>
      <div className="relative z-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-alternate opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="container flex min-h-screen flex-col py-32 sm:py-48 lg:py-56">
          <h1 className="mx-auto max-w-4xl text-balance px-4 text-center text-5xl font-semibold leading-none text-white md:px-0 md:text-9xl">
            Your biggest threat <span className="text-primary">is not</span>{' '}
            what you think
          </h1>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-alternate to-primary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
