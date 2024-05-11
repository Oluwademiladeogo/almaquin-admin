import mongoose, { Document } from "mongoose";

export interface IUserDoc extends Document {
  email: string;
  phone_no: string;
  password: string;
  role: string;
  surname: string;
  firstName: string;
  birthday: Date;
  presentSchool: string;
  schoolLocation: string;
  classLevel: string;
  reasonForJoining: string;
}

export const User = mongoose.model<IUserDoc>(
  "Users",
  new mongoose.Schema<IUserDoc>({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone_no: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    surname: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    presentSchool: {
      type: String,
      required: true,
    },
    schoolLocation: {
      type: String,
      required: true,
    },
    classLevel: {
      type: String,
      required: true,
    },
    reasonForJoining: {
      type: String,
      required: true,
    },
  })
);
