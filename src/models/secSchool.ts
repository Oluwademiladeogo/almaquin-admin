import mongoose, { Schema } from "mongoose";
import { ISchool } from "../types/types";

const SchoolSchema: Schema<ISchool> = new Schema({
  name: { type: String, required: true },
  location: { type: String },
});

export default mongoose.model<ISchool>("School", SchoolSchema);
