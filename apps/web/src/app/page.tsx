import Cta from '#/ui/home/cta';
import { Hero } from '#/ui/home/hero';
import { Quote } from '#/ui/home/quote';
import { Services } from '#/ui/home/services';
import { Why } from '#/ui/home/why';
import Footer from '#/ui/layout/footer';
import Logo from '#/ui/shared/logo';

export default function Home() {
  return (
    <div className="p-2 md:p-4">
      <Logo className="absolute left-6 top-6 z-50 h-8 w-auto sm:size-10 md:left-8 md:top-8" />
      <Hero />
      <Quote />
      <Why />
      <Services />
      <Cta />
      <Footer />
    </div>
  );
}
