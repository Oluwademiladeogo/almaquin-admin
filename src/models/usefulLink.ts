import mongoose, { Document } from "mongoose";

export interface IUsefulLink extends Document {
  links: Map<string, string>;
}

const UsefulLinkSchema = new mongoose.Schema<IUsefulLink>({
  links: {
    type: Map,
    of: String,
    required: true,
  },
});

export const UsefulLink = mongoose.model<IUsefulLink>(
  "UsefulLink",
  UsefulLinkSchema
);
