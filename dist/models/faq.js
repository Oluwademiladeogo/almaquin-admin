import mongoose, { Schema } from "mongoose";
const FAQSchema = new Schema({
    undergraduateFAQs: {
        type: Map,
        of: String,
        default: {},
    },
    postgraduateFAQs: {
        type: Map,
        of: String,
        default: {},
    },
    schoolsFAQs: {
        type: Map,
        of: String,
        default: {},
    },
});
export const FAQ = mongoose.model("FAQ", FAQSchema);
