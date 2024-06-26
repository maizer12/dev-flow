import Image from 'next/image';
import React from 'react';

interface IProps {
  className?: string;
}

const Search = ({ className = '' }: IProps) => {
  return (
    <label
      className={
        'max-w-screen-md:hidden relative border rounded-lg border-light-400 hidden w-full max-w-[540px] md:block ' +
        className
      }
    >
      <Image src="assets/icons/search.svg" width={22} height={22} alt="search" className="absolute left-6 top-[14px]" />
      <input
        className="dark:dark-gradient block w-full rounded-lg bg-light-800 p-3.5 pl-16 font-inter text-base placeholder:text-light-400 placeholder:duration-700 focus:placeholder:opacity-0 dark:border-none dark:text-light-500 dark:placeholder:text-light-500"
        placeholder="Search anything globally"
      />
    </label>
  );
};

export default Search;
