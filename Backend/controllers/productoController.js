import Producto from "../models/Producto.js";

const registrar = async (req, res) => {

    const { codigo } = req.body;
    const existeCodigo = await Producto.findOne({codigo});

    if(existeCodigo){
        const error = new Error("Codigo ya Registrado");
        return res.status(400).json({ msg: error.message});
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
    const productos = await Producto.find({
        nombre: { $regex: req.nombre, $options: 'i' } 
    });
    res.json(productos);
}

export {registrar, obtenerProductos}