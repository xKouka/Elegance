import {useEffect} from 'react';
import Header from '../components/Header.jsx'
import Search from '../components/Search.jsx'
import Feed from '../components/Feed.jsx'
import Footer from '../components/Footer.jsx';
import {GetProduct} from '../service/product.service.js'

function HomePage() {
    useEffect(() => {
    (async()=>{
        GetProduct()
    })()

  
    }, []);
    return(
    <>
        <Header/>
        <Search/>
        <Feed/>
        <Footer/>
    </>
    )
}

export default HomePage;