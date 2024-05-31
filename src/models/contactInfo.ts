import mongoose, { Schema } from "mongoose";
import { IContactInfo } from "../types/types";

const ContactInfoSchema: Schema<IContactInfo> = new Schema<IContactInfo>({
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fax: {
    type: String,
    required: true,
  },
});

export const ContactInfo = mongoose.model<IContactInfo>(
  "Contact",
  ContactInfoSchema
);
