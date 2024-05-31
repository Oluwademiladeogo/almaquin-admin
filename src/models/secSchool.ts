import mongoose, { Schema } from "mongoose";
import { ISecSchool } from "../types/types";

const SecSchoolSchema: Schema<ISecSchool> = new Schema({
  name: { type: String, required: true },
  location: { type: String },
});

export default mongoose.model<ISecSchool>("School", SecSchoolSchema);
