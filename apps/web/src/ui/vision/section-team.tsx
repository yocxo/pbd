import Image from 'next/image';
import Link from 'next/link';

import { Card } from '#/ui/vision/ui';

export function SectionTeam() {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute left-4 right-4 top-4 flex justify-between text-lg md:left-8 md:right-8">
        <span>Who we are</span>
        <span className="text-[#878787]">
          <Link href="/">midday.ai</Link>
        </span>
      </div>
      <div className="container flex min-h-screen flex-col justify-center">
        <div className="grid h-[580px] gap-8 overflow-auto px-4 pb-[100px] md:h-auto md:grid-cols-3 md:px-0 md:pb-0 md:pt-0">
          <div className="space-y-8">
            <Card className="items-start space-y-0">
              <Image
                src="/images/ai.jpg"
                alt="Pontus"
                width={76}
                height={76}
                quality={100}
                className="mb-4"
              />

              <h2 className="text-xl">Pontus Abrahamsson</h2>
              <span>Co-founder</span>

              <p className="!mt-2 text-sm text-[#878787]">
                Fullstack developer. Been running his own studio for 10 years
                offering his service to big companies like Klarna, Viaplay and
                Expressen.
              </p>
            </Card>

            <Card className="items-start space-y-0">
              <Image
                src="/images/ai.jpg"
                alt="Viktor"
                width={76}
                height={76}
                quality={100}
                className="mb-4"
              />

              <h2 className="text-xl">Viktor Hofte</h2>
              <span className="mb-4">Co-founder</span>

              <p className="!mt-2 text-sm text-[#878787]">
                Designer. Been running his own studio for 2 years offering his
                service to a range of early stage startups but also big
                companies like Juni and Estrid. <br />
                <br />
                Prior to this he was Senior Design Lead at Klarna. He also
                worked at DDB Stockholm working with Clients such as HM and
                Volkswagen.
              </p>
            </Card>
          </div>
          <div>
            <Image
              src="/images/ai.jpg"
              alt="Founders"
              width={650}
              height={875}
              quality={100}
            />
          </div>
          <div className="ml-auto flex w-full items-center space-y-8">
            <h2 className="text-center text-[64px] font-medium leading-tight">
              “The speed and velocity we have together is unmatched.”
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
