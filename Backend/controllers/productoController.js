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

export {registrar}