'use client';

import SearchInput from '@/components/search-input';
import { useState } from 'react';
import { useDebounceFunction } from '@/hooks/useDebounceValue';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Filters() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const { replace } = useRouter();

  const [searchValue, setSearchValue] = useState(search);

  const handleDebouncedSearch = useDebounceFunction((value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('search', value as string);
    } else {
      params.delete('search'); // Remove the search param if the value is empty
    }

    replace(`?${params.toString()}`);
  }, 300);

  function handleSearch(value: string) {
    setSearchValue(value);
    handleDebouncedSearch(value);
  }

  return <SearchInput className="min-w-[280]" value={searchValue} onChange={handleSearch} />;
}
