import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
       await mongoose.connect("mongodb://localhost:27017/elegance");
    } catch(error) {
        console.log(error);
    }
}

