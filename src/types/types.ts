import { Document } from "mongoose";

export interface IUserDoc extends Document {
  username: string;
  email: string;
  phone_no: string;
  password: string;
  role: string;
}

export interface IProgram {
  name: string;
  certs: string[];
}

export interface IAcademic {
  name: string;
  programs: IProgram[];
}

export interface IUndergraduate {
  name: string;
  programs: IProgram[];
}

export interface IPostgraduate {
  name: string;
  programs: IProgram[];
}

export interface IUniversityDoc extends Document {
  name: string;
  shortName: string;
  picture: string;
  websiteLink: string;
  overview: Record<string, string>;
  schools: IAcademic[];
  undergraduate: IUndergraduate[];
  postgraduate: IPostgraduate[];
  relevantLinks: Record<string, string>;
}

export interface JwtPayload {
  id: unknown;
  name: string;
  phone: string;
}
