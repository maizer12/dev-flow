import { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  name: string;
  userName: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioLink?: string;
  reputation: number;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema<IUser>({
  clerkId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  picture: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  portfolioLink: {
    type: String,
    required: false,
  },
  reputation: {
    type: Number,
    default: 0,
  },
  saved: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
  ],
  joinedAt: {
    type: Date,
    required: true,
  },
});

const User = models.User || model<IUser>('User', UserSchema);

export default User;
