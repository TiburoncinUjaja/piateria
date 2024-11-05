import PQR from "../models/PQR.js";
import generarId from "../helpers/generarId.js";
import path from "path";

const AgregarPqr = async (req, res) => {
  try {
    const serial = generarId();
    const archivo = req.file ? `uploads/images/${req.file.filename}` : null; // Ruta del archivo

    const pqr = new PQR({
      ...req.body,
      serial,
      archivo, // Agrega la ruta del archivo a la base de datos si existe
    });

    const pqrAlmacenado = await pqr.save();

    res.status(201).json({
      mensaje: "Datos enviados exitosamente",
      pqr: pqrAlmacenado,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al enviar los datos",
      error: error.message,
    });
  }
};

// Obtener todos los PQRs
const ObtenerPqrs = async (req, res) => {
    try {
        const pqrs = await PQR.find({});
        res.status(200).json({
            mensaje: "PQRs obtenidos exitosamente",
            pqrs
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Error al obtener los PQRs",
            error: error.message
        });
    }
};

//actulizar
const ActualizarEstadoPqr = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;

    try {
        const pqrActualizado = await PQR.findByIdAndUpdate(id, { estado }, { new: true });
        if (!pqrActualizado) {
            return res.status(404).json({ mensaje: "PQR no encontrado" });
        }

        res.status(200).json({
            mensaje: "Estado de PQR actualizado exitosamente",
            pqr: pqrActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "Error al actualizar el estado del PQR", error: error.message });
    }
};

export { AgregarPqr, ObtenerPqrs, ActualizarEstadoPqr };
