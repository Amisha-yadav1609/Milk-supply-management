// Map HTTP endpoints to controller functions
const express = require("express");
const router = express.Router();
const {addMilkEntry,getMilkEntriesByDate,getEntriesByCustomer} = require("../controllers/milkEntry.controller");

// Add milk entry
router.post("/", addMilkEntry);

// Get entries by date
router.get("/",getMilkEntriesByDate);

// Get all entries for a customer
router.get("/:customerPhone",getEntriesByCustomer);

module.exports = router;
