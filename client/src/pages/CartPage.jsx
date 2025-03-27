import Header from '../components/Header.jsx'
import Producto from '../components/Producto.jsx';

function CartPage() {
    return(
    <>
        <Header/>
        <div className="flex flex-col items-center w-full h-24">
            <Producto/>
            <Producto/>
            <Producto/>
            <Producto/>
            <button className="border-black bg-white border-2 text-2xl rounded-full h-14 w-36 hover:bg-black hover:text-white hover:border-black">Comprar</button>
        </div>
    </>
    )
}

export default CartPage;