import Product from "../models/product.models.js"

export const getProducts = async (req,res) => {
    const product = await Product.find()
    res.json(product);
};

export const createProduct = async (req,res) => {
    const{tittle,price,size,count,type,img} = req.body

    const newProduct = new Product({
        tittle,
        price,
        size,
        count,
        type,
        img
    })
    const savedProduct = await newProduct.save()
    res.json(savedProduct);
};

export const getProduct = async (req,res) => {
    const product = await Product.findById(req.params.id);
    if(!product) return res.status(404).json({message:'1'})
    res.json(product)
}

export const deleteProduct = async (req,res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product) return res.status(404).json({message:'2'})
    return res.sendStatus(204);
}

export const updateProduct = async (req,res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body,{ new:true,});
    if(!product) return res.status(404).json({message:'3'})
    res.json(product)
}

