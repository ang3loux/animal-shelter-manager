import React from 'react';
import type { Preview } from '@storybook/react';
import { Inter } from 'next/font/google';
import * as NextImage from 'next/image';
import { ThemeProvider } from '../src/components/providers/ThemeProvider';

import '../src/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

const withThemeProvider = (storyFn) => {
  const classesToAdd = `font-sans antialiased ${inter.variable}`.split(' ');

  React.useEffect(() => {
    return () => classesToAdd.forEach((className) => document.body.classList.remove(className));
  }, []);

  classesToAdd.forEach((className) => document.body.classList.add(className));

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {storyFn()}
    </ThemeProvider>
  );
};

// This is the place responsible for grouping all decorators from the storybook app
export const decorators = [withThemeProvider];

export default preview;
