'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useDebounceFunction } from '@/hooks/useDebounceValue';

import SearchInput from '@/components/search-input';

export default function Filters() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const { replace } = useRouter();

  const [searchValue, setSearchValue] = useState(search);

  const handleDebouncedSearch = useDebounceFunction((value) => {
    const params = new URLSearchParams();

    if (value) {
      params.set('search', value as string);
    }

    replace(`?${params.toString()}`);
  }, 300);

  function handleSearch(value: string) {
    setSearchValue(value);
    handleDebouncedSearch(value);
  }

  return <SearchInput className="min-w-[280]" value={searchValue} onChange={handleSearch} />;
}
