import { SearchParams } from '@/utils/types';

interface FetcherOptions {
  query?: Awaited<SearchParams>;
  method?: string;
}

export default async function fetcher<D = unknown>(
  url: string,
  { method = 'GET', query }: FetcherOptions = {},
): Promise<D> {
  const requestUrl = new URL(url, 'http://localhost:3000');

  //Basic implementation
  if (query) {
    Object.entries(query)
      .filter((entry) => !!entry[1])
      .forEach(([key, value]) => {
        if (Array.isArray(value)) {
          requestUrl.searchParams.append(key, value.join(','));
        } else {
          requestUrl.searchParams.append(key, String(value));
        }
      });
  }

  const request = new Request(requestUrl, { method });

  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${requestUrl.toString()}: ${response.statusText}`);
  }

  return await response.json();
}
