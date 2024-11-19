import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams();

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:4000/api/usuarios/cambiar-password/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    newPassword: formData.newPassword,
                    confirmPassword: formData.confirmPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage('Contraseña actualizada con éxito.');
                setErrorMessage('');
                setFormData({
                    newPassword: '',
                    confirmPassword: '',
                });
            } else {
                setErrorMessage(data.msg || 'Error al cambiar la contraseña.');
            }
        } catch (error) {
            setErrorMessage('Error al intentar cambiar la contraseña.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-16 py-8 mx-auto py-4">
            <div className="w-2/3 shadow-lg rounded-2xl p-6 inline-block bg-gray-100 h-full">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-Azul-oscuro text-center">
                        Reestablecer Contraseña
                    </h1>
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

                </div>
            </div>
        </div>
    );
};

export default ResetPassword;