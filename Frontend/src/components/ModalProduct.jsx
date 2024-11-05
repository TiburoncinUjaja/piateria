import React from "react";

const Modal = ({ producto, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg max-w-md w-full">
        <button className="text-right text-red-500 font-bold mb-4" onClick={onClose}>
          X
        </button>
        <h2 className="text-2xl font-bold mb-2">{producto.name}</h2>
        <img src={producto.imageUrl} alt={producto.name} className="w-full h-48 object-cover rounded mb-4" />
        <p><strong>Precio:</strong> ${producto.price}</p>
        <p><strong>Categoría:</strong> {producto.category || "Sin categoría"}</p>
        <p><strong>Descripción:</strong> {producto.description || "No disponible"}</p>
        {/* Agrega otros detalles aquí */}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
