import React, {useEffect, useState} from "react"
const url = new URL('http://localhost:4000/api/productos/listar');

const obtenerProductos = async (nombre = '', categoria = '') => {
    try {
        url.searchParams.set('nombre', nombre);
        url.searchParams.set('categoria', categoria);

        const response = await fetch(url);
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

const url2 = "http://localhost:4000/api/productos/"
const obtenerProducto = async (id = "") => {
    try {
        const idParam = id ? id : "''";
        console.log(`${url2}${idParam}`);
        const response = await fetch(`${url2}${idParam}`)
        if (!response.ok) {
            throw Error("Error al obtener el producto")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export {obtenerProductos, obtenerProducto};