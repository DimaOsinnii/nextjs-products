import { findProducts } from '@/db/products';
import { NextRequest } from 'next/server';
import { PAGE_SIZE } from '@/config';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get('search') ?? '';
  const pageParam = searchParams.get('page');
  const page = Number(pageParam) || 1;

  const offset = (page - 1) * PAGE_SIZE;

  const response = await findProducts({ search, offset });

  return Response.json(response);
}
