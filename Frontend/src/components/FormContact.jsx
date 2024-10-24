import React from "react";

const FormContact = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pb-7 px-4 sm:px-6 lg:px-8 ">
      <div className="absolute inset-0 z-0"></div>
      <div className="sm:max-w-5xl w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-Azul-oscuro">
            ¡Contáctenos!
          </h2>
        </div>
        <form className="mt-8 space-y-3" action="#" method="POST">
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-Azul-oscuro tracking-wide">
              Asunto
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-Azul-claro"
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-Azul-oscuro tracking-wide">
              E-mail
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-Azul-claro"
              type="email"
              placeholder="mail@gmail.com"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-Azul-oscuro tracking-wide">
              Mensaje
            </label>
            <textarea
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-Azul-claro"
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-Azul-oscuro tracking-wide">
              Adjuntar archivo
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col justify-center items-center">
                  <div className="flex flex-auto max-h-48 w-1/6  mx-auto -mt-10 ">
                    <img
                      className="has-mask h-36 object-center "
                      src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                      alt="freepik image"
                    />
                  </div>
                  <p className="pointer-none text-gray-500 ">
                    <span className="text-sm">Selecciona o suleta</span>{" "}
                    archivos aquí <br /> o{" "}
                    <a
                      href=""
                      id=""
                      className="text-Azul-claro hover:underline"
                    >
                      selecciona archivos
                    </a>{" "}
                    de tu computadora
                  </p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <span>
              Al enviar este formulario, acepta nuestros términos y condiciones
              y nuestra política de privacidad, que explica cómo podemos
              recopilar, utilizar y divulgar su información personal, incluso a
              terceros :){" "}
            </span>
          </p>
          <div>
            <button
              type="button"
              className="my-5 w-full flex justify-center bg-Azul-oscuro text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-Azul-claro shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
