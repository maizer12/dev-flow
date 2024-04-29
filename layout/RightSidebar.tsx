import { ChevronRight } from 'lucide-react';

const RightSidebar = () => {
  return (
    <aside className="background-light900_dark200 light-border hidden h-screen flex-col border-l px-3 pb-3.5 pt-36 shadow-light-300 dark:border-none dark:shadow-none sm:px-6 sm:pb-7 lg:flex lg:w-[330px]">
      <div className="h-3/6">
        <h3 className="h3-bold mb-6 font-inter text-dark-200 dark:text-light-900">Hot Network</h3>
        <ul className="">
          <li>
            <p className="body-medium flex text-dark-500 dark:text-light-700">
              Would it be appropriate to point out an error in another paper during a referee report?
              <ChevronRight width={35} height="auto" />
            </p>
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className="h3-bold mb-6 font-inter text-dark-200 dark:text-light-900">Popular Tags</h3>
        <ul>
          <li className="body-medium flex items-center justify-between text-dark-500 dark:text-light-700">
            <p className="rounded-[6px] bg-light-800 p-4 py-3 uppercase text-light-400 dark:bg-dark-300 dark:text-light-500">
              Javascript
            </p>
            20152+
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;
