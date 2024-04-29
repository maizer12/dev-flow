import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="background-light850_dark100 relative">
      <Header />
      <div className="flex w-full flex-1">
        <Sidebar />
        <main className="flex min-h-screen flex-1 flex-col p-6 pt-36 max-md:pb-14 sm:px-14">
          <section className="mx-auto w-full max-w-5xl">{children}</section>
        </main>
        right-sidebar
      </div>
      Toaster
    </div>
  );
};

export default MainLayout;
