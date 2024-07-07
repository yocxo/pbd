import Cta from '#/ui/home/cta';
import { Hero } from '#/ui/home/hero';
import { Quote } from '#/ui/home/quote';
import { Services } from '#/ui/home/services';
import { Why } from '#/ui/home/why';
import Footer from '#/ui/layout/footer';

export default function Home() {
  return (
    <div className="p-2 md:p-4">
      <Hero />
      <Quote />
      <Why />
      <Services />
      <Cta />
      <Footer />
    </div>
  );
}
