import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { MainProvider } from '@/components/providers/MainProvider';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Dashboard page | Animal Shelter Manager',
  description: '🐱🐶 Animal shelter management system for inventory, pets, and adopters'
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
};

export default RootLayout;
