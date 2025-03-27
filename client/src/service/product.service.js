import productApi from "../api/product.api";

export const GetProduct = async()=>{
    try{
        const products = await productApi.get('product')
        console.log(products)
        return products.data
    }catch(err){
        throw err 
    }
}