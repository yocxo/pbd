import Cta from '#/ui/cta-alternative';
import Faqs from '#/ui/faqs-02';
import Hero from './hero';

export const metadata = {
  title: 'Support - Simple',
  description: 'Page description',
};

export default function Support() {
  return (
    <>
      <Hero />
      <Faqs />
      <Cta
        className="overflow-hidden"
        heading="Cannot find what you're looking for?"
        buttonText="Contact Us"
        buttonLink="#0"
      />
    </>
  );
}
