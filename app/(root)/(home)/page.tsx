import AskCard from '@/components/Cards/AskCard';
import Filter from '@/components/Filter';
import Search from '@/components/Search';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import Link from 'next/link';

const questions = [
  {
    _id: '1',
    title:
      'The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this',
    tags: ['JavaScript', 'React.js', 'Invalid Fields', 'Salesforce'],
    userName: 'Satheesh',
    createDate: '2024-04-28',
    votes: 1200,
    answers: 900,
    views: 5200,
  },
  {
    _id: '2',
    title: 'An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell',
    tags: ['JavaScript', 'React.js', 'Invalid Fields', 'Salesforce'],
    userName: 'Satheesh',
    createDate: '2024-05-01',
    votes: 1200,
    answers: 900,
    views: 5200,
  },
];

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
      <Filter items={HomePageFilters} className="mb-7" />
      <div className="grid gap-9">
        {questions.map((item) => (
          <AskCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}
