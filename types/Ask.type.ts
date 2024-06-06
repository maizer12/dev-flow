import { IMetricsCard } from './MetricsCard.type';

export interface IAsk extends IMetricsCard {
  _id: string;
  title: string;
  tags: { name: string }[];
}
