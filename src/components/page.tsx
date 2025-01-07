import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import Breadcrumbs from '@/components/breadcrumbs';

interface PageProps {
  breadcrumbs?: boolean;
  className?: string;
}

export default function Page({ children, className, breadcrumbs = true }: PropsWithChildren<PageProps>) {
  return (
    <main
      className={clsx('container max-w-2xl lg:max-w-7xl px-5 py-10 my-0 mx-auto min-h-[calc(100vh_-_72px)]', className)}
    >
      {breadcrumbs ? <Breadcrumbs /> : null}
      {children}
    </main>
  );
}
