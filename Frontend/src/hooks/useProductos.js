import React, {useEffect, useState} from "react"
const url = "http://localhost:4000/api/productos/listar/"

const obtenerProductos = async (nombre = "") => {
    try {
        const nombreParam = nombre ? nombre : "''";
        console.log(`${url}${nombreParam}`);
        const response = await fetch(`${url}${nombreParam}`)
        if (!response.ok) {
            throw Error("Error al obtener los productos")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default obtenerProductos;