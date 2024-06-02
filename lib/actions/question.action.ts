'use server';
import Question from '@/database/question.model';
import { connectToDB } from '@/lib/mongoose';

export async function createQuestion(params: any) {
  try {
    await connectToDB();

    const { title, content, author, tags, path } = params;

    const question = Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];
  } catch (error) {
    console.log(error);
  }
}
