import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    //cart_id: cart._id //already initialized. 
    user_id: {type:String, required: true, unique: true}, //user._id
    product: {type:[String], default:[], required:true}, //product._id (product/cart)
    variation: {type:[String], default:[], required:true}, 
    quantity: {type:[Number], default:[], required:true}, 
})

const cartModel = mongoose.models.cart || mongoose.model("cart", cartSchema);

export default cartModel;