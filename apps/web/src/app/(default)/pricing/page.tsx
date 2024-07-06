import ComparePlans from '#/ui/compare-plans';
import Cta from '#/ui/cta-alternative';
import Faqs from '#/ui/faqs';
import PricingTables from '#/ui/pricing-tables';
import TestimonialsGrid from '#/ui/testimonials-grid';

export const metadata = {
  title: 'Pricing - Simple',
  description: 'Page description',
};

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <ComparePlans />
      <TestimonialsGrid />
      <Faqs />
      <Cta
        className="overflow-hidden"
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
