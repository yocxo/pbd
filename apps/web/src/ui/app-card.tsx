import Image from 'next/image';
import Badge from '~/public/images/badge.svg';

export default function AppCard({
  app,
  children,
}: {
  app: {
    name: string;
    image: any;
    link: string;
    badge?: boolean;
  };
  children: React.ReactNode;
}) {
  return (
    <article className="group relative flex w-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] transition before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-white">
      <svg
        className="absolute right-5 top-5 transition-transform group-hover:rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width={9}
        height={9}
      >
        <path
          className="fill-gray-400"
          d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
        />
      </svg>
      <div className="mb-3 inline-flex">
        <div className="relative">
          <Image
            className="rounded-full shadow-lg shadow-black/[0.03]"
            src={app.image}
            width={48}
            height={48}
            alt={app.name}
          />
          {app.badge && (
            <Image
              className="absolute right-0 top-0"
              src={Badge}
              width={16}
              height={16}
              alt="Badge"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      <h3 className="mb-1">
        <a className="font-bold before:absolute before:inset-0" href={app.link}>
          {app.name}
        </a>
      </h3>
      <p className="text-sm text-gray-700">{children}</p>
    </article>
  );
}
