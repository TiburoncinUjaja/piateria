import React, { useEffect, useState } from "react";
const URL_PREDETERMINADA = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

function usePokemons(){

    const [pokemons, setPokemons] = useState([]);
    const [siguiUrl, setSiguiUrl] = useState("");

    const getPokemons = async (url = URL_PREDETERMINADA) => {
    const response = await fetch(url)
    const listPokemons = await response.json();
    const { next,results } = listPokemons; //guarda resulado

    const newPokemons = await Promise.all(
        results.map(async(pokemon) =>{
            const response = await fetch(pokemon.url)
            const poke = await response.json()  
            const abilities = poke.abilities.map(a =>a.ability.name)
            const stats = poke.stats.map(s => {return{ name: s.stat.name, base: s.base_stat}})
            const types = poke.types.map(t =>t.type.name)
       
            //showdown.front_default
            return{
                id:poke.id,
                nombre:poke.name,
                imagen:poke.sprites.other.dream_world.front_default || poke.sprites.front_default,
                abilities,
                types,
                stats

            }
        })
        )
        return{next, newPokemons}
      };

    const obtenerPoke = async () =>{
        const {next, newPokemons} = await getPokemons()
        setPokemons(newPokemons)
        setSiguiUrl(next)
    }

    const masPokes = async () =>{
        const {next, newPokemons} = await getPokemons(siguiUrl)
        setPokemons(prev => [ ... prev, ...newPokemons])
        setSiguiUrl(next)
    }
      
    useEffect(() => {
      obtenerPoke();
    }, []);
    return {pokemons, masPokes}
}
export default usePokemons;