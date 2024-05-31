import mongoose, { Schema } from "mongoose";
import {
  IAcademic,
  IPostgraduate,
  IProgram,
  IUndergraduate,
  IUniversityDoc,
} from "../types/types";

const ProgramSchema: Schema<IProgram> = new Schema<IProgram>({
  name: {
    type: String,
    required: true,
  },
  certs: [String],
  fees: String,
});

const AcademicSchema: Schema<IAcademic> = new Schema<IAcademic>({
  name: {
    type: String,
    required: true,
  },
  programs: [ProgramSchema],
});

const UndergraduateSchema: Schema<IUndergraduate> = new Schema<IUndergraduate>({
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

const PostgraduateSchema: Schema<IPostgraduate> = new Schema<IPostgraduate>({
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

const UniversitySchema: Schema<IUniversityDoc> = new Schema<IUniversityDoc>({
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
    default: Date.now,
  },
  dateModified: {
    type: Date,
    default: Date.now,
  },
});
UniversitySchema.pre("save", function (next) {
  this.dateModified = new Date();
  next();
});
export const University = mongoose.model<IUniversityDoc>(
  "University",
  UniversitySchema
);
