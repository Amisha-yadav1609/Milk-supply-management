const express = require("express");
const cors= require("cors");
const customerRoutes= require("./routes/customer.routes");
const milkPriceRoutes= require("./routes/milkPrice.routes")
const milkEntryRoutes= require("./routes/milkEntry.routes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/customers", customerRoutes)
app.use("/milk-price",milkPriceRoutes)
app.use("/milk-entry",milkEntryRoutes)

module.exports=app;