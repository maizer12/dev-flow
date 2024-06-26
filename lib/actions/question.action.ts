'use server';
import Question from '@/database/question.model';
import { connectToDB } from '@/lib/mongoose';
import Tag from '../../database/tag.model';
import User from '@/database/user.model';
import { revalidatePath } from 'next/cache';
import { CreateQuestionParams } from './shared.types';

export async function getQuestion(params: any) {
  try {
    await connectToDB();

    const questions = await Question.find({})
      .sort({ createdAt: -1 })
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User });

    return questions;
  } catch (err) {
    console.log(err);
    throw new Error('Not have access');
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    await connectToDB();

    const { title, content, author, tags, path } = params;

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        {
          $setOnInsert: { name: tag },
          $push: { questions: question._id },
        },
        { upsert: true, new: true },
      );

      tagDocuments.push(existingTag);
    }
    await Question.findByIdAndUpdate(question._id, { $push: { tags: { $each: tagDocuments } } });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
