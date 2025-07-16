import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required:true , unique: true}, //for niche product have to be unique. 
    description: {type: String, required: true},
    //user_id: {type: String, required: false}, //owner or individual (admin?)
    image: {type: [String], required: false},
    category: {type: String, required: false}, //tablet/phone/earphones?
    // subCategory: {type:[String], default:[], required: false},
    popularItem: {type: Boolean},
    discount: {type: Number, required:false},
    date: {type: Number, required: true},
    // variation: {type:[String], default:[], required:true}, //for devices the width & height already set, no need sizes. 
    //cost: {type:[Number], default:[], required:true},
    price: {type: Number, required:true},
    stock: {type: Number, required:true},
    storage: {type: [String], required:false}
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;