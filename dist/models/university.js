import mongoose, { Schema } from "mongoose";
const ProgramSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    certs: [String],
});
const AcademicSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    programs: [ProgramSchema],
});
const UndergraduateSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    programs: [ProgramSchema],
});
const PostgraduateSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    programs: [ProgramSchema],
});
const UniversitySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    shortName: {
        type: String,
    },
    picture: {
        type: String,
        required: true,
    },
    websiteLink: {
        type: String,
        required: true,
    },
    overview: [{
            name: {
                type: String,
            },
            description: {
                type: String,
            },
        }],
    schools: {
        type: [AcademicSchema],
        required: true,
    },
    undergraduate: {
        type: [UndergraduateSchema],
        required: true,
    },
    postgraduate: {
        type: [PostgraduateSchema],
        required: true,
    },
    relevantLinks: [{
            name: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        }],
    faq: [{
            question: {
                type: String,
                required: true,
            },
            answer: {
                type: String,
                required: true,
            },
        }],
});
export const University = mongoose.model("University", UniversitySchema);
