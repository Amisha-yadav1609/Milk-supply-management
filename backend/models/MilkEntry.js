// Store daily milk transactions per customer
const mongoose = require("mongoose");

const milkEntrySchema = new mongoose.Schema(
  {
    customerPhone: {
      type: String,
      required: true
    },
    date: {
      type: String, // YYYY-MM-DD format for easier aggregation
      required: true
    },
    session: {
      type: String,
      enum: ["morning", "evening"],
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    pricePerLiter: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("MilkEntry", milkEntrySchema);
