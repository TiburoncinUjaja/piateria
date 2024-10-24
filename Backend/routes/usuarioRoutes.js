import express from "express";
const router = express.Router();
import{ autenticar, confirmar, registrar, olvidePassword, comprobarToken,nuevoPassword } from "../controllers/usuarioController.js"

//Autenticación, Registro y Confirmación de usuario
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

export default router