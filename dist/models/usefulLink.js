import mongoose from "mongoose";
const UsefulLinkSchema = new mongoose.Schema({
    links: {
        type: Map,
        of: String,
        required: true,
    },
});
export const UsefulLink = mongoose.model("UsefulLink", UsefulLinkSchema);
