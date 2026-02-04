// Stores milk price history and effective dates.
const mongoose = require("mongoose");

const milkPriceSchema = new mongoose.Schema(
  {
    pricePerLiter: {
      type: Number,
      required: true
    },
    effectiveFrom: {
      type: Date,
      required: true,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("MilkPrice", milkPriceSchema);
