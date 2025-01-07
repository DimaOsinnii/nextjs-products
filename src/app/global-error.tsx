'use client';
import type { Metadata } from 'next';

import Page from '@/components/page';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const revalidate = false;

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://techcart.io/505',
  },
};

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <Header />
        <Page>
          <h1 className="text-9xl">Something went wrong!</h1>
          <button
            className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            onClick={() => reset()}
          >
            Try again
          </button>
        </Page>
        <Footer />
      </body>
    </html>
  );
}
