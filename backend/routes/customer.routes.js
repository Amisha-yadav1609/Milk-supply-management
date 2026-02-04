const express = require("express");
const router = express.Router()
const {createCustomer,getCustomers,updateCustomer} = require("../controllers/customer.controller")


router.post("/", createCustomer);
router.get("/", getCustomers);
router.put("/:phone",updateCustomer);

module.exports= router;