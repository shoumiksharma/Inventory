import mongoose from "mongoose";
import Product from "./product.js";

const transactionSchema = new mongoose.Schema(
    {
        product : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Product",
            required : true
        }, 

        amt : {
            type : Number,
            required : true
        },

        category : {
            type : String,
            enum : ['Issue', 'Dispatch'],
            required : true
        },

        qty : {
            type : Number
        }

    }
    , {timestamps : true}
)

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;