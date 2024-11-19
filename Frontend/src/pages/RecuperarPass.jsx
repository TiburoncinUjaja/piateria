import React, { useState } from 'react';

const RecuperarPass = () => {
    const [formData, setFormData] = useState({
        email: '',
        nombre: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isVerified, setIsVerified] = useState(false); // Controla la habilitación de los campos de contraseña

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Validar correo y nombre
    const handleVerifyUser = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/usuarios/validar-usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    nombre: formData.nombre,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsVerified(true); // Habilitar campos de contraseña
                setErrorMessage('');
                setSuccessMessage('Usuario validado correctamente. Ahora puedes cambiar la contraseña.');
            } else {
                setIsVerified(false);
                setErrorMessage(data.msg || 'Correo o nombre no coinciden.');
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('Error al validar el usuario.');
        }
    };

    // Cambiar contraseña
    const handleChangePassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/usuarios/cambiar-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    newPassword: formData.newPassword,
                    confirmPassword: formData.confirmPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage('Contraseña actualizada con éxito.');
                setErrorMessage('');
                setFormData({
                    email: '',
                    nombre: '',
                    newPassword: '',
                    confirmPassword: '',
                });
                setIsVerified(false);
            } else {
                setErrorMessage(data.msg || 'Error al cambiar la contraseña.');
            }
        } catch (error) {
            setErrorMessage('Error al intentar cambiar la contraseña.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-16 py-8 mx-auto py-4">
            <div className="w-full shadow-lg rounded-2xl p-6 inline-block bg-gray-100 h-full">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-Azul-oscuro text-center">
                        Recuperar Contraseña
                    </h1>
                    {!isVerified ? (
                        // Formulario para validar correo y nombre
                        <form className="space-y-4 md:space-y-6" onSubmit={handleVerifyUser}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-Azul-oscuro">
                                    Correo:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="nombre" className="block mb-2 text-sm font-semibold text-Azul-oscuro">
                                    Nombre:
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    onChange={handleChange}
                                    value={formData.nombre}
                                    className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Tu nombre completo"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-Azul-oscuro font-semibold rounded-lg text-sm px-5 py-2.5 hover:text-Azul-oscuro hover:bg-Beige hover:border-Azul-oscuro border-2 text-center"
                            >
                                Verificar Usuario
                            </button>
                            {errorMessage && <p className="text-red-600 text-sm text-center mt-2">{errorMessage}</p>}
                            {successMessage && <p className="text-green-600 text-sm text-center mt-2">{successMessage}</p>}
                        </form>
                    ) : (
                        // Formulario para cambiar contraseña
                        <form className="space-y-4 md:space-y-6" onSubmit={handleChangePassword}>
                            <div>
                                <label htmlFor="newPassword" className="block mb-2 text-sm font-semibold text-Azul-oscuro">
                                    Nueva contraseña:
                                </label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    id="newPassword"
                                    onChange={handleChange}
                                    value={formData.newPassword}
                                    className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-semibold text-Azul-oscuro">
                                    Confirmar nueva contraseña:
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    onChange={handleChange}
                                    value={formData.confirmPassword}
                                    className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-Azul-oscuro font-semibold rounded-lg text-sm px-5 py-2.5 hover:text-Azul-oscuro hover:bg-Beige hover:border-Azul-oscuro border-2 text-center"
                            >
                                Cambiar Contraseña
                            </button>
                            {errorMessage && <p className="text-red-600 text-sm text-center mt-2">{errorMessage}</p>}
                            {successMessage && <p className="text-green-600 text-sm text-center mt-2">{successMessage}</p>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecuperarPass;