export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['*.js', '*.css', '*.jpg', '*.png'],
      disallow: ['/?', '/*?*', '/*products?page*'],
    },
    sitemap: ['https://techcart.io/sitemap.xml'],
    host: 'https://techcart.io',
  };
}
