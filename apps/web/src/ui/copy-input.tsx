'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@pbd/ui';
import { Icons } from '@pbd/ui/icons';

interface Props {
  value: string;
  className?: string;
}

export function CopyInput({ value, className }: Props) {
  const [isCopied, setCopied] = useState(false);

  const handleClipboard = async () => {
    try {
      setCopied(true);

      await navigator.clipboard.writeText(value);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      /* empty */
    }
  };

  return (
    <div
      className={cn(
        'relative flex w-full items-center border border-border px-4 py-2',
        className,
      )}
    >
      <div className="pr-7 text-sm text-[#878787]">{value}</div>
      <button type="button" onClick={handleClipboard}>
        <span className="sr-only">Copy</span>
        <motion.div
          className="absolute right-4 top-2.5"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: isCopied ? 0 : 1, scale: isCopied ? 0 : 1 }}
        >
          <Icons.Copy />
        </motion.div>

        <motion.div
          className="absolute right-4 top-2.5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isCopied ? 1 : 0, scale: isCopied ? 1 : 0 }}
        >
          <Icons.Check />
        </motion.div>
      </button>
    </div>
  );
}
