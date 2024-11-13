import React, { useState } from 'react';

const FormRegister = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuario registrado exitosamente.");
        setFormData({
          nombres: '',
          email: '',
          password: ''
        });
      } else {
        alert(data.msg || "Error al registrar usuario.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 px-6 mx-auto lg:py-0 w-1/2">
      <div className="w-full shadow-lg rounded-2xl p-6 inline-block bg-gray-100 h-full">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-Azul-oscuro text-center h-7">
            ¡Regístrate aquí!
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombres" className="block mb-2 text-sm font-semibold text-Azul-oscuro">Nombres y Apellidos:</label>
              <input
                type="text"
                name="nombres"
                id="nombres"
                value={formData.nombre}
                onChange={handleChange}
                className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="nombre completo"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-Azul-oscuro">Correo:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="empresa@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-semibold text-Azul-oscuro">Contraseña:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="••••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-Azul-oscuro font-semibold rounded-lg text-sm px-5 py-2.5 hover:text-Azul-oscuro hover:bg-Beige hover:border-Azul-oscuro border-2 text-center"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
