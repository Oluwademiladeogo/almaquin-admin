import mongoose from "mongoose";
export const User = mongoose.model("Users", new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
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
    classLevel: {
        type: String,
        required: true,
    },
    reasonForJoining: {
        type: String,
        required: true,
    }
}));
