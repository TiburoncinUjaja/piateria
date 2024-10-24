import logo from "../img/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 bg-gray-100 body-font">
        <div className="container px-5 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src={logo}
                alt="logo de la Aplicación"
                style={{ width: "90px", height: "auto" }}
              />
              <span className="ml-3 text-xl">PIÑATA PARTY OFICIAL</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Hacemos realidad tus sueños!
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                INFORMACIÓN
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-300">
                    Acerca de mi pedido
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-300">
                    Forma de Pago
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-300">
                    Comó llegar
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-300">Reclamos</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                COMPAÑIA
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-300" href="/">
                    ¿Quiénes somos?
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-300">
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-300">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-300">
                    Política de Privacidad
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CONTÁCTANOS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-300">
                    Whatsapp: 322 431 5160
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-300">
                    Teléfono: 866 2042
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-300">
                    info@pinateriacol.com.co
                  </a>
                </li>
                <h5>
                  <a className="text-teal-600 hover:text-gray-800 opacity-30">
                    Lunes a Sábado 9:00am - 7:00pm
                  </a>
                </h5>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 Piiatata —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @PiñataParty
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
