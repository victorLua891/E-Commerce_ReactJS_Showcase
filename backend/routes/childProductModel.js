import mongoose from "mongoose";

const childProductSchema = new mongoose.Schema({
    //and NO! we dont need a subname here if they want use variation. 
    imageURL: {type: String, required: false},
    variation: {type: String , required: true}, //this can be a name, color, whatever they need. 
    size: {type: String , required: true},
    cost: {type: Number , required: true},
    stock: {type: Number , required: true},
    // storage: {type:}
});

const childProductModel = mongoose.models.childProduct || mongoose.model("product", childProductSchema);

export default childProductModel;