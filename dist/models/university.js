import mongoose, { Schema } from 'mongoose';
const ProgramSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    certs: [String],
    tuitionFee: { type: Number },
    applicationFee: { type: Number },
    applicationFeeWaiver: { type: String },
    scholarships: [
        {
            name: { type: String, required: true },
            details: { type: String, required: true },
        },
    ],
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
    dates: String,
    admissions: String,
    documents: String,
    fluidStudents: String,
    exams: String,
});
const PostgraduateSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    programs: [ProgramSchema],
    dates: String,
    admissions: String,
    documents: String,
    fluidStudents: String,
    exams: String,
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
    address: {
        type: String,
        required: true,
    },
    pageCreator: {
        type: String,
        required: true,
        immutable: true,
    },
    ownership: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    yearFounded: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
    },
    contacts: [
        {
            name: {
                type: String,
            },
            contact: {
                type: String,
            },
        },
    ],
    overview: [
        {
            name: {
                type: String,
            },
            description: {
                type: String,
            },
        },
    ],
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
    relevantLinks: [
        {
            name: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    faq: [
        {
            question: {
                type: String,
                required: true,
            },
            answer: {
                type: String,
                required: true,
            },
        },
    ],
    dateAdded: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
    dateModified: {
        type: Date,
        default: Date.now,
    },
    lastUpdatedBy: {
        type: String,
    },
});
UniversitySchema.pre('save', function (next) {
    this.dateModified = new Date();
    next();
});
export const University = mongoose.model('University', UniversitySchema);
