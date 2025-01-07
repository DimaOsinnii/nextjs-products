import type { Metadata } from 'next';
import type { SearchParams } from '@/utils/types';

import Link from 'next/link';

import Page from '@/components/page';
import ClientImage from '@/components/client-image';

import Filters from './filters';
import { PAGE_SIZE } from '@/config';
import { findProducts } from '@/db/products';

export const metadata: Metadata = {
  title: 'Products | TechCart',
  description: 'Browse the latest tech gadgets and tools in our curated catalog.',
  alternates: {
    canonical: 'https://techcart.io/products',
  },
  openGraph: {
    title: 'TechCart - Browse Our Products',
    description: 'Explore the latest and most innovative tech products available in our catalog.',
    url: 'https://techcart.io/products',
  },
};
export default async function Products(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const search = searchParams.search ?? '';
  const pageParam = searchParams.page ?? '1';
  const page = Number(pageParam) || 1;
  const offset = (page - 1) * PAGE_SIZE;

  const { data, total } = await findProducts({ search, offset });

  return (
    <Page>
      <div className="flex flex-col justify-between sm:flex-col lg:flex-row gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Product list</h1>
        <Filters />
      </div>

      {total === 0 ? <div className="text-7xl w-full text-center my-20">Not found</div> : null}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((product) => (
          <div key={product.id} className="group relative">
            <ClientImage
              alt={product.description}
              src={product.image}
              width={300}
              height={300}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link href={`/products/${product.slug}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
