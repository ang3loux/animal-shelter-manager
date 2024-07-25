import * as React from 'react';

import { cn } from '@/lib/utils';

const HEADER_STYLES = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight'
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const createHeading = (tag: keyof JSX.IntrinsicElements, style: string) => {
  const Component = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, ...props }, ref) => {
      return React.createElement(
        tag,
        { className: cn(style, className), ref, ...props },
        props.children
      );
    }
  );
  Component.displayName = tag.toUpperCase();

  return Component;
};

export const H1 = createHeading('h1', HEADER_STYLES.h1);
export const H2 = createHeading('h2', HEADER_STYLES.h2);
export const H3 = createHeading('h3', HEADER_STYLES.h3);
export const H4 = createHeading('h4', HEADER_STYLES.h4);
