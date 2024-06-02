'use server';
import User from '../../database/user.model';
import { connectToDB } from '../mongoose';

export const getOneUser = async (clerkId: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ clerkId });
    console.log(123);
    console.log(user);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
