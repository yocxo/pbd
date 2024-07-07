import { GlobeHero } from '#/ui/shared/globe-hero';

const outcomes = [
  {
    name: 'Adaptive innovation',
    description:
      'Turn market disruptions into catalysts for breakthrough products and services, consistently staying ahead of the curve.',
  },
  {
    name: 'Dynamic talent ecosystems',
    description:
      'Create an environment where challenges accelerate skill development, making your workforce more capable with each obstacle overcome.',
  },
  {
    name: 'Opportunistic risk management',
    description:
      'Transform financial and operational risks into strategic advantages, using volatility as a tool for growth.',
  },
  {
    name: 'Evolutionary technologies',
    description:
      "Develop systems that don't just adapt to technological shifts but evolve to become more robust and capable with each change.",
  },
  {
    name: 'Regenerative operations',
    description:
      'Design processes that improve under stress, turning increased demand into a driver for enhanced efficiency and quality.',
  },
  {
    name: 'Proactive compliance',
    description:
      'Anticipate regulatory changes to create competitive moats, turning potential constraints into unique market positions.',
  },
  {
    name: 'Cyber resilience',
    description:
      'Build security systems that learn and strengthen from each threat, making your digital infrastructure more impenetrable over time.',
  },
  {
    name: 'Strategic foresight',
    description:
      'Cultivate the ability to anticipate and shape future market trends, positioning your enterprise as an industry visionary.',
  },
  {
    name: 'Cultural antifragility',
    description:
      'Foster an organizational culture that thrives on change, where adaptability and innovation become ingrained values.',
  },
];

export function Why() {
  return (
    <section className="relative rounded-2xl border bg-muted before:inset-0 before:-z-20 lg:rounded-3xl">
      <div className="py-24 sm:py-32">
        <GlobeHero />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Thriving through uncertainty
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              In a world of constant disruption, we help ensure that your
              enterprise doesn&apos;t just survive challenges, it uses them as
              fuel for unprecedented growth and success.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <div key={outcome.name}>
                <dt className="text-lg font-semibold text-foreground">
                  {outcome.name}
                </dt>
                <dd className="mt-1 text-muted-foreground">
                  {outcome.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
