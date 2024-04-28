import mongoose, { Schema, Document } from "mongoose";

interface IFAQ extends Document {
  undergraduateFAQs: { [question: string]: string };
  postgraduateFAQs: { [question: string]: string };
  schoolsFAQs: { [question: string]: string };
}

const FAQSchema: Schema<IFAQ> = new Schema<IFAQ>({
  undergraduateFAQs: {
    type: Map,
    of: String,
    default: {},
  },
  postgraduateFAQs: {
    type: Map,
    of: String,
    default: {},
  },
  schoolsFAQs: {
    type: Map,
    of: String,
    default: {},
  },
});

export const FAQ = mongoose.model<IFAQ>("FAQ", FAQSchema);
