import childProductModel from "../models/childProductModel.js";
import productModel from "../models/productModel.js";
import {v2 as cloudinary} from "cloudinary";


//this func cannot run cause need the arrays: variation, size, cost, stock to be initialized
const addProduct = async (req, res) =>{
    

    try {

        //I have a few ways to structure the data....
        //subproduct01 = {img, variation, }
        //subproduct01 = {}
        //subproduct01 = {}
        //subproduct01 = {}
        //subproduct01 = {}
        //....
        //subproduct10 = {}
        const {name, description, 
            image, category, subcategory, 
            storage,
            popularItem, discount,
            //products
            variationstrarr, sizestrarr, coststrarr, stockstrarr //
        } = req.body;

        const img1 = req.files.image1 && req.files.img1[0];
        const img2 = req.files.image2 && req.files.img1[1];
        const img3 = req.files.image3 && req.files.img1[2];
        const img4 = req.files.image4 && req.files.img1[3];
        const img5 = req.files.image5 && req.files.img1[4];
        const img6 = req.files.image6 && req.files.img1[5];

        const images = [img1, img2, img3, img4, img5, img6]//.filter((item)=> item != undefined);
        const imagesFilter = [img1, img2, img3, img4, img5, img6].filter((item)=> item != undefined);

        // let imagesUrl = await Promise.all(
        //     imagesFilter.map(async (item)=> {
        //         let res = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
        //         return res.secure_url;
        //     })
        // )

        let newChildProductArr = []; //an array for childProducts
        let j = 0; //cloudinary ctr
        let k = 0;

        let newChildProduct; //wanted const but cannot. 
        console.log(typeof("something"));
        console.log(typeof(variationstrarr));
        
        //int. rec.: make two seperate requests: json and forms requests. 

        // let variationarr = variationstrarr.split(',');
        // let sizearr = sizestrarr.split(',');
        // let costarr = coststrarr.split(',');
        // let stockarr = stockstrarr.split(',');

        //parent length for all imgs include undefined.
        // for (let i=1; i<images.length; i++){
            
        //     if (images[i] != undefined){
        //         newChildProduct = {
        //             //imageURL: imagesFilter[j],
        //             variation: variationarr[k],
        //             size: sizearr[k],
        //             cost: costarr[k],
        //             stock: stockarr[k]
        //         }
                
        //     }else{
        //         //newChildProduct = new childProductModel({
        //         newChildProduct = {
        //             //imageURL: undefined,
        //             variation: variationarr[k],
        //             size: sizearr[k],
        //             cost: costarr[k],
        //             stock: stockarr[k]
        //         }
        //     }
        //     j++; k++; 
        //     // newChildProductArr.push(newChildProduct);
        //     newChildProductArr.push(newChildProduct);
        // }

        // console.log(name, description, 
        //     image, category, subcategory, 
        //     popularItem, discount, 
        //     variationarr, sizearr, costarr, stockarr//products
        //     );
        //console.log(images);
        //console.log(imagesUrl);   
        // console.log("newChildProductArr");
        // console.log(newChildProductArr);
        
        let newProduct;
        const date = new Date();

        // if (images[0] != undefined){
        //     newProduct = new productModel({
        //         name: name,
        //         description: description,
        //         //image: imagesFilter[0],
        //         category: category,
        //         subcategory: subcategory,
        //         popularItem: popularItem, 
        //         discount: discount,
        //         date: date,
        //         products: newChildProductArr
        //     })
        // }else{
        //     newProduct = new productModel({
        //         name: name,
        //         description: description,
        //         image: undefined,
        //         category: category,
        //         subcategory: subcategory,
        //         popularItem: popularItem, 
        //         discount: discount,
        //         date: date,
        //         products: newChildProductArr
        //     })
        // }

        // const product = await newProduct.save();
           

        res.json({success:true, message: "successfully created product"});
    
    } catch (error) {
        console.log(error);
        res.json({success: "false", error});
    }

    // console.log("products:" + products);
    //The Data input from the video is simpler, our one is messier

    //but the input data for ours is like this...
    //name: hello kitty
    //description: a hello kitty plushie. 
    //category: plushie
    //subcategory: kids, toys.
    //popularItem: false
    //discount: none, 
    //date: 24/12/2024
    
    //childProduct01
    //

    //childProduct02
    //


    //2nd: finding/looking for seller/customer(user) who posted this
    //similar to the admin's role. so we still need to code it up. 
    
}


const listProducts = async (req, res) =>{
    try {
        const products = await productModel.find({});
        res.json({success:true, products})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}


const removeProduct = async (req, res) =>{
    try {
        await productModel.findByIdAndDelete(req,body.id)
        res.json({success:true, message: "Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});

    }
}


const singleProduct = async (req, res) =>{
    try {
        const {productId} = req.body
        const product = await productModel.findById(productId);

        res.json({success:true, product});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export {listProducts, addProduct, removeProduct, singleProduct}