import mongoose from "mongoose";
import childProductModel from "./childProductModel.js";

const productSchema = new mongoose.Schema({
    name: { type: String, required:true },
    description: {type: String, required: true},
    image: {type: [String], required: false},
    category: {type: String, required: true}, //tablet/phone/earphones?
    // subCategory: {type:[String], default:[], required: false},
    popularItem: {type: Boolean},
    discount: {type: Number, required:false},
    date: {type: Number, required: true},
    variation: {type:[String], default:[], required:true}, //for devices the width & height already set, no need sizes. 
    cost: {type:[Number], default:[], required:true},
    stock: {type:[Number], default:[], required:true},
    storage: {type:[String], default:[], required:true}

    // products: {type: [{
    //     imageURL: {type: String, required: false},
    //     variation: {type: String , required: true}, //this can be a name, color, whatever they need. 
    //     size: {type: String , required: true},
    //     cost: {type: Number , required: true},
    //     stock: {type: Number , required: true}
    //     }
    // ], default:[], required: true}
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;


//What I wanted to do for this Product Schema is:
//this would be messier because we will need to add a for loop. 
//basically like this... For the Product types/variation/wahtever you wanna call it.
//Product = [Objects]: childProduct will contain a list of objects
//Products = [{variation:??, size:??, stock:??, price=??}]
//so we ask them to add the values themselves. 
//For instance, 
//the form: [image], [variation], [size], [price], [stock]
//If there is a white shirt with sizes S, M, L, etc (fill in 3 times)
//white, 

//all required. 
//so variation can mean subname, color, etc. 
//so if they name it wrong that is their problem, if they have stupid sizes their problem.
//and etc. 

// 
// const parentProductSchema = new mongoose.Schema({
//     productName: {type: String, required: true},
//     prodDesc: {type: String, required: true},
//     prodImage: {type: String, required:true}, 
//     prodCategory: {type: String, required: true},
//     prodSubCategory: {type: [String], default: [], required: true},
//     popularProd: {type: Boolean},
//     date: {type: Number, required: true},
//     childProduct: {type:[
//         {
//             // childProdName: {type: String, required: true},
//             //variationName: {type: String, required: true},
//             variation: {type: String, required: true},
//             childProdImage: {type: String, required:true}
//         }
//     ], default: [], required:true}
// });