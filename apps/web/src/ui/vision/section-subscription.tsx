import Link from 'next/link';

import { Card } from '#/ui/vision/ui';

export function SectionSubscription() {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute left-4 right-4 top-4 flex justify-between text-lg md:left-8 md:right-8">
        <span>How we will make money</span>
        <span className="text-[#878787]">
          <Link href="/">midday.ai</Link>
        </span>
      </div>
      <div className="container flex min-h-screen flex-col justify-center">
        <div className="h-[580px] overflow-auto px-4 pb-[100px] md:h-auto md:px-0 md:pb-0 md:pt-0">
          <div className="mb-4">
            <h2 className="text-2xl">Tiers</h2>
          </div>

          <div className="mb-12 grid gap-8 px-4 md:mb-[80px] md:grid-cols-3 md:px-0 md:pt-0">
            <Card className="pb-8">
              <span className="mb-4 rounded-lg bg-white px-4 py-1 text-sm font-medium text-black">
                Base
              </span>

              <h2 className="text-2xl">Free</h2>
              <p className="text-center text-sm text-[#878787]">
                We will offer a free limited plan for customers to get to know
                the system.
              </p>
            </Card>

            <Card className="pb-8">
              <span className="mb-4 rounded-lg border border-border px-4 py-1 text-sm font-medium">
                Pro
              </span>

              <h2 className="text-2xl">TBD/ mo</h2>
              <p className="text-center text-sm text-[#878787]">
                This is the price new users will pay when we launch. The price
                is yet to be determined.
              </p>
            </Card>

            <Card className="pb-8">
              <span className="mb-4 rounded-lg border border-border px-4 py-1 text-sm font-medium">
                Enterprise
              </span>

              <h2 className="text-2xl">TBD</h2>
              <p className="text-center text-sm text-[#878787]">
                This plan will be offered to bigger companies with lots of
                seats. This will be licensed based and the price is yet to be
                determined.
              </p>
            </Card>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl">Add ons</h2>
          </div>

          <div className="grid gap-8 px-4 md:grid-cols-3 md:px-0 md:pt-0">
            <Card className="pb-8">
              <h2>Team seats</h2>
              <p className="text-center text-sm text-[#878787]">
                Additional team members will be per seat pricing. The team will
                have the ability to invite how many users they want.
              </p>
            </Card>

            <Card className="pb-8">
              <h2>Vault storage</h2>
              <p className="text-center text-sm text-[#878787]">
                A limit will be set to the storage since this is also a moving
                cost for us. Everything above that limit will cost the users
                extra. Price is yet to be determined.
              </p>
            </Card>

            <Card className="pb-8">
              <h2>Custom domain</h2>
              <p className="text-center text-sm text-[#878787]">
                If the user want a custom inbox email, for example
                acme.inbox@pbd.ai, we can provide this for an additional fee.
              </p>
            </Card>
          </div>

          <div className="px-4 md:px-0">
            <a
              href="https://midday.ai/engine"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className="ful-w mt-8 flex flex-col items-center justify-center space-y-4 border border-border bg-[#121212] p-4 px-6 pb-8 text-center">
                <h2>Engine</h2>
                <p className="max-w-[800px] text-center text-sm text-[#878787]">
                  Midday Engine streamlines banking integrations with a single
                  API, effortlessly connecting to multiple providers and get one
                  unified format and UI. We currently utilize our Engine
                  internally, but we will soon offer it as a paid service.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
