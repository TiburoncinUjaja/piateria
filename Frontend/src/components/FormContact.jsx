import React, { useState } from "react";

const FormContact = () => {
  const [asunto, setAsunto] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [responseMessage, setResponseMessage] = useState(""); // Nuevo estado para el mensaje de respuesta

  const handleFileChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("asunto", asunto);
    formData.append("email", email);
    formData.append("mensaje", mensaje);
    formData.append("fecha", new Date().toISOString());
    if (archivo) {
      formData.append("image", archivo); // Clave debe coincidir con el nombre esperado en el backend
    }

    try {
      const response = await fetch("http://localhost:4000/api/pqrs/agregar", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setResponseMessage(result.mensaje);
        setAsunto("");
        setEmail("");
        setMensaje("");
        setArchivo(null);
      } else {
        setResponseMessage("Error al enviar los datos.");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setResponseMessage("Error al enviar los datos.");
    }
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center pb-7 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0"></div>
      <div className="sm:max-w-5xl w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-Azul-oscuro">
            ¡Contáctenos!
          </h2>
          {/* Mostrar el mensaje de respuesta */}
          {responseMessage && (
            <div className="mt-4 text-lg text-green-600">
              {responseMessage}
            </div>
          )}
        </div>
        <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-Azul-oscuro tracking-wide">
              Asunto
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-Azul-claro"
              type="text"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              required
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-Azul-oscuro tracking-wide">
              Mensaje
            </label>
            <textarea
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-Azul-claro"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-Azul-oscuro tracking-wide">
              Adjuntar archivo
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center rounded-lg border-4 border-dashed w-full h-20 p-10 group text-center">

                <input type="file"  onChange={handleFileChange} />
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
              type="submit"
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
