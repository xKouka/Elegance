import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import ig from '../assets/instagram.svg'
import logo from '../assets/EleganceH.svg'



function Footer(){
    return(
        <footer className=" bg-black w-full  h-auto">
            <div className="flex flex-row justify-center items-center mt-9 gap-5">
                <img src={logo} className="size-40 "/>
            </div>

            <div className="flex flex-row justify-center gap-16 mb-4">
                <a href="/" className="text-white ">Inicio</a>
                <a href="/about" className="text-white">¿Quiénes somos?</a>
            </div>
            <div className="flex flex-row  justify-around w-auto">
                <div className="text-white">
                    <span>Dev. Oscar Aguiar</span>
                </div>
                <div className="flex flex-row gap-8 w-64 mb-6">   
                    <img className="size-6" src={ig} alt="ig"/>
                    <img className="size-6" src={twitter} alt="tt"/>
                    <img className="size-6" src={facebook} alt="fc"/>
                </div>
                <div className=" text-white">
                    <span>
                        2025 
                    </span>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer;