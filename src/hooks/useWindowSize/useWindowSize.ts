import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

interface WindowSize {
  width?: number;
  height?: number;
  tailwindBreakpoint: string;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({ tailwindBreakpoint: '' });

  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth;
      const tailwindBreakpoint = (() => {
        if (width >= BREAKPOINTS['2xl']) return '2xl';
        if (width >= BREAKPOINTS.xl) return 'xl';
        if (width >= BREAKPOINTS.lg) return 'lg';
        if (width >= BREAKPOINTS.md) return 'md';
        if (width >= BREAKPOINTS.sm) return 'sm';

        return 'xs';
      })();

      setWindowSize({ width, height: window.innerHeight, tailwindBreakpoint });
    }, 200);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export { useWindowSize };
