import React, { useState } from "react";
import Globos from "../img/globosRojos.jpg";

const FlashcardAdmin = () => {
  const [showForm, setShowForm] = useState(false);
  const [productImage, setProductImage] = useState(null); // Estado para la imagen del producto
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescripcion] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productState, setProductState] = useState("");
  const [productPrice, setProductPrice] = useState("");
  

  // Función para alternar el formulario
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Maneja la selección de imagen
  const handleImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  // Envía el formulario con los datos del producto
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("codigo", productCode);
    formData.append("nombre", productName);
    formData.append("precio", productPrice);
    formData.append("imagen", "../Backend/img new products/coso.jpg");
    formData.append("descripcion", productDescription);
    formData.append("categoria", productCategory);
    formData.append("estado", productState);   


    try {
      const response = await fetch("http://localhost:4000/api/productos/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Imagen guardada en:", data.filePath);
      // Aquí puedes usar la URL recibida en `data.filePath` o guardarla en tu base de datos

      // Limpia el formulario después de enviar
      setProductCode("");
      setProductName("");
      setProductDescripcion("");
      setProductCategory("");
      setProductState("")
      setProductPrice("");
      setProductImage(null);
      setShowForm(false);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  return (
    <section>
      <div className="container px-5 py-20 mx-auto">
        <div className="mb-10 max-w-56">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-Azul-oscuro">
            Productos
          </h1>
          <div className="h-1 w-20 bg-Azul-oscuro rounded"></div>
        </div>

        <button
          onClick={toggleForm}
          className="mb-10 bg-Azul-oscuro text-white p-2 px-4 rounded-full hover:bg-Azul-claro duration-200 font-bold"
        >
          Agregar Producto
        </button>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative z-50">
              <h2 className="text-2xl font-bold mb-6">Agregar Producto</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Código del Producto
                  </label>
                  <input
                    type="number"
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Código del producto"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre del Producto
                  </label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Nombre del producto"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Descripción del Producto
                  </label>
                  <input
                    type="text"
                    value={productDescription}
                    onChange={(e) => setProductDescripcion(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Descripción del producto"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Precio (Dolar)
                  </label>
                  <input
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Precio del producto"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Categoría del Producto
                  </label>
                  <input
                    type="text"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Categoría del producto"
                    required
                  />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Estado del Producto
                  </label>
                  <select
                    value={productState}
                    onChange={(e) => setProductState(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                  >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
                <div>
                  
                </div>
                <div className="mb-4 col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Imagen del Producto
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="w-full rounded"
                    required
                  />
                </div>

                <div className="flex justify-end col-span-2 space-x-2">
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="bg-gray-500 text-white p-2 px-4 rounded"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-Azul-oscuro text-white p-2 px-4 rounded"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}


        {/* Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="lg:w-auto md:w-1/2 p-4 bg-slate-200 relative rounded-lg hover:drop-shadow-2xl transition-shadow duration-500">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={Globos}
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">Globos</h2>
              <p className="mt-1">$16.00</p>
              <button className="absolute 2xl bg-Azul-oscuro p-2 px-4 text-white rounded-full right-3 bottom-3 hover:bg-Azul-claro hover:scale-105 duration-100 font-bold">
                +
              </button>
            </div>
          </div>
          {/* Añade más productos aquí */}
        </div>
      </div>
    </section>
  );
};

export default FlashcardAdmin;
