import mongoose, { Schema, Document } from "mongoose";

interface IProgram {
  name: string;
  certs?: string[];
}

interface IAcademic {
  name: string;
  programs: IProgram[];
}

interface IUndergraduate {
  name: string;
  programs: IProgram[];
}

interface IPostgraduate {
  name: string;
  programs: IProgram[];
}

interface IUniversityDoc extends Document {
  name: string;
  shortName?: string;
  picture: string;
  websiteLink: string;
  overview: {
    name: string;
    description: string;
  }[];
  schools: IAcademic[];
  undergraduate: IUndergraduate[];
  postgraduate: IPostgraduate[];
  relevantLinks: {
    name: string;
    url: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

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

export const University = mongoose.model<IUniversityDoc>(
  "University",
  UniversitySchema
);
