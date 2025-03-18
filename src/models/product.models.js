import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    tittle:{
        type: String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    count:{
        type:Number,
        required:true,
    },
    size:{
        type:String,
        required:true
    }},{
        timestamps:true 
    }
);

export default mongoose.model('Product', productSchema)