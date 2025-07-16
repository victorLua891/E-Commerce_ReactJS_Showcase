import mongoose from "mongoose";

const connectDB = async () => {

    
    
    //MUST BE BEFORE OTHERWISE WONT SHOW IN CONSOLE. 
    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    });


    //MUST BE AFTER ELSE THE MESSAGE ABOVE WONT SHOW IN CONSOLE.
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);

}

export default connectDB;