import React, { useState } from 'react'



const FormRegister = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: ''
    });
      
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Guardar datos en localStorage
        const prevData = JSON.parse(localStorage.getItem('registros')) || [];
        const newData = [...prevData, formData];
        localStorage.setItem('registros', JSON.stringify(newData));
      
        // Limpiar formulario después de enviar
        setFormData({
        nombre: '',
        email: '',
        password: ''
        });
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
                    <label htmlFor="nombre" className="block mb-2 text-sm font-semibold text-Azul-oscuro">Nombres y Apellidos:</label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
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