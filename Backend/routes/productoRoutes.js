import express from "express";
const router = express.Router();
import { registrar, upload, obtenerProductos, obtenerProducto, editarProducto, eliminarProducto } from "../controllers/productoController.js";
import { upload as multerUpload } from "../controllers/upload.js";

router.post("/", registrar);
router.post("/upload", multerUpload, upload);
router.get("/listar/", obtenerProductos);
router.route("/:id")
    .get(obtenerProducto)
    .put(editarProducto)
    .delete(eliminarProducto);


export default router