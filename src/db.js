import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
       await mongoose.connect("mongodb+srv://oaguiar2102:1234@cluster0.msgxo.mongodb.net/");
    } catch(error) {
        console.log(error);
    }
}

