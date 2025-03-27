function Storecard(){
    return(
        <div className="flex flex-row justify-center w-full h-auto m-10">
            <div className="flex justify-stretch w-3/4 h-5/6 bg-white rounded-2xl ">
                <div className="w-1/2 flex flex-col items-center gap-9 pt-20">
                    <img src="../../public/image.png" alt="foto" className="h-80 w-72  rounded-xl"/>
                    <div>
                        <ul className="flex flex-row gap-5">
                            <li>
                                <img src="../../public/image.png" alt="foto" className="h-24 w-24  rounded-xl"/>
                            </li>
                            <li>
                                <img src="../../public/image.png" alt="foto" className="h-24 w-24  rounded-xl"/>
                            </li>
                            <li>
                                <img src="../../public/image.png" alt="foto" className="h-24 w-24  rounded-xl"/>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="flex flex-col h-auto w-1/2 pt-20">
                    <div className="flex justify-start ml-9 mb-3">
                        <h1 className="font-bold text-6xl">[Titulo]</h1>
                    </div>
                    <div>
                        <p className="font-bold text-5xl ml-9">[Precio]</p>
                    </div>
                    <p className="text-2xl ml-9 mt-9">Talla:</p>
                    <div  className="ml-9 mt-3">
                        <button className="border-2 rounded-lg border-black w-10 h-10">S</button>
                        <button className="border-2 rounded-lg border-black w-10 h-10">M</button>
                        <button className="border-2 rounded-lg border-black w-10 h-10">L</button>
                    </div> 
                    <div className="flex flex-col items-center justify-center w-32 h-12 mt-9">
                        <p className="text-2xl ml-9 mt-9 mb-3">Cantidad:</p>
                        <p className="text-2xl ml-9 mb-3">0</p>
                        <ul className="flex flex-row gap-5 ml-9 ">
                            <li>
                                <button className="border-2 rounded-lg border-black w-10 h-10">-</button>
                            </li>
                            <li>
                                <button className="border-2 rounded-lg border-black w-10 h-10">+</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-5 mt-24 ml-8">
                            <button className="border-black bg-white border-2 text-3xl rounded-full h-14 w-60">Añadir al carrito</button>
                            <button className="border-black bg-white border-2 text-1xl rounded-full h-14 w-20"> Volver</button>
                    </div>
                </div>
            </div>
        </div>
    )
}