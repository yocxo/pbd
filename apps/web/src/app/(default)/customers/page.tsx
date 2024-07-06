import Cta from '#/ui/cta-alternative';
import WallOfLove from '#/ui/wall-of-love';
import Hero from './hero';

export const metadata = {
  title: 'Customers - Simple',
  description: 'Page description',
};

export default function Customers() {
  return (
    <>
      <Hero />
      <WallOfLove />
      <Cta
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
