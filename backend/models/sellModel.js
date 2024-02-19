import mongoose from "mongoose";
const sellSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    spec: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      enum: ["Working", "Not Working"],
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    seller: {
      type: mongoose.ObjectId,
      ref: "user",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Picked up", "Order Complete", "Cancelled"],
    },
    donate: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Sell", sellSchema);