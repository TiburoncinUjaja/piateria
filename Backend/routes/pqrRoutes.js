import express from 'express';
import { AgregarPqr, ObtenerPqrs, ActualizarEstadoPqr } from "../controllers/pqrController.js";
import { upload } from "../controllers/upload.js"; // Asegúrate de importar el middleware

const router = express.Router();

router.post('/agregar', upload, AgregarPqr);
router.get('/obtener', ObtenerPqrs);
router.put('/estado/:id', ActualizarEstadoPqr);

export default router;