import { cn } from '@pbd/ui';

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Card({ title, description, children, className }: CardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center space-y-4 rounded-xl border bg-card px-6 pb-6 pt-8 shadow-md',
        className,
      )}
    >
      {title && <h2 className="text-2xl font-semibold">{title}</h2>}
      {description && (
        <p className="text-pretty text-center text-muted-foreground">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
