import React, { useEffect, useState } from 'react';

const ViewPqrs = () => {
  const [pqrs, setPqrs] = useState([]);

  // Función para obtener los PQRs
  const fetchPqrs = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/pqrs/obtener');
      if (!response.ok) {
        throw new Error('Error al obtener los PQRs');
      }
      const data = await response.json();
      if (data && Array.isArray(data.pqrs)) {
        setPqrs(data.pqrs);
      } else {
        console.warn("La respuesta no contiene un array 'pqrs' como se esperaba:", data);
      }
    } catch (error) {
      console.error('Error al cargar los PQRs:', error);
    }
  };

  useEffect(() => {
    fetchPqrs();
  }, []);

  const handleEstadoChange = async (id, nuevoEstado) => {
    try {
      const response = await fetch(`http://localhost:4000/api/pqrs/estado/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: nuevoEstado })
      });

      if (response.ok) {
        setPqrs(prevPqrs => prevPqrs.map(pqr =>
          pqr._id === id ? { ...pqr, estado: nuevoEstado } : pqr
        ));
      } else {
        console.error('Error al actualizar el estado del PQR');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Lista de PQRs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pqrs.length > 0 ? (
            pqrs.map((pqr) => (
              <div key={pqr.serial} className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{pqr.asunto}</h3>
                <p className="text-gray-700"><strong>Email:</strong> {pqr.email}</p>
                <p className="text-gray-700"><strong>Mensaje:</strong> {pqr.mensaje}</p>
                <p className="text-gray-600"><strong>Fecha:</strong> {new Date(pqr.fecha).toLocaleString()}</p>
                <p className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  pqr.estado === 'resuelto' ? 'bg-green-100 text-green-700' :
                  pqr.estado === 'en revisión' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {pqr.estado}
                </p>

                {pqr.archivo && (
                  <a
                    href={`http://localhost:4000/${pqr.archivo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-3 text-blue-600 hover:text-blue-800 underline"
                  >
                    Ver archivo adjunto
                  </a>
                )}

                <select
                  value={pqr.estado}
                  onChange={(e) => handleEstadoChange(pqr._id, e.target.value)}
                  className="w-full mt-4 px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-blue-300"
                >
                  <option value="no visto">No visto</option>
                  <option value="en revisión">En revisión</option>
                  <option value="resuelto">Resuelto</option>
                </select>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">No hay PQRs disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewPqrs;
