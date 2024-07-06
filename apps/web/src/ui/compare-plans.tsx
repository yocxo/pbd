import Tooltip from '#/ui/tooltip';

export default function ComparePlans() {
  return (
    <section>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto grid max-w-sm max-md:gap-6 md:-mx-6 md:max-w-none md:grid-cols-5">
            {/* Column with labels */}
            <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
              {/* Empty cell */}
              <div />
              {/* # Key features */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-1"
                aria-hidden="true"
              >
                <div className="mb-2 mt-5 font-bold">Key features</div>
              </div>
              {/* Translated Words */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-2"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm">
                  <Tooltip
                    id="01"
                    content="Apply visual attributes to refine your designs and focus on relevant insights."
                  >
                    Translated Words
                  </Tooltip>
                </div>
              </div>
              {/* Search Page Limit */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-3"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm">
                  <Tooltip
                    id="02"
                    content="Apply visual attributes to refine your designs and focus on relevant insights."
                  >
                    Search Page Limit
                  </Tooltip>
                </div>
              </div>
              {/* Custom Fonts */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-4"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm">
                  <Tooltip
                    id="03"
                    content="Apply visual attributes to refine your designs and focus on relevant insights."
                  >
                    Custom Fonts
                  </Tooltip>
                </div>
              </div>
              {/* Code Editor */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-5"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm">
                  <Tooltip
                    id="04"
                    content="Apply visual attributes to refine your designs and focus on relevant insights."
                  >
                    Code Editor
                  </Tooltip>
                </div>
              </div>
              {/* # Hosting */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-6"
                aria-hidden="true"
              >
                <div className="mb-2 mt-5 font-bold">Hosting</div>
              </div>
              {/* Bandwidth */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-7"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm">
                  <Tooltip
                    id="06"
                    content="Apply visual attributes to refine your designs and focus on relevant insights."
                  >
                    Bandwidth
                  </Tooltip>
                </div>
              </div>
              {/* Visitors */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-8"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm">
                  <Tooltip
                    id="07"
                    content="Apply visual attributes to refine your designs and focus on relevant insights."
                  >
                    Visitors
                  </Tooltip>
                </div>
              </div>
              {/* Max Upload Size */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-9"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm">
                  <Tooltip
                    id="08"
                    content="Apply visual attributes to refine your designs and focus on relevant insights."
                  >
                    Max Upload Size
                  </Tooltip>
                </div>
              </div>
              {/* SSL Certificate */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-10"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm">
                  <Tooltip
                    id="09"
                    content="Apply visual attributes to refine your designs and focus on relevant insights."
                  >
                    SSL Certificate
                  </Tooltip>
                </div>
              </div>
              {/* # Creation */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-11"
                aria-hidden="true"
              >
                <div className="mb-2 mt-5 font-bold">Creation</div>
              </div>
              {/* Created Words */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-12"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm">
                  <Tooltip
                    id="11"
                    content="Apply visual attributes to refine your designs and focus on relevant insights."
                  >
                    Created Words
                  </Tooltip>
                </div>
              </div>
              {/* Team Projects */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-[13]"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm">
                  <Tooltip
                    id="12"
                    content="Apply visual attributes to refine your designs and focus on relevant insights."
                  >
                    Team Projects
                  </Tooltip>
                </div>
              </div>
            </section>
            {/* End: Column with labels */}
            {/* Hobby table */}
            <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
              <div className="relative flex flex-col justify-end px-6">
                <div className="grow">
                  <div className="mb-5 font-medium">Hobby</div>
                  <div>
                    <a
                      className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"
                      href="#0"
                    >
                      Free trial
                    </a>
                  </div>
                </div>
              </div>
              {/* # Key features */}
              <div className="flex flex-col justify-end px-6 md:order-1">
                <div className="mb-2 mt-5 font-bold md:sr-only">
                  Key features
                </div>
              </div>
              {/* Translated Words */}
              <div className="flex flex-col justify-end px-6 md:order-2">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  5,000 <span className="md:sr-only">Translated Words</span>
                </div>
              </div>
              {/* Search Page Limit */}
              <div className="flex flex-col justify-end px-6 md:order-3">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  100 <span className="md:sr-only">Search Page Limit</span>
                </div>
              </div>
              {/* Custom Fonts */}
              <div className="flex flex-col justify-end px-6 md:order-4">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Custom Fonts</span>
                </div>
              </div>
              {/* Code Editor */}
              <div className="flex flex-col justify-end px-6 md:order-5">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm max-md:sr-only">
                  <span className="md:sr-only">Code Editor</span>
                </div>
              </div>
              {/* # Features */}
              <div className="flex flex-col justify-end px-6 md:order-6">
                <div className="mb-2 mt-5 font-bold md:sr-only">Features</div>
              </div>
              {/* Bandwidth */}
              <div className="flex flex-col justify-end px-6 md:order-7">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  100MB <span className="md:sr-only">Bandwidth</span>
                </div>
              </div>
              {/* Visitors */}
              <div className="flex flex-col justify-end px-6 md:order-8">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  1,000 <span className="md:sr-only">Visitors</span>
                </div>
              </div>
              {/* Max Upload Size */}
              <div className="flex flex-col justify-end px-6 md:order-9">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  5MB <span className="md:sr-only">Max Upload Size</span>
                </div>
              </div>
              {/* SSL Certificate */}
              <div className="flex flex-col justify-end px-6 md:order-10">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">SSL Certificate</span>
                </div>
              </div>
              {/* # Creation */}
              <div className="flex flex-col justify-end px-6 md:order-11">
                <div className="mb-2 mt-5 font-bold md:sr-only">Creation</div>
              </div>
              {/* Created Words */}
              <div className="flex flex-col justify-end px-6 md:order-12">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  Unlimited <span className="md:sr-only">Created Words</span>
                </div>
              </div>
              {/* Team Projects */}
              <div className="flex flex-col justify-end px-6 md:order-[13]">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm max-md:sr-only">
                  <span className="md:sr-only">Team Projects</span>
                </div>
              </div>
            </section>
            {/* End: Hobby table */}
            {/* Basic table */}
            <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
              <div className="relative flex flex-col justify-end px-6">
                <div className="grow">
                  <div className="mb-5 font-medium">Basic</div>
                  <div>
                    <a
                      className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"
                      href="#0"
                    >
                      Free trial
                    </a>
                  </div>
                </div>
              </div>
              {/* # Key features */}
              <div className="flex flex-col justify-end px-6 md:order-1">
                <div className="mb-2 mt-5 font-bold md:sr-only">
                  Key features
                </div>
              </div>
              {/* Translated Words */}
              <div className="flex flex-col justify-end px-6 md:order-2">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  15,000 <span className="md:sr-only">Translated Words</span>
                </div>
              </div>
              {/* Search Page Limit */}
              <div className="flex flex-col justify-end px-6 md:order-3">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  1,000 <span className="md:sr-only">Search Page Limit</span>
                </div>
              </div>
              {/* Custom Fonts */}
              <div className="flex flex-col justify-end px-6 md:order-4">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Custom Fonts</span>
                </div>
              </div>
              {/* Code Editor */}
              <div className="flex flex-col justify-end px-6 md:order-5">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Code Editor</span>
                </div>
              </div>
              {/* # Features */}
              <div className="flex flex-col justify-end px-6 md:order-6">
                <div className="mb-2 mt-5 font-bold md:sr-only">Features</div>
              </div>
              {/* Bandwidth */}
              <div className="flex flex-col justify-end px-6 md:order-7">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  1GB <span className="md:sr-only">Bandwidth</span>
                </div>
              </div>
              {/* Visitors */}
              <div className="flex flex-col justify-end px-6 md:order-8">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  10,000 <span className="md:sr-only">Visitors</span>
                </div>
              </div>
              {/* Max Upload Size */}
              <div className="flex flex-col justify-end px-6 md:order-9">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  15MB <span className="md:sr-only">Max Upload Size</span>
                </div>
              </div>
              {/* SSL Certificate */}
              <div className="flex flex-col justify-end px-6 md:order-10">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">SSL Certificate</span>
                </div>
              </div>
              {/* # Creation */}
              <div className="flex flex-col justify-end px-6 md:order-11">
                <div className="mb-2 mt-5 font-bold md:sr-only">Creation</div>
              </div>
              {/* Created Words */}
              <div className="flex flex-col justify-end px-6 md:order-12">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  Unlimited <span className="md:sr-only">Created Words</span>
                </div>
              </div>
              {/* Team Projects */}
              <div className="flex flex-col justify-end px-6 md:order-[13]">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm max-md:sr-only">
                  <span className="md:sr-only">Team Projects</span>
                </div>
              </div>
            </section>
            {/* End: Basic table */}
            {/* Business table */}
            <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl [&>div]:bg-gray-800">
              <div className="relative flex flex-col justify-end px-6">
                <div className="grow">
                  <div className="mb-5 font-medium text-gray-200">Business</div>
                  <div>
                    <a
                      className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"
                      href="#0"
                    >
                      Free trial
                    </a>
                  </div>
                </div>
              </div>
              {/* # Key features */}
              <div className="flex flex-col justify-end px-6 md:order-1">
                <div className="mb-2 mt-5 font-bold text-gray-200 md:sr-only">
                  Key features
                </div>
              </div>
              {/* Translated Words */}
              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-2">
                <div className="h-full border-b border-gray-600 py-4 text-sm">
                  25,000 <span className="md:sr-only">Translated Words</span>
                </div>
              </div>
              {/* Search Page Limit */}
              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-3">
                <div className="h-full border-b border-gray-600 py-4 text-sm">
                  Unlimited
                </div>
              </div>
              {/* Custom Fonts */}
              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-4">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Custom Fonts</span>
                </div>
              </div>
              {/* Code Editor */}
              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-5">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Code Editor</span>
                </div>
              </div>
              {/* # Features */}
              <div className="flex flex-col justify-end px-6 md:order-6">
                <div className="mb-2 mt-5 font-bold text-gray-200 md:sr-only">
                  Features
                </div>
              </div>
              {/* Bandwidth */}
              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-7">
                <div className="h-full border-b border-gray-600 py-4 text-sm">
                  10GB <span className="md:sr-only">Bandwidth</span>
                </div>
              </div>
              {/* Visitors */}
              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-8">
                <div className="h-full border-b border-gray-600 py-4 text-sm">
                  50,000 <span className="md:sr-only">Visitors</span>
                </div>
              </div>
              {/* Max Upload Size */}
              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-9">
                <div className="h-full border-b border-gray-600 py-4 text-sm">
                  25MB <span className="md:sr-only">Max Upload Size</span>
                </div>
              </div>
              {/* SSL Certificate */}
              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-10">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">SSL Certificate</span>
                </div>
              </div>
              {/* # Creation */}
              <div className="flex flex-col justify-end px-6 md:order-11">
                <div className="mb-2 mt-5 font-bold text-gray-200 md:sr-only">
                  Creation
                </div>
              </div>
              {/* Created Words */}
              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-12">
                <div className="h-full border-b border-gray-600 py-4 text-sm">
                  Unlimited <span className="md:sr-only">Created Words</span>
                </div>
              </div>
              {/* Team Projects */}
              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-[13]">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Team Projects</span>
                </div>
              </div>
            </section>
            {/* End: Business table */}
            {/* Enterprise table */}
            <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
              <div className="relative flex flex-col justify-end px-6">
                <div className="grow">
                  <div className="mb-5 font-medium">Enterprise</div>
                  <div>
                    <a
                      className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"
                      href="#0"
                    >
                      Free trial
                    </a>
                  </div>
                </div>
              </div>
              {/* # Key features */}
              <div className="flex flex-col justify-end px-6 md:order-1">
                <div className="mb-2 mt-5 font-bold md:sr-only">
                  Key features
                </div>
              </div>
              {/* Translated Words */}
              <div className="flex flex-col justify-end px-6 md:order-2">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  50,000 <span className="md:sr-only">Translated Words</span>
                </div>
              </div>
              {/* Search Page Limit */}
              <div className="flex flex-col justify-end px-6 md:order-3">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  Unlimited
                </div>
              </div>
              {/* Custom Fonts */}
              <div className="flex flex-col justify-end px-6 md:order-4">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Custom Fonts</span>
                </div>
              </div>
              {/* Code Editor */}
              <div className="flex flex-col justify-end px-6 md:order-5">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Code Editor</span>
                </div>
              </div>
              {/* # Features */}
              <div className="flex flex-col justify-end px-6 md:order-6">
                <div className="mb-2 mt-5 font-bold md:sr-only">Features</div>
              </div>
              {/* Bandwidth */}
              <div className="flex flex-col justify-end px-6 md:order-7">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  100GB <span className="md:sr-only">Bandwidth</span>
                </div>
              </div>
              {/* Visitors */}
              <div className="flex flex-col justify-end px-6 md:order-8">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  100,000 <span className="md:sr-only">Visitors</span>
                </div>
              </div>
              {/* Max Upload Size */}
              <div className="flex flex-col justify-end px-6 md:order-9">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  Custom <span className="md:sr-only">Max Upload Size</span>
                </div>
              </div>
              {/* SSL Certificate */}
              <div className="flex flex-col justify-end px-6 md:order-10">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">SSL Certificate</span>
                </div>
              </div>
              {/* # Creation */}
              <div className="flex flex-col justify-end px-6 md:order-11">
                <div className="mb-2 mt-5 font-bold md:sr-only">Creation</div>
              </div>
              {/* Created Words */}
              <div className="flex flex-col justify-end px-6 md:order-12">
                <div className="h-full border-b border-gray-200 py-4 text-sm">
                  Unlimited <span className="md:sr-only">Created Words</span>
                </div>
              </div>
              {/* Team Projects */}
              <div className="flex flex-col justify-end px-6 md:order-[13]">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Team Projects</span>
                </div>
              </div>
            </section>
            {/* End: Enterprise table */}
          </div>
        </div>
      </div>
    </section>
  );
}
