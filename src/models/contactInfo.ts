import mongoose, { Schema } from "mongoose";

interface IContactInfo {
  phone: string;
  email: string;
  fax: string;
}

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
