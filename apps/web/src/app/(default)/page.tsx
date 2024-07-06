import BusinessCategories from '#/ui/business-categories';
import Cta from '#/ui/cta';
import Features from '#/ui/features-home';
import FeaturesPlanet from '#/ui/features-planet';
import Hero from '#/ui/home/hero';
import LargeTestimonial from '#/ui/large-testimonial';
import TestimonialsCarousel from '#/ui/testimonials-carousel';

export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
};

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <LargeTestimonial />
      <FeaturesPlanet />
      <Features />
      <TestimonialsCarousel />
      <Cta />
    </>
  );
}
