import React from "react";

const imgURL = "http://localhost:4000/uploads/images"

const Modal = ({ producto, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-fit">
        <div className="flex">

          <div className="flex-1 w-auto mr-5 ">
            <img src={`${imgURL}/${producto.imagen}`} alt={producto.nombre} className="w-full h-96 object-cover rounded mb-4" />
          </div>
          <div className="flex-1 w-64 divide-y divide-dashed">
            <div>
              <p className="text-2xl py-3 font-bold mb-2 underline decoration-sky-500/[.33]">{producto.nombre}</p>
              {/* <strong>Precio:</strong> */}
              <p className="italic py-3 text-xl/[17px] "> ${producto.precio}</p>
            </div>
            <div className="py-5">
              <strong>Categoría:</strong>
              <p>{producto.categoria || "Sin categoría"}</p>
            </div>
            <div className="py-5">

            <strong>Descripción:</strong>
            <p> {producto.descripcion || "No disponible"}</p>
            </div>
            {/* Agrega otros detalles aquí */}
          </div>

        </div>
        <div className="flex items-end justify-center">
              <button
                className="my-4 mx-8m h-fit justify-self-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-slate-600"
                onClick={onClose}
              >
                Cerrar
              </button>
              <button
                className="my-4 mx-8 h-fit justify-self-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={onClose}
              >
                Agregar al carrito
              </button>
            </div>
      </div>
    </div>
  );
};

export default Modal;
