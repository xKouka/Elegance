import  prueba from '../assets/perro.jpg'

function Producto(){
    return(
    <div className="  w-2/5 flex flex-row items-center justify-around border-2 border-black bg-white rounded-2xl m-3">
        <img src={prueba}  className="h-20 w-20 rounded-xl m-3"/>
        <p>[tittle]</p>
        <p>[price]</p>
        <button className="w-10 border-2 border-red-600 rounded-full hover:bg-red-600 hover:text-white">-</button>
    </div>
    )
}

export default Producto;