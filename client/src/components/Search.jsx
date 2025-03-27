import search from '../assets/search.svg'

function Search(){
    return(
        <div className="w-auto flex justify-center mt-8">
            <div className="relative flex justify-between w-1/4 h-11">
                <input  type="text" placeholder="Buscar" className="border-2 border-black rounded-3xl w-full p-3"/>       
                <button type="button" className="h-6 w-6 rounded-xl absolute right-0 m-3">
                    <img src={search}  className="h-6 w-6"/>
                </button>
            </div>
        </div>
    )
}

export default Search;