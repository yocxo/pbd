import React from 'react';

import { cn } from '@pbd/ui';

interface PbdContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PbdContainer({ children, className }: PbdContainerProps) {
  return <div className={cn('p-4 md:p-8', className)}>{children}</div>;
}
