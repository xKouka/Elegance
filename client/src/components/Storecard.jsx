import prueba from '../assets/perro.jpg'
import React, { useState } from 'react';

function Storecard({ product }) {
    const [cantidad, setCantidad] = useState(0);

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="flex flex-row justify-center w-full h-auto m-10">
            <div className="flex justify-stretch w-3/4 h-5/6 bg-white rounded-2xl ">
                <div className="w-1/2 flex flex-col items-center gap-9 pt-20">
                    <img
                        src={prueba}
                        alt="foto"
                        className="h-80 w-72 rounded-xl"

                    />
                    <div className="flex flex-col gap-5 ml-8">
                        <a href="/cart">
                            <button className="border-black bg-white border-2 text-3xl hover:bg-black hover:text-white rounded-full h-14 w-60">
                                Añadir al carrito
                            </button>
                        </a>
                        <a href="/">
                            <button className="border-black bg-white border-2 hover:bg-red-500 hover:text-white text-1xl rounded-full h-14 w-20">
                                Volver
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col h-auto w-1/2 pt-20">
                    <div className="flex justify-start ml-9 mb-3">
                        <h1 className="font-bold text-6xl">{product.tittle}</h1>
                    </div>
                    <div>
                        <p className="font-bold text-5xl ml-9">{product.price}$</p>
                    </div>
                    <p className="text-2xl ml-9 mt-9">Talla:</p>
                    <div className="ml-9 mt-3 flex gap-3 ">
                        <span className="border-2 rounded-lg text-2xl flex flex-row justify-center items-center border-black w-10 h-10">
                            {product.size}
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-32 h-12 mt-9">
                        <p className="text-2xl ml-9 mt-9 mb-3">Cantidad:</p>
                        <p className="text-2xl ml-9 mb-3">{cantidad}</p>
                        <ul className="flex flex-row gap-5 ml-9 ">
                            <li>
                                <button
                                    className="border-2 rounded-lg hover:bg-black hover:text-white border-black w-10 h-10"
                                    onClick={disminuirCantidad}
                                >
                                    -
                                </button>
                            </li>
                            <li>
                                <button
                                    className="border-2 rounded-lg hover:bg-black hover:text-white border-black w-10 h-10"
                                    onClick={aumentarCantidad}
                                >
                                    +
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Storecard;