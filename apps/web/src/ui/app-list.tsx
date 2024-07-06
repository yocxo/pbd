import IntegrationImg01 from '~/public/images/integration-01.svg';
import IntegrationImg02 from '~/public/images/integration-02.svg';
import IntegrationImg03 from '~/public/images/integration-03.svg';
import IntegrationImg04 from '~/public/images/integration-04.svg';
import IntegrationImg05 from '~/public/images/integration-05.svg';
import IntegrationImg06 from '~/public/images/integration-06.svg';
import IntegrationImg07 from '~/public/images/integration-07.svg';
import IntegrationImg08 from '~/public/images/integration-08.svg';
import IntegrationImg09 from '~/public/images/integration-09.svg';
import IntegrationImg10 from '~/public/images/integration-10.svg';
import IntegrationImg11 from '~/public/images/integration-11.svg';
import IntegrationImg12 from '~/public/images/integration-12.svg';
import IntegrationImg13 from '~/public/images/integration-13.svg';
import IntegrationImg14 from '~/public/images/integration-14.svg';
import IntegrationImg15 from '~/public/images/integration-15.svg';
import IntegrationImg16 from '~/public/images/integration-16.svg';
import IntegrationImg17 from '~/public/images/integration-17.svg';
import IntegrationImg18 from '~/public/images/integration-18.svg';
import IntegrationImg19 from '~/public/images/integration-19.svg';
import IntegrationImg20 from '~/public/images/integration-20.svg';
import IntegrationImg21 from '~/public/images/integration-21.svg';

import AppCard from '#/ui/app-card';

export default function AppList() {
  const apps01 = [
    {
      name: 'Google Drive',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg01,
      link: '#0',
      badge: true,
    },
    {
      name: 'Linear',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg02,
      link: '#0',
    },
    {
      name: 'Framer',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg03,
      link: '#0',
      badge: true,
    },
    {
      name: 'Retool',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg04,
      link: '#0',
    },
    {
      name: 'Webflow',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg05,
      link: '#0',
      badge: true,
    },
    {
      name: 'Syrus Inc.',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg06,
      link: '#0',
    },
    {
      name: 'Decipad',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg07,
      link: '#0',
    },
    {
      name: 'Zapier',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg08,
      link: '#0',
      badge: true,
    },
    {
      name: 'Bonsai',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg09,
      link: '#0',
      badge: true,
    },
    {
      name: 'GitHub',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg10,
      link: '#0',
      badge: true,
    },
    {
      name: 'Poppins',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg11,
      link: '#0',
    },
    {
      name: 'Jotform',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg12,
      link: '#0',
    },
  ];

  const apps02 = [
    {
      name: 'Miro',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg13,
      link: '#0',
      badge: true,
    },
    {
      name: 'WeTransfer',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg14,
      link: '#0',
    },
    {
      name: 'Hotjar',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg15,
      link: '#0',
    },
    {
      name: 'GitLab',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg16,
      link: '#0',
      badge: true,
    },
    {
      name: 'Coda',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg17,
      link: '#0',
      badge: true,
    },
    {
      name: 'Airtable',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg18,
      link: '#0',
    },
  ];

  const apps03 = [
    {
      name: 'Klarna',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg19,
      link: '#0',
    },
    {
      name: 'Trustpilot',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg20,
      link: '#0',
    },
    {
      name: 'YouTube',
      description:
        'Simple simplifies the process of building sites, landing pages, and any apps.',
      image: IntegrationImg21,
      link: '#0',
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="space-y-10">
            {/* Section #1 */}
            <section>
              <div className="mb-5 flex items-center justify-between space-x-2">
                <h2 className="truncate text-xl font-bold">Noteworthy</h2>
                <a
                  className="shrink-0 text-sm font-medium text-blue-500 transition hover:text-blue-600"
                  href="#0"
                >
                  View All
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {apps01.map((app, index) => (
                  <div key={index} className="group">
                    <AppCard app={app}>{app.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>

            {/* Section #2 */}
            <section>
              <div className="mb-5 flex items-center justify-between space-x-2">
                <h2 className="truncate text-xl font-bold">Trending</h2>
                <a
                  className="shrink-0 text-sm font-medium text-blue-500 transition hover:text-blue-600"
                  href="#0"
                >
                  View All
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {apps02.map((app, index) => (
                  <div key={index} className="group">
                    <AppCard app={app}>{app.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>

            {/* Section #3 */}
            <section>
              <div className="mb-5 flex items-center justify-between space-x-2">
                <h2 className="truncate text-xl font-bold">Coming soon</h2>
                <a
                  className="shrink-0 text-sm font-medium text-blue-500 transition hover:text-blue-600"
                  href="#0"
                >
                  View All
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {apps03.map((app, index) => (
                  <div key={index} className="group">
                    <AppCard app={app}>{app.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Load more */}
          <div className="mt-12 text-center">
            <button className="btn-sm min-w-[220px] bg-gray-800 py-1.5 text-gray-200 shadow hover:bg-gray-900">
              Load more{' '}
              <span className="ml-2 tracking-normal text-gray-500">↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
