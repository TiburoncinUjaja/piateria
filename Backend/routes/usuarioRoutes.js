// Backend/routes/usuariosRoutes.js
import express from "express";
import { cambiarContraseña } from "../controllers/usuarioController.js";
import { autenticar, confirmar, registrar, olvidePassword, comprobarToken, nuevoPassword, obtenerUsuarioAutenticado, validarUsuario, enviarCorreo } from "../controllers/usuarioController.js";

const router = express.Router();

// Autenticación, Registro y Confirmación de usuario
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.post("/send-email", enviarCorreo);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);
router.post("/cambiar-password/:token", cambiarContraseña);
router.post("/validar-usuario", validarUsuario); 

// Obtener usuario autenticado
router.get("/usuario", obtenerUsuarioAutenticado);

export default router;
