import Cta from '#/ui/cta';
import Features from '#/ui/features-home';
import FeaturesPlanet from '#/ui/features-planet';
import Hero from '#/ui/home/hero';
import LargeTestimonial from '#/ui/large-testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <LargeTestimonial />
      <FeaturesPlanet />
      <Features />
      <Cta />
    </>
  );
}
