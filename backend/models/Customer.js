// Defines how customer data is stored and validated in database
const mongoose = require("mongoose");

const customerSchema =new mongoose.Schema(
    {
        name :{
            type:String,
            required:true,
            trim:true
        },
        phone :{type:String,
            required:true,
            unique:true
        },
        address:{
            type:String
        },
        isActive:{
            type:Boolean,
            default:true
        },
    },
    {timestamps:true}
)

module.exports= mongoose.model("Customer", customerSchema)