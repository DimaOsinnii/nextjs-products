import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TechCart',
    short_name: 'TechCart',
    description:
      'Discover and shop the latest tech gadgets, tools, and accessories at TechCart. Your ultimate tech shopping destination.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4ade80',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
