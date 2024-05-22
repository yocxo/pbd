'use client';

import * as React from 'react';

import { ThemeProvider, ThemeToggle } from '@pbd/ui/theme';
import { Toaster } from '@pbd/ui/toast';

import { TRPCReactProvider } from '#/trpc/react';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TRPCReactProvider>{children}</TRPCReactProvider>
      <div className="absolute bottom-4 right-4">
        <ThemeToggle />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
