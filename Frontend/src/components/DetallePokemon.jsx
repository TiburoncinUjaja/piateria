import React from "react";
function DetallePokemon({ mostrar, pokemon, cerrar }) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 transition-all duration-500 place-items-center"
      onClick={cerrar}
      style={{ display: mostrar ? "grid" : "none" }}
    >
      <section className="flex bg-white w-2/5 min-w-[400px] rounded-xl absolute p-4 ">
        <div className="grid place-items-center">
          <img
            className="w-72 aspect-[8/10]"
            src={pokemon.imagen}
            alt={pokemon.name}
          />
          <section className="px-1 py-2 capitalize rounded-md">
            {pokemon.types?.map((type) => (
              <span
                key={type}
                className="text-xs text-white font-bold bg-Azul-oscuro rounded-full px-2 py-1 mr-1 inline-block"
              >
                {type}
              </span>
            ))}
          </section>
        </div>
        <div className="grid px-1 py-2 gap-3 flex-1 capitalize">
          <h2 className="m-0 font-bold text-3xl text-center">
            N°{pokemon.id} {pokemon.nombre}
          </h2>

          <h3 className="font-bold text-center text-lg">Hablidades</h3>
          {pokemon.abilities?.map((ability) => (
            <span
              key={ability}
              className="bg-Azul-oscuro text-white px-1 py-2 mr-1 rounded-md capitalize"
            >
              {ability}
            </span>
          ))}

          {/*estadisticas */}
          <h3 className=" font-bold text-center text-lg">Estadisticas</h3>
          <div className="grid grid-cols-2 gap-3  ">
            {pokemon.stats?.map((stat) => (
              <section
                key={stat.name}
                className="flex flex-col capitalize items-center bg-gray-200 rounded-lg p-1 shadow-lg"
              >
                <span className="grid border-2 border-black rounded-full w-8 h-8 place-items-center">
                  {stat.base}
                </span>
                <span>{stat.name}</span>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetallePokemon;
