import Header from '../components/Header.jsx';
import Storecard from '../components/Storecard.jsx';
import Footer from '../components/Footer.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetProductById } from '../service/product.service.js';

function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        (async () => {
            GetProduct()
        })()
    }, [productId]);

    const GetProduct = async () => {
        const product = await GetProductById(productId)
        setProduct(product)
    }


    return (
        <>
            <Header />
            {product? (
                <Storecard product={product} />
            ) : (
                <div>Producto no encontrado</div>
            )}
            <Footer />
        </>
    );
}

export default ProductPage;