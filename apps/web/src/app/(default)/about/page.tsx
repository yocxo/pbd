import Career from '#/ui/career';
import Cta from '#/ui/cta-02';
import Process from '#/ui/process';
import Stats from '#/ui/stats';
import Team from '#/ui/team';
import Intro from './intro';
import Story from './story';

export const metadata = {
  title: 'About - Simple',
  description: 'Page description',
};

export default function About() {
  return (
    <>
      <Intro />
      <Story />
      <Stats />
      <Team />
      <Career />
      <Process />
      <Cta />
    </>
  );
}
