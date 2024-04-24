import MainLayout from '@/layout/MainLayout';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
