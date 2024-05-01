import Filter from '@/components/Filter';
import Search from '@/components/Search';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="mb-8 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <h1 className="h1-bold font-inter text-dark-100 dark:text-light-900">All Questions</h1>
        <Link href="/" className="block w-full max-w-full sm:w-auto">
          <Button className="primary-gradient base-bold w-full text-light-900">Ask a Question</Button>
        </Link>
      </div>
      <Search className="mb-6 !block max-w-full border-light-700" />
      <Filter items={HomePageFilters} />
    </>
  );
}
