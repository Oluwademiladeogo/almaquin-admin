import mongoose, { Schema } from "mongoose";

interface IUserContact {
  name: string;
  email: string;
  message: string;
}

const UserContactSchema: Schema<IUserContact> = new Schema<IUserContact>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
export const UserContact = mongoose.model<IUserContact>(
  "UserContact",
  UserContactSchema
);
