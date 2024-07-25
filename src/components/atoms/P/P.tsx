import * as React from 'react';

import { cn } from '@/lib/utils';

export interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const P = React.forwardRef<HTMLParagraphElement, PProps>(({ className, ...props }, ref) => {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} ref={ref} {...props} />
  );
});
P.displayName = 'P';
