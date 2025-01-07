import { findProductBySlug } from '@/db/products';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const response = await findProductBySlug({ slug });

  return Response.json(response);
}
