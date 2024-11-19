import React, { useEffect, useState } from "react";
import { obtenerProductos, obtenerProducto } from "../hooks/useProductos.js";
import Modal2 from "./modalEditDelete.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from "./ModalProduct";

const imgURL = "http://localhost:4000/uploads/images"

const Flashcard = ({ producto, onClick }) => {
  return (
    <div className="lg:w-auto md:w-1/2 p-4 bg-slate-200 relative rounded-lg hover:drop-shadow-2xl transition-shadow duration-500">
      <a className="block relative h-80 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-top w-full h-full block"
          src={`${imgURL}/${producto.imagen}`}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">{producto.nombre}</h2>
        <p className="mt-1">${producto.precio}</p>
        <FontAwesomeIcon onClick={onClick} icon="fa-solid fa-pen" className="absolute 2xl bg-Azul-oscuro p-4 px-4 text-white rounded-full right-3 bottom-3 hover:bg-Azul-claro hover:scale-105 duration-100 font-bold" />
      </div>
    </div>
  )
}

const FlashcardAdmin = ({ searchTerm }) => {
  const [showForm, setShowForm] = useState(false);
  const [productImage, setProductImage] = useState(null); // Estado para la imagen del producto
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescripcion] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productState, setProductState] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const [pqrs, setPqrs] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [selectedProducto, setSelectedProducto] = useState([]);
  // const handleProductoClick = (key) => {
  //   setSelectedProducto(producto);
  // };
  const closeModal = () => {
    setSelectedProducto(null);
    setShowModal(false);
  };

  const fetchProducto = async (key) => {
    console.log(key)
    const productoObtenido = await obtenerProducto(key);
    //console.log(productosObtenidos);
    setShowModal(true);
    setSelectedProducto(productoObtenido);
  };

  const editarProducto = (producto) => {
    setSelectedProducto(producto);
    setShowModal2(true);
  };


  // Función para obtener los PQRs
  const fetchPqrs = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/pqrs/obtener');
      if (!response.ok) {
        throw new Error("Error al obtener los PQRs");
      }
      const data = await response.json();
      //console.log("Datos de PQRs recibidos:", data); // Muestra la estructura de `data` en la consola

      // Asegúrate de que data.pqrs existe y es un array antes de llamar a setPqrs
      if (data && Array.isArray(data.pqrs)) {
        setPqrs(data.pqrs);
      } else {
        console.warn("La respuesta no contiene un array 'pqrs' como se esperaba:", data);
      }
    } catch (error) {
      console.error("Error al cargar los PQRs:", error);
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
        const data = await response.json();
        setPqrs(prevPqrs => prevPqrs.map(pqr =>
          pqr._id === id ? { ...pqr, estado: nuevoEstado } : pqr
        ));
      } else {
        console.error("Error al actualizar el estado del PQR");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [productos, setProductos] = useState([]);

  const fethProductos = async () => {
    //console.log(searchTerm)
    const productosObtenidos = await obtenerProductos(searchTerm, 'all');
    //console.log(productosObtenidos);
    setProductos(productosObtenidos);

  };
  useEffect(() => {
    fethProductos();
  }, [searchTerm]);

  // Función para alternar el formulario
  const toggleForm = () => {
    setShowForm(!showForm);
    // Limpia el formulario después de enviar
    setProductCode("");
    setProductName("");
    setProductDescripcion("");
    setProductCategory("");
    setProductState("")
    setProductPrice("");
    setProductImage(null);
  };

  const toggleFormEdit = () => {
    setShowModal2(!showModal2);
    // Limpia el formulario después de enviar
    setProductCode("");
    setProductName("");
    setProductDescripcion("");
    setProductCategory("");
    setProductState("")
    setProductPrice("");
    setProductImage(null);
    setSelectedProducto(null);
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
    formData.append("descripcion", productDescription);
    formData.append("categoria", productCategory);
    formData.append("estado", productState);
    const productoData = {
      "codigo": productCode,
      "nombre": productName, "descripcion": productDescription,
      "categoria": productCategory, "precio": productPrice,
      "estado": productState === 'activo'
    };
    const imageData = new FormData();
    imageData.append("image", productImage);

    try {
      const response = await fetch('http://localhost:4000/api/productos/upload', {
        method: 'POST',
        body: imageData,
        headers: {
          // Es importante NO incluir 'Content-Type', fetch lo establecerá automáticamente para multipart/form-data
        }
      });
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      const data = await response.json();
      console.log("Imagen guardada en:", data.filePath);
      // Aquí puedes usar la URL recibida en `data.filePath` o guardarla en tu base de datos
      formData.append("imagen", data.filePath);
      productoData.imagen = data.filePath;
      // Para depurar y ver los valores en el formData
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      console.log(JSON.stringify(productoData));
      const res = await fetch('http://localhost:4000/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productoData),
      });
      const productoAlmacenado = await res.json();
      console.log('Producto registrado:', productoAlmacenado);
      await fethProductos();
      toggleForm();

    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };
  const handleCategoryChange = (e) => {
    setProductCategory(e.target.value);
    console.log("Categoría seleccionada:", e.target.value);
  };

  const handleStateChange = (e) => {
    setProductState(e.target.value);
    console.log("Estado seleccionado:", e.target.value);
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
                  <select
                    value={productCategory}
                    onChange={handleCategoryChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  >
                    <option value="" disabled>Seleccione una opción</option>
                    <option value="piñatas">Piñatas</option>
                    <option value="inflables">Inflables</option>
                    <option value="juguetes">Juguetes</option>
                    <option value="decoracion">Decoración</option>
                    <option value="velas">Velas</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Estado del Producto
                  </label>
                  <select
                    value={productState}
                    onChange={handleStateChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  >
                    <option value="" disabled>Seleccione una opción</option>
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
          {productos.map(producto => (
            <Flashcard key={producto._id} producto={producto} onClick={() => editarProducto(producto)}/>
          ))}
        </div>
      </div>
      {showModal2 && selectedProducto && (
        <Modal2 producto={selectedProducto} onClose={toggleFormEdit} fethProductos={() => fethProductos()}></Modal2>
      )}
      {/* Modal de detalles del producto */}
      {showModal && selectedProducto && (
        <Modal producto={selectedProducto} onClose={closeModal} />
      )}


    </section>



  );
};

export default FlashcardAdmin;