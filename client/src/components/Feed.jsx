import Cards from "./Cards"
import { useAplication } from '../context/AplicationContext';
import { GetProduct } from "../service/product.service";

function Feed(){

    const {product, setProduct} = useAplication() 
    const  searchProductByType = async (type) => {
        const product = await GetProduct(type)
        setProduct(product)
    }

    return(
        <div className="flex flex-col justify-center">
            <div className="flex justify-center gap-9 m-10">
                <button className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white" onClick={async()=> await searchProductByType("")}>Inicio</button>
                <button className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white" onClick={async()=> await searchProductByType("anillos")}>Anillos</button>
                <button className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white" onClick={async()=> await searchProductByType("collar")}>Collares</button>
                <button className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white"onClick={async()=> await searchProductByType("bolsos")} >Bolsos</button>
                    
            </div>
            <div className="flex flex-row justify-center w-full">
                <div className="flex flex-wrap justify-center gap-7 w-8/12">
                {product && product.length > 0 && product?.map(element => (
                        <Cards
                            key={element._id}
                            id={element._id}
                            tittle={element.tittle}
                            price={element.price}
                        // img={element.url}
                        />
                    ))}  
                </div>
            </div>
        </div>

    )
}

export default Feed;