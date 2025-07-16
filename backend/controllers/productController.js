// import childProductModel from "../models/childProductModel.js";
import productModel from "../models/productModel.js";
import {v2 as cloudinary} from "cloudinary";


//this func cannot run cause need the arrays: variation, size, cost, stock to be initialized
const addProduct = async (req, res) =>{
    try {
        //I have a few ways to structure the data....
        //subproduct01 = {img, variation, }
        //subproduct02 = {}
        //subproduct03 = {}
        //....
        //subproduct10 = {}
        

        console.log(req.body);

        const {name, description, 
            price, category, 
            bestseller, stock,
            discount, 
            storage
        } = req.body;

        const exists = await productModel.findOne({name}); //buffering timeout. 
        if (exists){
            return res.json({success: false, message: "Product already exists"})
        }

        //yes! this one image1 naming needs to be same as routes. 
        const img1 = req.files.image1 && req.files.image1[0];
        const img2 = req.files.image2 && req.files.image2[0];
        const img3 = req.files.image3 && req.files.image3[0];
        const img4 = req.files.image4 && req.files.image4[0];
        const img5 = req.files.image5 && req.files.image5[0];
        // const img6 = req.files.image6 && req.files.img1[5];

        console.log("Image File URLs");
        console.log("img1");
        console.log(img1);
        console.log("img2")
        console.log(img2);

        const imagesFilter = 
        [img1, img2, img3, img4, img5].filter((item)=> 
            item != undefined);

        console.log("image_filter")
        console.log(imagesFilter);

        let imagesUrl = await Promise.all(
            imagesFilter.map(async (item)=> {
                let res = 
                await cloudinary.uploader.upload(item.path, 
                    {resource_type:'image'});
                return res.secure_url;
            })
        )

        console.log("cloudinary_img")
        console.log(imagesUrl);
        
        const date = new Date();

        const productData = {
            name, 
            description,
            image: imagesUrl,
            category,
            popularItem: bestseller === "true" ? true : false, 
            discount, 
            date,
            // variation: JSON.parse(variation), //to convert form data to an array.  
            // cost: JSON.parse(cost),
            // stock: JSON.parse(stock)
            price,
            stock,
            storage: JSON.parse(storage)
        }

        const product = new productModel(productData);

        await product.save();
           

        res.json({success:true, message: "successfully created product"});
    
    } catch (error) {
        console.log(error);
        res.json({success: "false", error});
    }
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
        await productModel.findByIdAndDelete(req.body.id)
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