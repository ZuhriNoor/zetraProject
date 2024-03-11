import mongoose from "mongoose";

const repairSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    buyer: {
      type: mongoose.ObjectId,
      ref: "user",
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    type:{
      type: String,
      enum: ["Upgrade","Repair"]
    }
  },
  { timestamps: true }
);

export default mongoose.model("repair", repairSchema);
