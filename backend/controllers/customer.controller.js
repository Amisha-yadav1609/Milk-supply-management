// Handles business logic for customer operations (add, update, delete customers)
const Customer= require("../models/Customer")

// add customer
const createCustomer = async (req,res)=>{
    try{
        const customer=await Customer.create(req.body);
        res.status(201).json(customer);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

// get ALL customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update customer
const updateCustomer = async (req, res) => {
  try {
    const updated = await Customer.findOneAndUpdate(
      {phone: req.params.phone},
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports= {createCustomer,getCustomers,updateCustomer}
