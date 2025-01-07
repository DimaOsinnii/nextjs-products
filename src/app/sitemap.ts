import fetcher from '@/utils/fetcher';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await fetcher<string[]>('/api/products/slugs');

  return [
    {
      url: 'https://techcart.io',
      lastModified: new Date(),
      changeFrequency: 'monthly', // This is now a valid literal type
      priority: 1,
    },
    {
      url: 'https://techcart.io/products',
      lastModified: new Date(),
      changeFrequency: 'monthly', // This is now a valid literal type
      priority: 0.8,
    },
    ...slugs.map((slug) => ({
      url: `https://techcart.io/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
