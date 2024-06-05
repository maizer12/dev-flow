import { IAsk } from '@/types/Ask.type';
import React from 'react';
import TagBadge from '../TagBadge';
import CardMetrics from '../CardMetrics';

interface IProps {
  item: IAsk;
}

const AskCard = ({ item }: IProps) => {
  console.log(item.tags);
  return (
    <div className="card-wrapper light-border-2 rounded-lg border px-12 py-9">
      <h3 className="h3-bold mb-4 dark:text-light-900">{item.title}</h3>
      <div className="mb-5 flex gap-4">
        {item.tags.map((tag, i) => (
          <TagBadge key={i}>{tag.name}</TagBadge>
        ))}
      </div>
      <CardMetrics {...item} />
    </div>
  );
};

export default AskCard;
