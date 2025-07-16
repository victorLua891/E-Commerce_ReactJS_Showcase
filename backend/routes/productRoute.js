import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();


//i think we set number of subproducts to be 10 only but 10+1(parent) = 11(total)
productRouter.post('/add', adminAuth, upload.fields(
    [{name:'image1', maxCount:1}, {name:'image2', maxCount:1}, 
    {name:'image3', maxCount:1}, {name:'image4', maxCount:1},
    {name:'image5', maxCount:1}, {name:'image6', maxCount:1}]), addProduct);
productRouter.post('/remove', adminAuth, removeProduct);
//for shoppee, it would be remove cart product(remove a COPY of the product)
//or remove vendor product copy. 
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProducts);

export default productRouter;