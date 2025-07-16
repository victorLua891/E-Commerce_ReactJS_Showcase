import mongoose from "mongoose";

/**
 * Order are product details that are "confirmed", cart are things that have not been confirmed.
 * only once user confirms data to be purchased, then cart -> order
 * before orders take place, the transaction needs to pass (payment), then after that...
 * set for shipping. and details or procedure. 
 */

const orderSchema = new mongoose.Schema({
    //order_id: order._id
    user_id: {type:String, required: true, unique: true}, //FK: user._id
    order: {type:[Object], default:[], required:true},
    product_id: {type:[String], default:[], required:true}, //
    quantity: {type:[Number], default:[], required:true}, 
    unitPrice:{type:[Number], default:[], required:true},
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;