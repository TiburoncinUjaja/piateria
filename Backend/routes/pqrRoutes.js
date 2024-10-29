import express from 'express'
const router = express.Router();
import {AgregarPqr, ObtenerPqrs, ActualizarEstadoPqr} from "../controllers/pqrController.js"
router.post('/agregar',AgregarPqr);
router.get('/obtener', ObtenerPqrs);
router.put('/estado/:id', ActualizarEstadoPqr);
export default router;