import express from 'express'
const router = express.Router();
import {AgregarPqr} from "../controller/PQRController.js"

router.post('/',AgregarPqr);

export default router;