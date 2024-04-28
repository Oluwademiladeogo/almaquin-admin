import mongoose, { Schema } from 'mongoose';
const SchoolSchema = new Schema({
    name: { type: String, required: true },
});
export const SecSchool = mongoose.model('School', SchoolSchema);
