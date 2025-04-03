import {useEffect} from 'react';
import Header from '../components/Header.jsx'
import Search from '../components/Search.jsx'
import Feed from '../components/Feed.jsx'
import Footer from '../components/Footer.jsx';
import {GetProduct} from '../service/product.service.js'
import { useAplication } from '../context/AplicationContext.jsx';


function HomePage() {
    const {setProduct} = useAplication() 

    useEffect(() => {
    (async()=>{
        getProduct()
    })()

  
    }, []);

    const getProduct = async() =>{
        const products = await GetProduct()
        console.log(products)
        setProduct(products)
    }

    return(
    <>
        <Header/>
        <Feed/>
        <Footer/>
    </>
    )
}

export default HomePage;