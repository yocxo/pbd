import type { Metadata, Viewport } from 'next';

import { cn } from '@pbd/ui';

import { fontOswald, fontQuattrocento } from '#/fonts';

import '#/app/globals.css';

import { siteConfig } from '#/config/site';
import { socialConfig } from '#/config/social';
import { SITE_URL } from '#/lib/constants';
import { Providers } from '#/lib/providers';
import Footer from '#/ui/layout/footer';
import Header from '#/ui/layout/header';

export const metadata: Metadata = {
  metadataBase: new URL(
    // eslint-disable-next-line no-restricted-properties
    process.env.VERCEL_ENV === 'production' ? siteConfig.url : SITE_URL,
  ),
  title: {
    template: `%s :: ${siteConfig.name}`,
    default: `${siteConfig.name} :: A Different Perspective`,
  },
  description: siteConfig.description,
  keywords: [
    'Top Management Consulting Firm',
    'Best Management Consulting Company',
    "Pakistan's Best Management Consulting Firm",
    'Rehan Shaikh',
    'Pale Blue Dot',
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  category: 'Management Consulting Firm',
  robots: {
    follow: false,
    index: false,
  },
  openGraph: {
    type: 'website',
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: socialConfig.links.twitter,
    creator: socialConfig.links.twitter,
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBFBF8' },
    { media: '(prefers-color-scheme: dark)', color: '#1C1718' },
  ],
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-serif text-foreground antialiased',
          fontQuattrocento.variable,
          fontOswald.variable,
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex flex-1 flex-col">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
