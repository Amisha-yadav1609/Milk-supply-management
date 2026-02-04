// Map endpoints to controller actions.
const express = require("express");
const router = express.Router();
const {addPrice,getCurrentPrice,getPriceHistory}= require("../controllers/milkPrice.controller");

// Add a new milk price
router.post("/",addPrice);

// Get latest price
router.get("/current", getCurrentPrice);

// Get price history
router.get("/history",getPriceHistory);

module.exports = router;
