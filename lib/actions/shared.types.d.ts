export interface GetQuestionParams {}

export interface CreateQuestionParams {
  title: string;
  content: string;
  author: any;
  tags: string[];
  path: string;
}
