import React from 'react';

const RegistroList = () => {
  const registros = JSON.parse(localStorage.getItem('registros')) || [];

  if (registros.length === 0) {
    return <p>No hay registros aún.</p>;
  }

  return (
    <div>
      <h2>Lista de Registros</h2>
      <ul>
        {registros.map((registro, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {registro.nombre}, <strong>Email:</strong> {registro.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegistroList;
