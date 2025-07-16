import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


//Route for user login
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const cust_found = await userModel.findOne({email});
        
        if (!cust_found){
            //create the value. 
            return res.json({success:false, message: "Cust Not Found"});
        }

        //matching 
        const pwdMatch = await bcrypt.compare(password, cust_found.password);

        if (pwdMatch){
            //token creation why?
            const loginToken = createToken(cust_found._id);
            //response? why?
            res.json({success:true, loginToken});
        }else{
            return res.json({success:false, message: "Invalid credentials"});
        }
        

    } catch (error) {
        console.log(error);
        return res.json({success:false, message: error});
    }
}

//Route for user Registration
const registerUser = async (req, res) => {
    // res.json({msg:"Register API Working"})
    try {
        const {name, email, password} = req.body;
        //check user already exists?
        const exists = await userModel.findOne({email});
        // return res.json({success:false, message: "It passes the await cust_model"})
        if (exists){
            return res.json({success:false, message: "User already exists"})
        }
        //validating email format and strong password
        if (!validator.isEmail(email)){
            return res.json({success:false, message: "Please enter a valid email"})
        }
        if (password.length < 8){
            return res.json({success:false, message: "Please enter a strong password"})
        }

        //hashing customer password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newCustomer = new userModel({
            name, 
            email, 
            password: hashedPassword
        })

        const customer = await newCustomer.save()

        const token = createToken(customer._id) //under mongodb docs

        res.json({success:true, token})


    }catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

//Route for vendor login
const loginVendor = async (req, res) => {

}

//Route for vendor Registration
const registerVendor = async (req, res) => {

}


//Route for admin login
const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success:true, token})
        }else{
            res.json({success:false, message: "Invalid credentials"});
        }
    } catch (error) {
        
    }
}


export { loginUser, registerUser, loginVendor, registerVendor, adminLogin }