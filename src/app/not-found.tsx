import type { Metadata } from 'next';
import Page from '@/components/page';

export const revalidate = false;

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://techcart.io/404',
  },
};

export default async function MainLayout() {
  return (
    <>
      <Page breadcrumbs={false} className="flex justify-center items-center">
        <h1 className="text-9xl">Not Found</h1>
      </Page>
    </>
  );
}
