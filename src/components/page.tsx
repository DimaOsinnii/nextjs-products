import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import Breadcrumbs from '@/components/breadcrumbs';

interface PageProps {
  breadcrumbs?: boolean;
  className?: string;
}

export default function Page({ children, className, breadcrumbs = true }: PropsWithChildren<PageProps>) {
  return (
    <main className={clsx('container max-w-2xl lg:max-w-7xl p-5 my-0 mx-auto min-h-[calc(100vh_-_72px)]', className)}>
      {breadcrumbs ? <Breadcrumbs /> : null}
      {children}
    </main>
  );
}
