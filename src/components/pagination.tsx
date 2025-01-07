'use client';

import clsx from 'clsx';
import { calculatePaginationRange } from '@/utils/calculate-pagination-range';
import { useRouter, useSearchParams } from 'next/navigation';
import { PAGE_SIZE } from '@/config';

interface PaginationProps {
  totalCount: number;
  siblingCount?: number;
  pageSize: number;
}

export default function Pagination(props: PaginationProps) {
  const { pageSize = PAGE_SIZE, totalCount, siblingCount = 1 } = props;
  const { replace } = useRouter();

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function onPageChange(page: number) {
    const urlSearchParams = new URLSearchParams(searchParams);

    urlSearchParams.set('page', String(page));
    replace(`?${urlSearchParams.toString()}`);
  }

  function onNext() {
    onPageChange(currentPage + 1);
  }

  function onPrevious() {
    onPageChange(currentPage - 1);
  }

  const paginationRange = calculatePaginationRange({ pageSize, currentPage, totalCount, siblingCount });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];
  const isPrevBtnDisabled = currentPage === 1;
  const isNextBtnDisabled = currentPage === lastPage;

  return (
    <div className="w-full flex items-center justify-between border-t border-gray-200 bg-white py-3">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={onPrevious}
          disabled={isPrevBtnDisabled}
          className="disabled:pointer-events-none disabled:cursor-default disabled:opacity-40 relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={isNextBtnDisabled}
          className="disabled:pointer-events-none disabled:cursor-default disabled:opacity-40 relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{currentPage * pageSize - pageSize + 1}</span> to{' '}
            <span className="font-medium">{Math.min(currentPage * pageSize, totalCount)}</span> of{' '}
            <span className="font-medium">{totalCount}</span> results
          </p>
        </div>
        <div>
          <ul className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <li>
              <button
                disabled={isPrevBtnDisabled}
                className={
                  'disabled:pointer-events-none disabled:cursor-default disabled:opacity-40 cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                }
                onClick={onPrevious}
              >
                <span className="sr-only">Previous</span>
                <span className="h-5 w-5 inline-flex items-center justify-center" aria-hidden="true">
                  &lt;
                </span>
              </button>
            </li>

            {paginationRange.map((pageNumber, index) => {
              if (pageNumber === '...') {
                return (
                  <li
                    key={pageNumber + index}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                  >
                    &#8230;
                  </li>
                );
              }

              return (
                <li
                  key={pageNumber}
                  className={clsx(
                    'relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0',
                    {
                      ['z-10 bg-green-500 text-white focus-visible:outline focus-visible:outline-2 hover:bg-green-600 focus-visible:outline-offset-2 focus-visible:outline-green-700']:
                        pageNumber === currentPage,
                    },
                  )}
                  onClick={() => onPageChange(pageNumber as number)}
                >
                  {pageNumber}
                </li>
              );
            })}

            <li>
              <button
                disabled={isNextBtnDisabled}
                className={
                  'disabled:pointer-events-none disabled:cursor-default disabled:opacity-40 cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                }
                onClick={onNext}
              >
                <span className="sr-only">Next</span>
                <span className="h-5 w-5 inline-flex items-center justify-center" aria-hidden="true">
                  &gt;
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
