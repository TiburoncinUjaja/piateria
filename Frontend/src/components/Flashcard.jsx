import React, { useEffect, useState } from "react";
import { obtenerProductos, obtenerProducto} from "../hooks/useProductos.js";
import Modal from "./ModalProduct";
import CarouselCategories from '../components/CarouselCategories.JSX'

const imgURL = "http://localhost:4000/uploads/images"

const Flashcard = ({ producto, openModal  }) => {
  return (
    <div className="lg:w-auto md:w-1/2 p-4 bg-slate-200 relative rounded-lg hover:drop-shadow-2xl transition-shadow duration-500 ">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={`${imgURL}/${producto.imagen}`}
        />
      </a>
      <div className="mt-4 ">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          { producto.nombre }
        </h2>
        <p className="mt-1">$ {producto.precio}</p>
        <button onClick={() => openModal(producto._id)} className="absolute 2xl bg-Azul-oscuro p-2 px-4 text-white rounded-full right-3 bottom-3 hover:bg-Azul-claro hover:scale-105 duration-100 font-bold">
          +
        </button>
      </div>
    </div>
  )
}

const FlashcardPage = ({searchTerm}) => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const fethProductos = async () => {
      const productosObtenidos = await obtenerProductos(searchTerm, categoria);
      setProductos(productosObtenidos);
    };
    console.log(categoria)
    fethProductos();
  }, [searchTerm, categoria]);

  const openModal = async (productoId) => {
    const producto = await obtenerProducto(productoId);
    setProducto(producto);
    setShowModal(true);
  };

  const closeModal = () => {
    setProducto(null);
    setShowModal(false);
  };

  return (
    <section className="">
      <div className="container px-5 py-20 mx-auto ">
        {/* Titulo */}
        <div className="mb-10 max-w-56">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-Azul-oscuro">
            Productos
          </h1>
          <div className="h-1 w-20 bg-Azul-oscuro rounded"></div>
        </div>
        <CarouselCategories categoria={categoria} setCategoria={setCategoria}/>
        {/* Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {productos.map(producto => (
                <Flashcard key={producto._id} producto={producto} openModal={openModal}/>
            ))}
        </div>
      </div>
      {/* Modal */}
      {showModal && producto && (
        <Modal producto={producto} onClose={closeModal} />
      )}
    </section>
  );
};

export default FlashcardPage;
