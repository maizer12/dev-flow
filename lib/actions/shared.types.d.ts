export interface GetQuestionParams {}

export interface CreateQuestionParams {
  title: string;
  content: string;
  author: any;
  tags: string[];
  path: string;
}

interface UserDB {
  name: string;
  userName: string;
  email: string;
  picture: string;
}

export interface CreateUserParams extends UserDB {
  clerkId: string;
}

export interface UpdateUserParams {
  clerkId: string;
  updateDate: UserDB;
  path: string;
}
