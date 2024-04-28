import mongoose, { Schema } from "mongoose";
const ContactInfoSchema = new Schema({
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
export const ContactInfo = mongoose.model("Contact", ContactInfoSchema);
