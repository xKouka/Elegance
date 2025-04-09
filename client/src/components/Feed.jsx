import Cards from './Cards';
import { useAplication } from '../context/AplicationContext';
import { GetProduct } from '../service/product.service';
import Search from './Search'; // Importa el componente Search

function Feed() {
  const { product, setProduct } = useAplication();

  const searchProductByType = async (type) => {
    console.log('searchProductByType - type:', type);
    const products = await GetProduct(type);
    setProduct(products);
};

const searchProductByTitle = async (title) => {
    console.log('searchProductByTitle - title:', title);
    const products = await GetProduct(title, '');
    setProduct(products);
};

  return (
    <div className="flex flex-col justify-center">

      <Search onSearch={searchProductByTitle} /> 

      <div className="flex justify-center gap-9 m-10">
        <button
          className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white"
          onClick={async () => await searchProductByType('')}
        >
          Inicio
        </button>
        <button
          className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white"
          onClick={async () => await searchProductByType('anillo')}
        >
          Anillos
        </button>
        <button
          className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white"
          onClick={async () => await searchProductByType('collar')}
        >
          Collares
        </button>
        <button
          className="bg-white border-2 border-black rounded-2xl w-24 h-11 hover:bg-black hover:text-white"
          onClick={async () => await searchProductByType('pulsera')}
        >
          Pulseras
        </button>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-wrap justify-center gap-7 w-8/12">
          {product &&
            product.length > 0 &&
            product?.map((element) => (
              <Cards
                key={element._id}
                id={element._id}
                tittle={element.tittle}
                price={element.price}
                img={element.img}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;