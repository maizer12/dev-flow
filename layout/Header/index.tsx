import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src="./assets/site-logo.svg" width={23} height={23} alt="DevFlow" />
        <p className="h2-bold">
          Dev
          <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      Header
    </header>
  );
}

export default Header;
