import Image from 'next/image';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Economic agility',
    description:
      'Transform economic volatility into strategic advantage, optimizing operations and investments to thrive amidst uncertainty.',
  },
  {
    title: 'Accelerated digital evolution',
    description:
      'Modernize your core systems without disruption, embracing cutting-edge AI technology to enhance customer experience and operational efficiency.',
  },
  {
    title: 'Talent magnetism',
    description:
      'Cultivate a dynamic environment that attracts, retains, and develops world-class talent, fueling your continued market leadership.',
  },
];

export function Services() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-primary to-alternate opacity-40 blur-[160px]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-24 text-center md:pb-28">
            <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
              Beyond conventional boundaries
            </h2>
            <p className="text-xl text-muted-foreground">
              Our strategies empower you to push past perceived limits, ensuring
              your enterprise sets new benchmarks for others to aspire to.
            </p>
          </div>
          <div className="group relative mx-auto mb-32 flex w-full max-w-[500px] justify-center md:mb-36">
            <div className="absolute bottom-0 -z-10" aria-hidden="true">
              <div className="h-80 w-80 rounded-full bg-primary opacity-70 blur-[160px]" />
            </div>
            <div className="aspect-video w-full -rotate-1 rounded-2xl border bg-card px-5 py-3 shadow-xl transition duration-300 group-hover:-rotate-0">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_hsl(var(--muted-foreground))_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-semibold">
                  AI Regession Analysis
                </span>
              </div>
              <div className="whitespace-pre-wrap break-words font-mono text-sm text-muted-foreground blur-sm transition duration-300 group-hover:blur-none [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-foreground">
                  import tensorflow as tf
                </span>{' '}
                <span className="animate-[code-2_10s_infinite]">
                  from market_data import prepare_market_data
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  model = tf.keras.models.load_model('financial_forecasting.h5')
                </span>{' '}
                <span className="animate-[code-4_10s_infinite]">
                  market_data = prepare_market_data()
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-foreground">
                  predictions = model.predict(market_data)
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  optimize_portfolio(analyze_risk(predictions))
                </span>
              </div>
            </div>
            <div className="absolute top-16">
              <div className="pointer-events-none mb-[7%] translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-0">
                <Image
                  className="-rotate-2"
                  src="/images/features-02-overlay-01.png"
                  width={500}
                  height={72}
                  alt="Overlay 01"
                />
              </div>
              <div className="delay-50 pointer-events-none mb-[3.5%] translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-0">
                <Image
                  src="/images/features-02-overlay-02.png"
                  width={500}
                  height={91}
                  alt="Overlay 02"
                />
              </div>
              <div className="pointer-events-none translate-y-2 transition delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-0">
                <Image
                  className="-rotate-1"
                  src="/images/features-02-overlay-03.png"
                  width={500}
                  height={91}
                  alt="Overlay 03"
                />
              </div>
            </div>
          </div>
          <div className="grid overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,hsl(var(--border)),transparent)_1] lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gradient-to-b [&>*]:before:from-border/80 [&>*]:before:via-border [&>*]:before:[block-size:100%] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] md:[&>*]:px-10 md:[&>*]:py-12">
            {services.map((service, index) => (
              <article key={index}>
                <h3 className="mb-2 flex items-center space-x-2 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-pretty text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
