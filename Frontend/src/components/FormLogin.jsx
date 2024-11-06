import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        
        try {
            const response = await fetch("http://localhost:4000/api/usuarios/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Guardar solo los datos del usuario (sin token ni verificación)
                const userData = {
                    email: data.user.email,
                    nombres: data.user.nombres,
                    rol: data.user.rol
                };
                
                // Puedes almacenar el usuario en un contexto, o en el estado global
                // Si no usas contexto, puedes usar algo similar al localStorage si lo necesitas sin el token
                // localStorage.setItem('sesion', JSON.stringify(userData)); // Este paso lo puedes omitir

                // Usar el estado del contexto (si lo tienes)
                // setUser(userData); // Si tienes un estado de usuario en un Context

                navigate('/'); // Redirigir al usuario al inicio
            } else {
                setError(true);  // Mostrar error si los datos son incorrectos
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setError(true);  // Mostrar error si ocurre una excepción
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-1/2">
            <div className="w-full shadow-lg rounded-2xl p-6 inline-block bg-gray-100 h-full ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-Azul-oscuro text-center">
                        ¡Inicia sesión aquí!
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-Azul-oscuro">Correo:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-semibold text-Azul-oscuro">Contraseña:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5"
                                required
                            />
                        </div>
                        {error && <p className="text-Rojo text-center">Datos incorrectos!!!</p>}
                        <button
                            type="submit"
                            className="w-full text-white bg-Azul-oscuro font-semibold rounded-lg text-sm px-5 py-2.5 hover:text-Azul-oscuro hover:bg-Beige hover:border-Azul-oscuro border-2 text-center"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormLogin;