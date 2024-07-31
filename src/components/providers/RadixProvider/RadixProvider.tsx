'use client';

import { TooltipProvider, TooltipProviderProps } from '@radix-ui/react-tooltip';

interface RadixProviderProps extends TooltipProviderProps {}

export const RadixProvider = ({ children, ...props }: RadixProviderProps) => (
  <TooltipProvider {...props}>{children}</TooltipProvider>
);
