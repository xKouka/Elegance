import productApi from "../api/product.api";

export const GetProduct = async(tittle, type)=>{
    try{
        const filters = {
            ...(tittle && { tittle }),
            ...(type && { type }),
          };
        const products = await productApi.get('product',{params:filters})
        return products.data
    }catch(err){
        throw err 
    }
}

export const GetProductById = async(id)=>{
    try{
        const products = await productApi.get('product/'+id)
        console.log(products)
        return products.data
    }catch(err){
        throw err 
    }
}