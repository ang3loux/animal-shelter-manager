import { usePathname } from 'next/navigation';

function usePathSegments() {
  const path = usePathname();
  const [_empty, ...chunks] = path.split('/');

  return chunks;
}

export { usePathSegments };
