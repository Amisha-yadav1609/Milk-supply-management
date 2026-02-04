// Handles logic for adding and fetching milk prices.
const MilkPrice = require("../models/MilkPrice");

// Add a new price
const addPrice = async (req, res) => {
  try {
    const { pricePerLiter, effectiveFrom } = req.body;
    const price = await MilkPrice.create({
      pricePerLiter,
      effectiveFrom: effectiveFrom || Date.now()
    });
    res.status(201).json(price);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get latest active price
const getCurrentPrice = async (req, res) => {
  try {
    const price = await MilkPrice.findOne()
      .sort({ effectiveFrom: -1 }); // most recent
    if (!price) {
      return res.status(404).json({ message: "No price set yet" });
    }
    res.json(price);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all prices (history)
const getPriceHistory = async (req, res) => {
  try {
    const prices = await MilkPrice.find().sort({ effectiveFrom: -1 });
    res.json(prices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports= {addPrice,getCurrentPrice,getPriceHistory}