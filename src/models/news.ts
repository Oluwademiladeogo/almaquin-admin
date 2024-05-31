import mongoose, { Schema } from "mongoose";
import { INews } from "../types/types";

const NewsSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  pictures: [
    {
      type: String,
    },
  ],
});

export const News = mongoose.model<INews>("News", NewsSchema);
