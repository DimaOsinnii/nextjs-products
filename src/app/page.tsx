import Page from '@/components/page';
import Link from 'next/link';

export const metadata = {
  title: 'Welcome to TechCart',
};

export default function Home() {
  return (
    <Page breadcrumbs={false} className="flex justify-center items-center">
      <div className="flex z-10 relative flex-col items-center text-center gap-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl">
          Welcome to t<span className="text-green-400">e</span>ch <br /> <span className="text-green-400">e</span>
          -commerce
        </h1>
        <Link
          href="/products"
          className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
        >
          Go to catalog
        </Link>
      </div>
      <div className="absolute z-0 inset-0 aspect-[1.7] w-full h-full bg-gradient-to-r from-green-100 to-white/10 animate-morph" />
    </Page>
  );
}
