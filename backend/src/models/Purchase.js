import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    contact: {
      type: String,
      required: true,
      trim: true
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending"
    },
    pixPayload: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Purchase = mongoose.model("Purchase", purchaseSchema);
