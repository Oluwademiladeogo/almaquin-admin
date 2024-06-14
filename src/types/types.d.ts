import { Document } from "mongoose";

export interface INews extends Document {
  title: string;
  content: string;
  author: string;
  tags: string[];
  publishedDate: Date;
  pictures: string[];
}

export interface ISecSchool extends Document {
  name: string;
  location?: string;
}

export interface IContactInfo {
  phone: string;
  email: string;
  fax: string;
}

export interface IUserContact {
  name: string;
  email: string;
  message: string;
}

export interface IUserDoc extends Document {
  email: string;
  phoneNo: string;
  password: string;
  role: string;
  surname: string;
  firstName: string;
  birthday: Date;
  presentSchool: string;
  schoolLocation: string;
  classLevel: string;
  reasonForJoining: string;
  otp?: string;
  isVerified: boolean;
}

export interface IProgram {
  name: string;
  certs?: string[];
  fees: string;
}

export interface IAcademic {
  name: string;
  programs: IProgram[];
}

export interface IUndergraduate extends Document {
  name: string;
  programs: IProgram[];
  dates: string;
  admissions: string;
  documents: string;
  fluidStudents: string;
  exams: string;
}

export interface IPostgraduate extends Document {
  name: string;
  programs: IProgram[];
  dates: string;
  admissions: string;
  documents: string;
  fluidStudents: string;
  exams: string;
}

export interface IUniversityDoc extends Document {
  name: string;
  shortName?: string;
  picture: string;
  websiteLink: string;
  address: string;
  pageCreator: string;
  ownership: string;
  contacts: {
    name: string;
    contact: string;
  }[];
  location: string;
  yearFounded: string;
  designation?: string;
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
  dateAdded: Date;
  dateModified: Date;
}

export interface JwtPayload {
  id: unknown;
  name: string;
  phone: string;
}
