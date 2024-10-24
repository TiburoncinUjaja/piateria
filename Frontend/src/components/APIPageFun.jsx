import { faDove } from "@fortawesome/free-solid-svg-icons";
import usePokemon from "../hooks/usePokemon";
import DetallePokemon from "./DetallePokemon";
import { useState } from "react";

function Pokemon({ id, nombre, imagen, verPokemon }) {
  return (
    <div
      onClick={verPokemon}
      className="flex flex-col items-center rounded-lg p-2 bg-Azul-claro " //hover:drop-shadow-2xl transition-shadow duration-500
    >
      <img className=" w-32 h-32 mx-1 my-2" src={imagen} alt={nombre} />
      <p className=" flex justify-center space-x-1 items-center bg-gray-600 text-white font-bold px-1 py-2 rounded-xl w-40 capitalize ">
        <span>#{id}</span>
        <span>{nombre}</span>
      </p>
    </div>
  );
}

function Pokemons() {
  const { pokemons, masPokes } = usePokemon();
  const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} });
  const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon });
  const noVerPoke = () => setMostrar({ mostrar: false, pokemon: {} });

  return (
    <>
      <DetallePokemon {...mostrar} cerrar={noVerPoke} />
      <section className="containe grid grid-cols-5 gap-4 p-2 mx-4 my-auto">
        {pokemons.map((pokemon) => (
          <Pokemon
            {...pokemon}
            key={pokemon.id}
            verPokemon={() => verPokemon(pokemon)}
          />
        ))}
        <button
          className="text-center bg-Azul-oscuro text-white font-bold rounded-full h-10 hover:bg-Azul-claro"
          onClick={masPokes}
        >
          Cargar más
        </button>
      </section>
    </>
  );
}

export default Pokemons;
