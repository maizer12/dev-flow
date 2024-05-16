'use server';
import { connectToDB } from '@/lib/mongoose';

export async function createQuestion() {
  try {
    await connectToDB();
  } catch (error) {
    console.log(error);
  }
}
