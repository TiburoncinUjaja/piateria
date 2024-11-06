// Backend/routes/usuariosRoutes.js
import express from "express";
import { autenticar, confirmar, registrar, olvidePassword, comprobarToken, nuevoPassword, obtenerUsuarioAutenticado } from "../controllers/usuarioController.js";

const router = express.Router();

// Autenticación, Registro y Confirmación de usuario
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// Obtener usuario autenticado
router.get("/usuario", obtenerUsuarioAutenticado);

export default router;
