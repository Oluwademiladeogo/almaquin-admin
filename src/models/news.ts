import mongoose, { Document, Schema } from "mongoose";

interface INews extends Document {
  title: string;
  content: string;
  author: string;
  tags: string[];
  publishedDate: Date;
  pictures: string[];
}

const NewsSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  tags: [{ type: String }],
  publishedDate: { type: Date, default: Date.now },
  pictures: [{ type: String }],
});

export const News = mongoose.model<INews>("News", NewsSchema);
