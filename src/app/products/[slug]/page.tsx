import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { findProductBySlug, findProductsSlugs } from '@/db/products';

import Page from '@/components/page';
import ClientImage from '@/components/client-image';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await findProductsSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Partial<Metadata>> {
  const slug = (await params).slug;
  const product = await findProductBySlug({ slug });

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | TechCart`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Buy Now at TechCart`,
      description: product.description,
      url: `https://techcart.io/products/${slug}`,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function Product({ params }: { params: Params }) {
  const { slug } = await params;

  const product = await findProductBySlug({ slug });

  if (!product) {
    notFound();
  }

  return (
    <Page>
      <div className="flex items-center lg:items-start flex-col justify-between lg:flex-row pt-10 md:pt-20 gap-10">
        <div className="relative overflow-hidden bg-gray-300 rounded border border-gray-300 ">
          <ClientImage
            width={500}
            height={500}
            src={product.image}
            alt={product.description}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col h-full gap-8">
          <div className="flex flex-col gap-5 flex-1">
            <h1 className="text-5xl">{product.name}</h1>
            <p className="text-2xl">{product.description}</p>
          </div>
          <div className="flex gap-4">
            <span className="text-4xl">${product.price}</span>
            <button className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}
