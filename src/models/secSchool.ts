import mongoose, { Document, Schema } from 'mongoose';

export interface School extends Document {
  name: string;
  location?: string;
}

const SchoolSchema: Schema = new Schema({
  name: { type: String, required: true },
});

export const SecSchool = mongoose.model<School>('School', SchoolSchema);
