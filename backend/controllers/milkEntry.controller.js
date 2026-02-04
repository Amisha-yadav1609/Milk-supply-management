// Handles creating and retrieving daily milk entries
const MilkEntry = require("../models/MilkEntry");
const MilkPrice = require("../models/MilkPrice");
const Customer = require("../models/Customer");

// Add milk entry
const addMilkEntry = async (req, res) => {
  try {
    const { customerPhone, date, session, quantity } = req.body;

    // Check if customer exists
    const customer = await Customer.findOne({ phone: customerPhone });
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Get latest milk price
    const latestPrice = await MilkPrice.findOne().sort({ effectiveFrom: -1 });
    if (!latestPrice) {
      return res.status(400).json({ message: "No milk price set" });
    }

    const amount = quantity * latestPrice.pricePerLiter;

    const entry = await MilkEntry.create({
      customerPhone,
      date,
      session,
      quantity,
      pricePerLiter: latestPrice.pricePerLiter,
      amount
    });

    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get milk entries for a date
const getMilkEntriesByDate = async (req, res) => {
  try {
    const { date } = req.query;
    const entries = await MilkEntry.find({ date });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all entries for a customer
const getEntriesByCustomer = async (req, res) => {
  try {
    const { customerPhone } = req.params;
    const entries = await MilkEntry.find({ customerPhone }).sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports={addMilkEntry,getMilkEntriesByDate,getEntriesByCustomer}