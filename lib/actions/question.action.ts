'use server';
import Question from '@/database/question.model';
import { connectToDB } from '@/lib/mongoose';
import Tag from '../../database/tag.model';

export async function createQuestion(params: any) {
  try {
    await connectToDB();

    const { title, content, author, tags, path } = params;

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    for (const tag in tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true },
      );

      tagDocuments.push(existingTag);
    }

    await Question.findByIdAndUpdate(question._id, { $push: { tags: { $each: tagDocuments } } });
  } catch (error) {
    console.log(error);
  }
}
