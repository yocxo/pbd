import Cal from '@calcom/embed-react';
import { useTheme } from 'next-themes';

export function SectionBook() {
  const { theme } = useTheme();
  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute left-4 right-4 top-4 flex justify-between text-lg md:left-8 md:right-8">
        <span>Book a meeting</span>
      </div>
      <div className="container flex min-h-screen flex-col justify-center">
        <div className="h-full px-4 md:h-[800px] md:px-0">
          <Cal
            calLink="palebluedot/30min"
            config={{
              theme: theme as 'light' | 'dark',
            }}
          />
        </div>
      </div>
    </div>
  );
}
