'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useHotkeys } from 'react-hotkeys-hook';
import { FaXTwitter } from 'react-icons/fa6';

import { cn } from '@pbd/ui';
import { Button } from '@pbd/ui/button';
import { useCarousel } from '@pbd/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@pbd/ui/dialog';
import { Icons } from '@pbd/ui/icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@pbd/ui/tooltip';

import { CopyInput } from '#/ui/copy-input';

interface Props {
  views: number;
}

const popupCenter = ({
  url,
  title,
  w,
  h,
}: {
  url: string;
  title: string;
  w: number;
  h: number;
}) => {
  const dualScreenLeft = window.screenX;
  const dualScreenTop = window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    `
    scrollbars=yes,
    width=${w / systemZoom}, 
    height=${h / systemZoom}, 
    top=${top}, 
    left=${left}
    `,
  );

  return newWindow;
};

export function CarouselToolbar({ views }: Props) {
  const api = useCarousel();

  useHotkeys('arrowRight', () => api.scrollNext(), [api]);
  useHotkeys('arrowLeft', () => api.scrollPrev(), [api]);

  const handleOnShare = () => {
    const popup = popupCenter({
      url: 'https://twitter.com/intent/tweet?text=Look at this deck by Pale Blue Dot. https://seepaleblue.com/vision. Inspired by @middayai 🙌🏽',
      title: 'Share',
      w: 800,
      h: 400,
    });

    popup?.focus();
  };

  return (
    <Dialog>
      <div className="fixed bottom-5 left-0 flex w-full justify-center">
        <AnimatePresence>
          <motion.div animate={{ y: views > 0 ? 0 : 100 }} initial={{ y: 100 }}>
            <TooltipProvider delayDuration={20}>
              <div className="flex h-10 items-center space-x-4 rounded-md border-border bg-muted px-4 py-2 shadow-md backdrop-blur-lg backdrop-filter">
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex cursor-not-allowed items-center space-x-2 border-r-[1px] border-border pr-4 text-white">
                      <Icons.Visibility size={18} className="text-alternate" />

                      <span className="text-sm text-foreground dark:text-white">
                        {Intl.NumberFormat('en', {
                          notation: 'compact',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 1,
                        }).format(views)}
                      </span>
                    </div>
                  </TooltipTrigger>

                  <TooltipContent
                    className="rounded-sm border px-3 py-1 text-white dark:text-background"
                    sideOffset={25}
                  >
                    <span className="text-xs">Views</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" onClick={() => api.scrollTo(100)}>
                      <Icons.Calendar size={18} className="text-alternate" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="rounded-sm border px-3 py-1 text-white dark:text-background"
                    sideOffset={25}
                  >
                    <span className="text-xs">Book a meeting</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <DialogTrigger asChild>
                      <Icons.Share
                        size={18}
                        className="-mt-[1px] text-alternate"
                      />
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent
                    className="rounded-sm border px-3 py-1 text-white dark:text-background"
                    sideOffset={25}
                  >
                    <span className="text-xs">Share</span>
                  </TooltipContent>
                </Tooltip>

                <div className="flex items-center border-l-[1px] border-border pl-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={!api.canScrollPrev}
                        className={cn(!api.canScrollPrev && 'opacity-50')}
                        onClick={() => {
                          api.scrollPrev();
                        }}
                      >
                        <Icons.ChevronLeft className="h-6 w-6 text-foreground dark:text-white" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="rounded-sm border px-3 py-1 text-white dark:text-background"
                      sideOffset={25}
                    >
                      <span className="text-xs">Previous slide</span>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={!api.canScrollNext}
                        className={cn(!api.canScrollNext && 'opacity-50')}
                        onClick={() => {
                          api.scrollNext();
                        }}
                      >
                        <Icons.ChevronRight className="h-6 w-6 text-foreground dark:text-white" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="rounded-sm border px-3 py-1 text-white dark:text-background"
                      sideOffset={25}
                    >
                      <span className="text-xs">Next slide</span>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </TooltipProvider>
          </motion.div>
        </AnimatePresence>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle>Share</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Share this with your CEO or Chair.
          </DialogDescription>

          <div className="grid gap-6 py-4">
            <CopyInput value="https://seepaleblue.com/vision" />
            <Button
              className="flex h-10 w-full items-center space-x-2"
              onClick={handleOnShare}
            >
              <span>Share on</span>
              <FaXTwitter />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
