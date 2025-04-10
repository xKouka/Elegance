import React from 'react';

function Producto({ product, onRemove, onDecrease, onIncrease }) {
    return (
        <div className="w-2/5 flex flex-row items-center justify-between border-2 border-black bg-white rounded-2xl m-3">
            <img
                src={product.img} // Usamos la imagen dinámica del producto
                alt={product.tittle}
                className="h-20 w-20 rounded-xl m-3"
            />
            <div className="flex flex-row ml-2 gap-20">
                <p className=" text-3xl font-bold">{product.tittle}</p> {/* Mostrar el título dinámico */}
                <p className='text-3xl'>{product.size}</p>
                <p className="text-3xl ">{product.price}$</p>
            </div>
            <button
                onClick={onRemove}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700 mr-8"
            >
                Eliminar
            </button>
        </div>
    );
}

export default Producto;
