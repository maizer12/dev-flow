export interface GetQuestionParams {}

export interface CreateQuestionParams {
  title: string;
  content: string;
  author: any;
  tags: string[];
  path: string;
}

export interface CreateUserParams {
  clerkId: string;
  name: string;
  userName: string;
  email: string;
  picture: string;
}
