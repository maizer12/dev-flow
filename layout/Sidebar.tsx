'use client';
import { Button } from '@/components/ui/button';
import { sidebarLinks } from '@/constants';
import { SidebarLink } from '@/types';
import { SignOutButton, useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  const isActive = (item: SidebarLink) =>
    (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

  return (
    <aside className="background-light900_dark200 light-border hidden h-screen flex-col border-r px-3 pb-3.5 pt-36 shadow-light-300 dark:border-none dark:shadow-none sm:flex sm:px-6 sm:pb-7 lg:w-[266px]">
      {sidebarLinks.map((item) => (
        <Link
          key={item.route}
          href={item.route}
          className={`${
            isActive(item) ? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900'
          } mb-6 flex items-center justify-start gap-4 bg-transparent p-4`}
        >
          <Image
            src={item.imgURL}
            alt={item.label}
            width={20}
            height={20}
            className={`${isActive(item) ? '' : 'invert-colors'}`}
          />
          <p className={`${isActive(item) ? 'base-bold' : 'base-medium'} hidden lg:block`}>{item.label}</p>
        </Link>
      ))}
      <div className="mt-auto">
        {userId ? (
          <SignOutButton>
            <button
              className="text-dark300_light900
                flex items-center justify-start gap-4 bg-transparent p-4"
            >
              <Image src="/assets/icons/sign-out.svg" alt="Logout" width={20} height={20} className="invert-colors" />
              <p className="base-medium hidden lg:block">Logout</p>
            </button>
          </SignOutButton>
        ) : (
          <>
            <Link href="/sing-in" className="mb-6 block">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/sign-up.svg"
                  alt="Sign In"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient hidden lg:block">Log In</span>
              </Button>
            </Link>
            <Link href="/sing-in">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="hidden lg:block">Sign Up</span>
                <Image
                  src="/assets/icons/avatar.svg"
                  alt="Sign up"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
              </Button>
            </Link>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
