import { findProductsSlugs } from '@/db/products';

export async function GET() {
  const slugs = await findProductsSlugs();

  return Response.json(slugs);
}
