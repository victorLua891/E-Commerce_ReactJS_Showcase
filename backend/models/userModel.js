import mongoose from "mongoose";

// Should seller be part of the same user? or be a seperate table?
const userSchema = new mongoose.Schema({
    name: {type : String, required: true},
    email: {type : String, required: true, unique: true},
    password: {type : String, required: true},
    //others
    shippingAddress: {type: String, required: false},
    billingAddress: {type: String, required: false},
    paymentInfo: {type: String, required: false},

    //These are referenced from another table. 
    wishList: {type: Object, default: {}},
    orderHistory: {type: Object, default: {}},
    cartData: {type: Object, default: {}} //Order History? prolly another one but same conecpt?
}, {minimize:false})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;


//productCatalog: is an array
// const productCatalog = new mongoose.Schema({

// })