import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-green-400 text-zinc-950 hover:bg-green-300',
        secondary: 'border-transparent bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
        destructive: 'border-transparent bg-red-900/30 text-red-400 border-red-400/20',
        outline: 'border-zinc-700 text-zinc-400',
        green: 'border-green-400/30 bg-green-400/10 text-green-400',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
