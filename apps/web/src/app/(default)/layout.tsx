'use client';

import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { Providers } from '#/lib/providers';
import Footer from '#/ui/layout/footer';
import Header from '#/ui/layout/header';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <Providers>
      <div>
        <Header />

        <main className="grow">{children}</main>

        <Footer border={true} />
      </div>
    </Providers>
  );
}
