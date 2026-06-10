import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    whatsapp: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    instagram: {
      type: String,
      required: true,
      trim: true
    },
    notifications: {
      type: [String],
      default: []
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "saved", "failed"],
      default: "saved"
    }
  },
  {
    timestamps: true
  }
);

export const Purchase = mongoose.model("Purchase", purchaseSchema);
