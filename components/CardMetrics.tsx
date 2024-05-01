import { timeAgo } from '@/helpers/timeAgo';
import { IMetricsCard } from '@/types/MetricsCard.type';
import { Eye, MessageCircle, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface IProps extends IMetricsCard {}

const CardMetrics = ({ userName, createDate, votes, answers, views }: IProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <Image src="/assets/icons/avatar.png" width={20} height={20} alt="User avatar" />
        <p className="body-medium relative  pr-3 font-inter font-bold text-dark-400 after:absolute after:right-0 after:top-1.5 after:size-1.5 after:rounded-lg after:bg-dark-400">
          {userName}
        </p>
        <p className="body-regular font-inter text-dark-400">{timeAgo(createDate)}</p>
      </div>
      <div className="flex">
        <p className="body-medium flex  items-center gap-1 pr-3 font-inter text-dark-400">
          <ThumbsUp width={14} className="text-blue-400" />
          {votes}
          <span className="font-normal">Votes</span>
        </p>
        <p className="body-medium flex  items-center gap-1 pr-3 font-inter text-dark-400">
          <MessageCircle width={14} className="text-blue-400" />
          {answers}
          <span className="font-normal">Answers</span>
        </p>
        <p className="body-medium flex  items-center gap-1 pr-3 font-inter text-dark-400">
          <Eye width={14} className="text-blue-400" />
          {views}
          <span className="font-normal">Views</span>
        </p>
      </div>
    </div>
  );
};

export default CardMetrics;
