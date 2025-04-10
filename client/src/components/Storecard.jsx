import React, { useState } from 'react';
import { useCart } from '../context/CartContext';  // Importamos el contexto del carrito
import prueba from '../assets/perro.jpg';

function Storecard({ product }) {
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useCart();  // Obtener la función de agregar al carrito

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    // Función para agregar al carrito con la cantidad seleccionada
    const handleAddToCart = () => {
        if (cantidad > 0) {
            addToCart({ ...product, quantity: cantidad });
            window.alert('Producto agregado');
        } else {
            alert('Por favor selecciona una cantidad');
        }
    };

    return (
        <div className="flex justify-center w-full h-auto m-10">
            <div className="flex justify-between w-3/4 bg-white rounded-2xl p-6">
                <div className="w-1/2 flex justify-center">
                    <img
                        src={product.img}
                        alt="foto"
                        className="h-80 w-72 rounded-xl"
                    />
                </div>
                <div className="flex flex-col w-1/2 justify-between">
                    <div>
                        <h1 className="font-bold text-6xl mb-4">{product.tittle}</h1>
                        <br /><br />
                        <p className='text-4xl font-semibold'>Precio:</p>
                        <br />
                        <p className="font-semibold text-4xl">{product.price}$</p>
                        <div className='flex flex-row gap-10'>
                            <div className='flex flex-col'>
                                <p className="text-2xl mt-9">Talla:</p>
                                <div className="mt-3 flex gap-3">
                                    <span className="border-2 rounded-lg text-2xl flex justify-center items-center border-black w-10 h-10">
                                        {product.size}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col mt-9">
                                <p className="text-2xl mb-3">Cantidad:</p>

                                <ul className="flex gap-5">
                                    <li>
                                        <button
                                            className="border-2 rounded-lg hover:bg-black hover:text-white border-black w-10 h-10"
                                            onClick={disminuirCantidad}
                                        >
                                            -
                                        </button>
                                    </li>
                                    <p className="text-2xl mb-3">{cantidad}</p>
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
                        </div>
                    </div>
                    <div className="flex flex-row gap-7 mt-9">
                        <a href="/">
                            <button className="border-black bg-white border-2 text-2xl hover:bg-black hover:text-white rounded-2xl h-14 w-60 ">
                                Volver
                            </button>
                        </a>
                        <button
                            onClick={handleAddToCart}
                            className="border-black bg-white border-2 text-2xl hover:bg-black hover:text-white rounded-2xl h-14 w-60 "
                        >
                            Añadir al carrito
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Storecard;
