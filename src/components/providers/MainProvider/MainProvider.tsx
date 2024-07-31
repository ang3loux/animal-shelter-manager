import { RadixProvider } from '@/components/providers/RadixProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

interface Props {
  children: React.ReactNode;
}

// This is the place responsible for grouping all providers from the app
export const MainProvider = ({ children }: Props) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <RadixProvider>{children}</RadixProvider>
  </ThemeProvider>
);
