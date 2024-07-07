import Link from 'next/link';

export function SectionVision() {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute left-8 right-8 top-4 flex justify-between text-lg">
        <span>Our vision</span>
        <span className="text-[#878787]">
          <Link href="/">midday.ai</Link>
        </span>
      </div>
      <div className="container flex min-h-screen flex-col justify-center">
        <h1 className="px-4 text-center text-[45px] font-medium leading-none md:px-0 md:text-[122px]">
          Our mission is to be the #1 OS for businesses.
        </h1>
      </div>
    </div>
  );
}
