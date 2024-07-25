import { ReactNode } from 'react';

import { ThemeProvider } from '@/components/providers/ThemeProvider';

interface Props {
  children: ReactNode;
}

// This is the place responsible for grouping all providers from the app
export const MainProvider = ({ children }: Props) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    {children}
  </ThemeProvider>
);
