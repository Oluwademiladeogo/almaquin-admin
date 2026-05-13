import mongoose, { Schema } from 'mongoose';
const SecSchoolSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String },
});
export const SecSchool = mongoose.model('School', SecSchoolSchema);
