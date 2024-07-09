import Image from 'next/image';
import Link from 'next/link';

import { Card } from '#/ui/vision/ui';

export function SectionAi() {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute left-4 right-4 top-4 flex justify-between text-lg md:left-8 md:right-8">
        <span>Ask us about</span>
        <span className="text-muted-foreground">
          <Link href="/">Pale Blue Dot</Link>
        </span>
      </div>
      <div className="container flex min-h-screen flex-col justify-center">
        <div className="grid h-[580px] gap-8 overflow-auto px-4 pb-[100px] md:h-auto md:grid-cols-3 md:px-0 md:pb-0 md:pt-0">
          <div className="space-y-8">
            <Card
              title="AI enablement"
              description="We help you leverage AI to drive decision-making accuracy, automate complex processes, and uncover hidden insights, leading to enhanced operational efficiency and strategic foresight."
            />
            <Card
              title="Adapting workflows"
              description="Our strategies help you redesign workflows to integrate AI seamlessly, resulting in increased productivity, reduced costs, and improved employee satisfaction through more engaging, high-value work."
            />
          </div>
          <div className="rounded-2xl">
            <Image
              src="/ai.jpg"
              alt="Reciept"
              width={650}
              height={875}
              quality={100}
              className="rounded-2xl"
            />
          </div>
          <div className="ml-auto w-full space-y-8">
            <Card
              title="Increase enterprise resilience"
              description="We guide you in using AI to build adaptive systems that anticipate and respond to market changes, ensuring your enterprise not only survives but thrives amidst disruption and uncertainty."
            />
            <div className="px-8">
              <h2 className="text-center text-5xl font-semibold text-primary">
                AI isn't just a tool. It's the catalyst for enterprise
                evolution.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
