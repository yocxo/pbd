import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { cn } from '@pbd/ui';

import '#/app/styles/globals.css';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
            <Footer border={true} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
