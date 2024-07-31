'use client';

import debounce from 'lodash/debounce';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { Input } from '@/components/atoms/Input';

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const debouncedSearch = useCallback(
    debounce(
      (pathname: string, params: URLSearchParams) => replace(`${pathname}?${params.toString()}`),
      300
    ),
    []
  );

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) params.set('query', term);
    else params.delete('query');
    debouncedSearch(pathname, params);
  };

  return (
    <>
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
};

export { SearchInput };
