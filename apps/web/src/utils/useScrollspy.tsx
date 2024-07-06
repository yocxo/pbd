// useScrollSpy.ts
import { useEffect, useState } from 'react';

const useScrollSpy = () => {
  const [targets, setTargets] = useState<HTMLElement[]>([]);
  const [links, setLinks] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const targets = document.querySelectorAll('h2') as NodeListOf<HTMLElement>;
    setTargets(Array.from(targets));
  }, []);

  useEffect(() => {
    let linksArray: HTMLElement[] = [];
    targets.map((target) => {
      linksArray.push(target);
    });
    setLinks(linksArray);
  }, [targets]);

  useEffect(() => {
    const links = document.querySelectorAll(
      '[data-scrollspy-link]',
    ) as NodeListOf<HTMLElement>;
    if (links.length < 1) return;
    const addActive = (i: number) => {
      const link = links[i] ? links[i] : links[0];
      link.classList.add('scrollspy-active');
    };
    const removeActive = (i: number) => {
      links[i].classList.remove('scrollspy-active');
    };
    const removeAllActive = () =>
      Array.from(Array(targets.length).keys()).forEach((link) =>
        removeActive(link),
      );
    const targetMargin = 100;
    let currentActive = 0;
    addActive(0);
    window.addEventListener('scroll', () => {
      const current =
        targets.length -
        [...targets]
          .reverse()
          .findIndex(
            (target) => window.scrollY >= target.offsetTop - targetMargin,
          ) -
        1;
      if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        addActive(current);
      }
    });
  }, [links, targets]);

  return links;
};

export default useScrollSpy;
