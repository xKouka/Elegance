import Cards from "./Cards"

function Feed(){
    return(
        <div className="flex flex-col justify-center">
    <div className="flex justify-center gap-9 m-10">
        <button className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white">Inicio</button>
        <button className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white">Anillos</button>
        <button className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white">Cadenas</button>
        <button className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white">Bolsos</button>
            
    </div>
    <div className="flex flex-row justify-center w-full">
        <div className="flex flex-wrap justify-center gap-7 w-8/12">
            <>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </>
        
        </div>
    </div>
</div>

    )
}

export default Feed;