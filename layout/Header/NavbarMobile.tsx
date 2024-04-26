'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? '' : 'invert-colors'}`}
              />
              <p className={`${isActive ? 'base-bold' : 'base-medium'}`}>{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <span className="relative block h-[3px] w-[21px] bg-dark-200 before:absolute before:bottom-2 before:left-0 before:size-full before:bg-dark-200 after:absolute after:left-0 after:top-2 after:size-full after:bg-dark-200 dark:bg-light-700 dark:before:bg-light-700 dark:after:bg-light-700"></span>
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200 border-none">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/site-logo.svg" width={23} height={23} alt="DevFlow" />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            Dev
            <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div>
          <NavContent />
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
