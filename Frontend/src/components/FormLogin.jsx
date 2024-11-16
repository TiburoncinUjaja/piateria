import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; // Importa el hook useUser

const FormLogin = () => {
    const navigate = useNavigate();
    const { setUser } = useUser(); // Obtiene setUser del contexto de usuario
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
            console.log(data);
            
            if (response.ok) {
                const userData = {
                    email: data.user.email,
                    nombres: data.user.nombres,
                    rol: data.user.rol
                };
                setUser(userData); // Esto actualizará tanto el contexto como localStorage
                navigate('/'); 
            } else {
                setError(true); 
            }
            
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setError(true);  // Mostrar error si ocurre una excepción
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-1/2">
            <div className="w-full shadow-lg rounded-2xl p-6 inline-block bg-gray-100 h-full">
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
