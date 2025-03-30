import { Link } from "react-router-dom";


function Cards({tittle,price,img,id}){

    return(       
    <div className="flex flex-col justify-between gap-3 bg-white rounded-xl drop-shadow-xl h-96 w-64">
        <div className="flex justify-center">
            <img src={img} className="h-40 w-40 m-6 rounded-xl"/>
        </div>
        <div className="flex justify-center font-bold text-lg  w-64 text-wrap text-center">
            <p>{tittle}</p>
        </div>
        <div className="flex justify-center -mt-4">
            <p>{price}$</p>
        </div>
        <div className="flex flex-col items-center justify-center">
        <Link
          to={`/producto/${id}`}
          className="text-xl rounded-2xl w-24 h-11 border-2 justify-center border-black hover:bg-black hover:text-white m-2"
        >
          Detalles
        </Link>
      </div>
    </div>
    )
}
export default Cards;