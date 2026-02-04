const express = require("express");
const cors= require("cors");
const customerRoutes= require("./routes/customer.routes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/customers", customerRoutes)

module.exports=app;