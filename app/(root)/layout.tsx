import MainLayout from '@/layout/MainLayout';
import { ReactNode } from 'react';
import '../globals.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
