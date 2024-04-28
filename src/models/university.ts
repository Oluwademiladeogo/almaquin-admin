import mongoose, { Schema } from "mongoose";
import {
  IProgram,
  IAcademic,
  IUndergraduate,
  IPostgraduate,
  IUniversityDoc,
} from "../types/types.js";

const ProgramSchema: Schema<IProgram> = new Schema<IProgram>({
  name: {
    type: String,
    required: true,
  },
  certs: [String],
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
});

const PostgraduateSchema: Schema<IPostgraduate> = new Schema<IPostgraduate>({
  name: {
    type: String,
    required: true,
  },
  programs: [ProgramSchema],
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
  overview: {
    type: Map,
    of: String,
    required: true,
  },
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
  relevantLinks: {
    type: Map,
    of: String,
    required: true,
  },
});

export const University = mongoose.model<IUniversityDoc>(
  "University",
  UniversitySchema
);
