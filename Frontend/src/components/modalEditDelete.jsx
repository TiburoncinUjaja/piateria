import React from "react";

const Modal2 = ({ producto, onClose }) => {
    return(
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
                        <option value="piatas">Piñatas</option>
                        <option value="inflables">Inflables</option>
                        <option value="juguetes">Juguetes</option>
                        <option value="decoracion">Decoración</option>
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

)};

export default Modal2;
