import { ReactNode } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main className="flex min-h-screen w-full items-center justify-center">{children}</main>;
}
