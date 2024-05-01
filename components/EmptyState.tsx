import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const EmptyState = () => {
  return (
    <section className="mx-auto max-w-[380px] pt-11 text-center">
      <Image src="/assets/empty.png" width={269} height={200} alt="Data is Empty!" className="mx-auto mb-10" />
      <h3 className="h3-bold mb-3.5 font-inter text-dark-200 dark:text-light-900">There’s no question to show</h3>
      <p className="body-medium font-inter text-dark-500 dark:text-light-700">
        Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next
        big thing others learn from. Get involved! 💡
      </p>
      <Link href="/" className="mt-4 block sm:w-auto">
        <Button className="primary-gradient base-bold text-light-900">Ask a Question</Button>
      </Link>
    </section>
  );
};

export default EmptyState;
