import Image from 'next/image';
import Link from 'next/link';

import { Card } from '#/ui/vision/ui';

export function SectionAi() {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute left-4 right-4 top-4 flex justify-between text-lg md:left-8 md:right-8">
        <span>Services</span>
        <span className="text-muted-foreground">
          <Link href="/">Pale Blue Dot</Link>
        </span>
      </div>
      <div className="container flex min-h-screen flex-col justify-center">
        <div className="grid h-[580px] gap-8 overflow-auto px-4 pb-[100px] md:h-auto md:grid-cols-3 md:px-0 md:pb-0 md:pt-0">
          <div className="space-y-8">
            <Card
              title="AI Strategy Development"
              description="We craft comprehensive AI strategies tailored to your enterprise's unique needs and goals. Our approach ensures AI initiatives align with your business objectives, maximizing ROI and competitive advantage."
            />
            <Card
              title="AI Integration"
              description="Our experts seamlessly integrate AI technologies into your existing systems and workflows. We ensure smooth adoption, minimizing disruption while maximizing the transformative power of AI across your organization."
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
              title="AI-Driven Innovation"
              description="We help you leverage AI to drive innovation in products, services, and business models. Our approach turns AI from a buzzword into a powerful tool for creating new value and staying ahead of the competition."
            />
            <div className="px-8">
              <h2 className="text-center text-5xl font-semibold text-primary">
                AI isn&apos;t just a tool. It&apos;s the edge you&apos;ve been
                waiting for.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
