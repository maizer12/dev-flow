import Link from 'next/link';
import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  text?: string;
}

const TagBadge = ({ children, text }: IProps) => {
  return (
    <Link href="/" className="body-medium mb-2 flex items-center justify-between text-dark-500 dark:text-light-700">
      <p className="rounded-[6px] bg-light-800 p-4 py-3 uppercase text-light-400 dark:bg-dark-300 dark:text-light-500 ">
        {children}
      </p>
      {text}
    </Link>
  );
};

export default TagBadge;
