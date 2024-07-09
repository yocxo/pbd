import Cta from '#/ui/home/cta';
import { Hero } from '#/ui/home/hero';
import { Quote } from '#/ui/home/quote';
import { Services } from '#/ui/home/services';
import { Why } from '#/ui/home/why';
import Footer from '#/ui/layout/footer';
import { PbdContainer } from '#/ui/layout/pbd-container';

export default function Home() {
  return (
    <>
      <PbdContainer>
        <Hero />
        <Quote />
        <Why />
        <Services />
        <Cta />
      </PbdContainer>
      <Footer />
    </>
  );
}
