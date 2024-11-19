import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDropdown = ({ user, handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const goToAdmin = () => {
    navigate('/admin');
    setIsDropdownOpen(false); // Cerrar el dropdown después de navegar
  };

  // const editProfile = () => {
  //   navigate('/edit-profile');
  //   setIsDropdownOpen(false); // Cerrar el dropdown después de navegar
  // };

  return (
    <div className="relative">
      {/* Botón que muestra el nombre del usuario y abre/cierra el dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center text-white bg-Azul-oscuro border-2 border-Azul-oscuro hover:text-Azul-oscuro hover:bg-Beige font-medium rounded-full text-sm px-5 py-2.5"
      >
        Hola, {user.nombres}
      </button>

      {/* Dropdown menu que se despliega al hacer clic */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-Azul-oscuro rounded-lg shadow-lg">

          {/* Opción "Admin" solo visible si el rol del usuario es "admin" */}
          {user.rol === 'admin' && (
            <button
              onClick={goToAdmin}
              className="w-full text-left text-sm text-Azul-oscuro px-4 py-2 hover:bg-Beige"
            >
              Admin
            </button>
          )}

          {/* <button
            onClick={editProfile}
            className="w-full text-left text-sm text-Azul-oscuro px-4 py-2 hover:bg-Beige"
          >
            Editar Perfil
          </button>    */}

          <button
            onClick={handleLogout}
            className="w-full text-left text-sm text-Azul-oscuro px-4 py-2 hover:bg-Beige"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
