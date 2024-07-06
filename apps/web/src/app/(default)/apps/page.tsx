import AppList from '#/ui/app-list';
import Cta from '#/ui/cta-alternative';
import Hero from './hero';

export const metadata = {
  title: 'Apps - Simple',
  description: 'Page description',
};

export default function Apps() {
  return (
    <>
      <Hero />
      <AppList />
      <Cta
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
