import Producto from "../models/Producto.js";

const registrar = async (req, res) => {

    const { codigo } = req.body;
    const existeCodigo = await Producto.findOne({ codigo });

    if (existeCodigo) {
        const error = new Error("Codigo ya Registrado");
        return res.status(400).json({ msg: error.message });
    }

    try {
        const producto = new Producto(req.body)
        const productoAlmacenado = await producto.save();
        res.json(productoAlmacenado);
    } catch (error) {
        console.log(error);
    }
}

export const upload = (req, res) => {
    if (!req.file) {
        return res.status(400).send("No se ha subido ninguna imagen");
    }
    res.send({
        message: "Imagen subida exitosamente",
        filePath: `${req.file.filename}`
    });
};

const obtenerProductos = async (req, res) => {
    const { nombre, categoria } = req.query;
    // console.log(nombre);
    // console.log(categoria);
    try {
        let filtro = {};

        if (nombre && nombre.trim() !== '') {
            filtro.nombre = { $regex: nombre, $options: 'i' }; 
        }

        // console.log(categoria);
        if (categoria!=='all'){

            if (categoria && categoria.trim() !== '') {
                filtro.categoria = categoria.trim();
            }
        }
            
        //console.log(filtro.categoria)
        let productos;
        if (!filtro.categoria) {
            productos = await Producto.find(filtro)
                .sort({ createdAt: -1 })
                .limit(categoria !== 'all' ? 6 : 0);
        } else {
            productos = await Producto.find(filtro);
        }
        
        res.json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar los productos.' });
    }
};

const obtenerProducto = async (req, res) => {
    const { id } = req.params;
    //console.log(id)
    const producto = await Producto.findById(id);
    
    if(!producto){
        const error = new Error("Prducto no encontrado");
        return res.status(400).json({ msg: error.message });
    }
    res.json(producto)
}

const editarProducto = async (req, res) => {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    
    if(!producto){
        const error = new Error("Prducto no encontrado");
        return res.status(400).json({ msg: error.message });
    }
    console.log(req.body.estado);
    producto.codigo = req.body.codigo || producto.codigo;
    producto.nombre = req.body.nombre || producto.nombre;
    producto.descripcion = req.body.descripcion || producto.descripcion;
    producto.precio = req.body.precio || producto.precio;
    producto.categoria = req.body.categoria || producto.categoria;
    producto.imagen = req.body.imagen || producto.imagen;
    producto.estado = req.body.estado;

    try {
        const productoAlmacenado = await producto.save();
        res.json(productoAlmacenado);
    } catch (error) {
        console.log(error);
    }

}

const eliminarProducto = async (req, res) => {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    if(!producto){
        const error = new Error("Prducto no encontrado");
        return res.status(400).json({ msg: error.message });
    }
    try {
        await producto.deleteOne();
        res.json({msg: "Producto Eliminado"})
    } catch (error) {
        console.log(error);
    }
}

export { registrar, obtenerProductos , obtenerProducto, editarProducto, eliminarProducto}