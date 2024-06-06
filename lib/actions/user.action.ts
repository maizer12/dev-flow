'use server';
import { revalidatePath } from 'next/cache';
import User from '../../database/user.model';
import { connectToDB } from '../mongoose';
import { CreateUserParams, UpdateUserParams } from './shared.types';
import Question from '@/database/question.model';

export const getOneUser = async (clerkId: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ clerkId });
    if (!user) throw new Error('User not found');
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createUser = async (userData: CreateUserParams) => {
  try {
    await connectToDB();

    const user = await User.create(userData);

    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateUser = async (params: UpdateUserParams) => {
  try {
    await connectToDB();

    const { clerkId, path, updateDate } = params;

    await User.findOneAndUpdate({ clerkId }, updateDate, { new: true });

    revalidatePath(path);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    await connectToDB();

    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error(`User doesn't find!`);
    }

    await Question.find({ author: user._id }).distinct('_id');

    await Question.deleteMany({ author: user._id });

    const deleteUser = await User.findByIdAndDelete(user._id);

    return deleteUser;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
