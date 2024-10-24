import PQR from "../models/PQR.js";

const AgregarPqr = async (req, res) => {
    try {
        const pqr = new PQR(req.body);
        const pqrAlmacenado = await pqr.save();
        
        res.status(201).json({
            mensaje: "Datos enviados exitosamente",
            pqr: pqrAlmacenado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Error al enviar los datos",
            error: error.message
        });
    }
};

export { AgregarPqr };
