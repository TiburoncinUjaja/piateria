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
        filePath: `/uploads/images/${req.file.filename}`
    });
};

const obtenerProductos = async (req, res) => {
    const { nombre } = req.body;

    try {
        if (typeof nombre === 'string' && nombre.trim() !== '') {
            const productos = await Producto.find({
                nombre: { $regex: nombre, $options: 'i' } // 'i' para búsqueda insensible a mayúsculas
            });
            res.json(productos);
        } else {
            
            const productos = await Producto.find({});
            res.json(productos);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar los productos.' });
    }
}

const obtenerProducto = async (req, res) => {
    const { id } = req.params;
    
}

export { registrar, obtenerProductos }