import { Schema, models, model, Document } from 'mongoose';

export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', default: [] }],
    views: {
      type: Number,
      default: 0,
    },
    upvotes: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer', default: [] }],
  },
  { timestamps: true },
);

const Question = models.Question || model('Question', QuestionSchema);

export default Question;
