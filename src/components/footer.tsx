import Link from 'next/link';
import Image from 'next/image';

import { navigation } from '@/config';

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-10">
      <div className="flex flex-col mx-auto gap-20  max-w-2xl lg:max-w-7xl px-5  justify-between ">
        <div className="flex justify-between">
          <Link href="/" className="-ml-3.5 p-1.5">
            <span className="sr-only">Store</span>
            <Image src="/logo.svg" alt="Next.js logo" width={180} height={38} priority />
          </Link>
          <div className="flex flex-col gap-3 self-end">
            {navigation.map(({ href, title }) => (
              <Link key={href} href={href} className="text-sm/2 font-semibold text-white hover:text-green-400">
                {title}
              </Link>
            ))}
          </div>
        </div>

        <span className="self-center">Copyright © {new Date().getFullYear()} TechCart. All rights reserved.</span>
      </div>
    </footer>
  );
}
