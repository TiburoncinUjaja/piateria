import React, { useState } from "react";

const imgURL = "http://localhost:4000/uploads/images";

const Modal2 = ({ producto, onClose, fethProductos }) => {
    const [productCode, setProductCode] = useState(producto.codigo);
    const [productName, setProductName] = useState(producto.nombre);
    const [productDescription, setProductDescripcion] = useState(producto.descripcion);
    const [productPrice, setProductPrice] = useState(producto.precio);
    const [productCategory, setProductCategory] = useState(producto.categoria);
    const [productState, setProductState] = useState(producto.estado);
    const [productImage, setProductImage] = useState(null);
    const [productId, setProductId] = useState(producto._id);


    const handleCategoryChange = (e) => {
        setProductCategory(e.target.value);
        console.log("Categoría seleccionada:", e.target.value);
    };

    const handleStateChange = (e) => {
        setProductState(e.target.value);
        console.log("Estado seleccionado:", e.target.value);
    };

    
  const eliminarProducto = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );
    if (!confirmacion) return;
    try {
      const response = await fetch(`http://localhost:4000/api/productos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el producto");
      }

      const data = await response.json();
      console.log(data.message);

      // Actualizar la lista de productos después de eliminar
      fethProductos();
      onClose();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      alert("Hubo un problema al intentar eliminar el producto.");
    }
  };

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
            "codigo": productCode, "nombre": productName,
            "descripcion": productDescription, "categoria": productCategory,
            "precio": productPrice, "estado": productState === "activo"
        };
        console.log(productoData)

        try {
            if (productImage) {
                const imageData = new FormData();
                imageData.append("image", productImage);
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
            } else {
                productoData.imagen = producto.imagen;
            }
            // Para depurar y ver los valores en el formData
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            console.log(JSON.stringify(productoData));
            const res = await fetch(`http://localhost:4000/api/productos/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productoData),
            });
            const productoAlmacenado = await res.json();
            console.log('Producto actualizado:', productoAlmacenado);
            await fethProductos();
            onClose();

        } catch (error) {
            console.error("Error al subir la imagen:", error);
        }
    };
    const [imagePreview, setImagePreview] = useState(`${imgURL}/${producto.imagen}`);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProductImage(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-md w-11/12 max-w-3xl">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Editar Producto</h2>
                        <img
                            className="w-96 rounded-md shadow-md"
                            src={imagePreview}
                            alt={producto.nombre}
                        />
                        <div className="my-4 col-span-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Cambiar Imagen del Producto
                            </label>
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="w-full rounded"
                            />
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <div className="flex justify-end space-x-4 mt-8">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Código del Producto
                                </label>
                                <input
                                    type="number"
                                    value={productCode}
                                    onChange={(e) => setProductCode(e.target.value)}
                                    className="w-full px-3 py-2 border rounded focus:ring-primary-300"
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
                                    className="w-full px-3 py-2 border rounded focus:ring-primary-300"
                                    placeholder="Nombre del producto"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Descripción del Producto
                            </label>
                            <textarea
                                type="text"
                                value={productDescription}
                                onChange={(e) => setProductDescripcion(e.target.value)}
                                className="w-full px-3 py-2 border rounded focus:ring-primary-300"
                                placeholder="Descripción del producto"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Precio (Dólar)
                            </label>
                            <input
                                type="number"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                className="w-full px-3 py-2 border rounded focus:ring-primary-300"
                                placeholder="Precio del producto"
                                required
                            />
                        </div>
                        <div className="flex justify-end space-x-4 mt-8">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Categoría del Producto
                                </label>
                                <select
                                    value={productCategory}
                                    onChange={handleCategoryChange}
                                    className="w-full px-3 py-2 border rounded focus:ring-primary-300"
                                    required
                                >
                                    <option value="piatas">Piñatas</option>
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
                                    className="w-full px-3 py-2 border rounded focus:ring-primary-300"
                                    required
                                >
                                    <option value="activo">Activo</option>
                                    <option value="inactivo">Inactivo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-4 mt-2">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 mb-10 text-black p-2 px-4 rounded-full hover:bg-Beige duration-200 font-bold"
                    >
                        Cerrar
                    </button>
                    <button
                        onClick={() => eliminarProducto(productId)}
                        className="bg-red-600 mb-10 text-white p-2 px-4 rounded-full hover:bg-Rojo duration-200 font-bold"
                    >
                        Eliminar
                    </button>
                    <button
                        type="submit"
                        className="mb-10 bg-Azul-oscuro text-white p-2 px-4 rounded-full hover:bg-Azul-claro duration-200 font-bold"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Modal2;
