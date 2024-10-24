import React from 'react'
import { useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { FaUserAstronaut } from "react-icons/fa";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  function obtenerNombre(){

    const sesion = JSON.parse(localStorage.getItem('sesion')) || [];
    return sesion ? sesion[0] : null
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Aquí añadir la lógica para cerrar la sesión
    localStorage.setItem('sesion', JSON.stringify(null));
    window.location.href = '/';
    window.location.reload();
    alert('¡Sesión cerrada!');
  };
  return (
    <div className="max-w-7xl mx-auto px-4 flex justify-between divide-x divide-Azul-claro">
      <Link to="/carrito" className='align-middle flex items-center justify-center'>
        <FontAwesomeIcon className='px-5 py-3' icon={faCartShopping} style={{ color: "#0081A7" }} />
      </Link>
      <ul className="flex items-center space-x-4 px-6">
        <li className="relative">
          <button className="w-full shadow-lg rounded-br-lg p-3 inline-block bg-gray-100 flex items-center justify-center gap-x-2" onClick={handleToggle}>
            <FaUserAstronaut className=''/>Hola, {obtenerNombre()}
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md divide-y divide-gray-100">
              <li>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Mi perfil</a>
              </li>
              <li>
                <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">Cerrar sesión</button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Users