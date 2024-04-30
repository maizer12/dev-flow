import React from 'react';
import TagBadge from './TagBadge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Filter = () => {
  return (
    <>
      <div className="hidden flex-wrap gap-5 sm:flex">
        <TagBadge active={true}>Newest</TagBadge>
        <TagBadge>Recommended Questions</TagBadge>
      </div>
      <Select>
        <SelectTrigger className="dark:dark-gradient w-full border border-light-700 bg-light-800 py-6 dark:border-none dark:text-light-500 sm:hidden">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="dark:dark-gradient top-4  dark:text-light-500">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default Filter;
