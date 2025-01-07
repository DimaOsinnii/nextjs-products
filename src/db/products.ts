import productsData from './products.json';
import { PAGE_SIZE } from '@/config';

interface FindProductsParams {
  search?: string;
  limit: number;
  offset: number;
}
export async function findProductsSlugs() {
  return productsData.map(({ slug }) => slug);
}

export async function findProducts(params: Partial<FindProductsParams> = {}) {
  const { search = '', limit = PAGE_SIZE, offset = 0 } = params;
  let products = productsData;

  if (search) {
    const searchKeywords = search.toLowerCase().split(' ');

    products = products.filter((product) => {
      const keywords = [...product.name.toLowerCase().split(' '), ...product.description.toLowerCase().split(' ')];
      return searchKeywords.some((searchKeyword) => keywords.includes(searchKeyword));
    });
  }

  const total = products.length;
  products = products.slice(offset, offset + limit);

  return { data: products, total };
}

export async function findProductBySlug(params: { slug: string }) {
  return productsData.find((product) => product.slug === params.slug);
}
