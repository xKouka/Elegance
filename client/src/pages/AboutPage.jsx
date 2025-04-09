import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="flex flex-row justify-center h-full"> {/* Agregamos h-full */}
          <div className="flex flex-col items-center w-2/4 h-auto shadow-xl mt-28 text-center">
            <h1 className="text-4xl font-bold">¿Quiénes somos?</h1>
            <br />
            <p>
              En Elegance, creemos que los accesorios son más que simples detalles: son una forma de expresión, estilo y personalidad. Nos especializamos en ofrecer una exclusiva selección de anillos, pulseras, cadenas, bolsos y otros accesorios diseñados para realzar tu look y acompañarte en cada ocasión.
            </p>
            <br />
            <p>
              Nuestra misión es brindarte productos de alta calidad, con diseños modernos y elegantes, a precios accesibles. Cada pieza es seleccionada con cuidado para asegurarnos de que encuentres algo que refleje tu esencia y te haga sentir especial.
            </p>
            <br />
            <p>
              Nos apasiona la moda y la autenticidad, por eso trabajamos constantemente para traerte lo último en tendencias y accesorios que se adapten a tu estilo único.
            </p>
            <br />
            <h2 className="font-bold">
              ¡Gracias por ser parte de nuestra comunidad!
            </h2>
            <br />
            <a href="/">
              <button className="border-black bg-white border-2 text-2xl rounded-full h-11 w-36 hover:bg-black hover:text-white hover:border-black">
                Volver
              </button>
            </a>
            <br />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;