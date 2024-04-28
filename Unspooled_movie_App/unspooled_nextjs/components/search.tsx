'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { fetchMovieByTitle } from '@/app/_actions/searchActions';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import debounce from 'debounce';

export default function Search({ placeholder }: { placeholder: string }) {

  return (
    <div className="relative flex-col flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-orange-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        type="text"
        id="search"
        onChange={debounce(
          (e) => {
            if(e.target.value !== ""){
              fetchMovieByTitle(e.target.value);
            }
          },
          500,)}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}