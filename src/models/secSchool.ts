import mongoose, { Schema } from "mongoose";
import { ISecSchool } from "../types/types.js";

const SecSchoolSchema: Schema<ISecSchool> = new Schema({
  name: { type: String, required: true },
  location: { type: String },
});

export const SecSchool = mongoose.model<ISecSchool>("School", SecSchoolSchema);
