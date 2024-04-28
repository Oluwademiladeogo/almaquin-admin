import mongoose, { Schema } from "mongoose";
const UserContactSchema = new Schema({
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
export const UserContact = mongoose.model("UserContact", UserContactSchema);
