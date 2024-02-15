import mongoose from "mongoose";

const helpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

export default mongoose.model("help", helpSchema);