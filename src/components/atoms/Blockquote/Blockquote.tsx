import * as React from 'react';

import { cn } from '@/lib/utils';

export interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {}

export const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, ...props }, ref) => {
    return (
      <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} ref={ref} {...props} />
    );
  }
);
Blockquote.displayName = 'Blockquote';
