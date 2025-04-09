import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Feed from '../components/Feed.jsx';
import Footer from '../components/Footer.jsx';
import { GetProduct } from '../service/product.service.js';
import { useAplication } from '../context/AplicationContext.jsx';

function HomePage() {
    const { setProduct } = useAplication();

    useEffect(() => {
        (async () => {
            await getProduct();
        })();
    }, []);

    const getProduct = async () => {
        const products = await GetProduct();
        console.log(products);
        setProduct(products);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow mb-8">
                <Feed />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;