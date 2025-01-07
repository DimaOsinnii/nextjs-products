'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Crumb({ href, title = '', isLast }: { href: string; title: string; isLast: boolean }) {
  title = title.toUpperCase();

  return isLast ? (
    <li className="text-sm">
      <span aria-current="page" className="font-medium text-gray-500">
        {title}
      </span>
    </li>
  ) : (
    <li>
      <div className="flex items-center">
        <Link href={href} className="mr-2 text-sm font-medium text-gray-900">
          {title}
        </Link>
        <svg
          fill="currentColor"
          width={16}
          height={20}
          viewBox="0 0 16 20"
          aria-hidden="true"
          className="h-5 w-4 text-gray-300"
        >
          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
        </svg>
      </div>
    </li>
  );
}

export default function Breadcrumbs() {
  const pathname = usePathname()?.split('/').filter(Boolean);

  const crumbs = pathname.map((crumb, idx) => ({
    title: decodeURI(crumb.replace(/[+\-]/g, ' ')),
    href: `/${pathname.slice(0, idx + 1).join('/')}`,
  }));

  crumbs.unshift({ title: 'home', href: '/' });

  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol role="list" className="flex items-center">
        {crumbs.map(({ title, href }, idx, array) => (
          <Crumb key={title} href={href} title={title} isLast={idx === array.length - 1} />
        ))}
      </ol>
    </nav>
  );
}
