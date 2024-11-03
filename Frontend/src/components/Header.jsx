import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/logo.png";
import Users from "./Users";

const Header = ({searchTerm, setSearchTerm }) => {
  const [sesionActiva, setSesionActiva] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");

  useEffect(() => {
    // Verificar y establecer el estado de la sesión al cargar el componente
    const sesion = JSON.parse(localStorage.getItem("sesion"));
    if (sesion && sesion[0]) {
      setSesionActiva(true);
      setNombreUsuario(sesion[0]);
    } else {
      setSesionActiva(false);
      setNombreUsuario("");
    }
  }, []);

  const handleSearchTermChange = e =>{
    setSearchTerm(e.target.value);
  }

  const btnLink =
    "mr-5 px-5 py-5 hover:text-Azul-oscuro hover:border-b-2 border-Azul-oscuro cursor-pointer";
  const btnActive =
    "mr-5 px-5 py-5 text-Azul-oscuro border-b-2 border-Azul-oscuro cursor-pointer";
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ps-16">
        <a className="flex title-font font-medium items-cenzter text-gray-900 mb-4 md:mb-0 ">
          <img
            src={logo}
            alt=" Imagen del Producto"
            className="w-12 h-12 text-white  rounded-full"
          />
          <span className="m-3 text-xl inline-block align-middle	">
            Piñata Party
          </span>
        </a>

        <form className="block w-1/3">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-Azul-oscuro rounded-lg bg-gray-50 focus:border-Azul-oscuro"
              placeholder="Busca globos, decoraciones..."
              onChange={handleSearchTermChange}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-Azul-oscuro hover:bg-Azul-claro hover:border-Azul-oscuro hover:border-2 hover:text-Azul-oscuro focus:ring-4 focus:outline-none focus:ring-Azul-oscuro font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>

        <div className="divide-x align-middle">
          {sesionActiva ? (
            <Users />
          ) : (
            <Link to="/login" className="px-5 ">
              <button
                type="button"
                className="text-white bg-Azul-oscuro border-2 border-Azul-oscuro hover:text-Azul-oscuro hover:bg-Beige hover:w-30 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      <nav className="w-full md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? btnActive : btnLink)}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/SobreNosotros"
          className={({ isActive }) => (isActive ? btnActive : btnLink)}
        >
          Sobre Nosotros
        </NavLink>
        <NavLink
          to="/contactenos"
          className={({ isActive }) => (isActive ? btnActive : btnLink)}
        >
          Contactanos
        </NavLink>
        <NavLink
          to="/API"
          className={({ isActive }) => (isActive ? btnActive : btnLink)}
        >
          API
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
