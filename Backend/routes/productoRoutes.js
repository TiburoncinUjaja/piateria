import express from "express";
const router = express.Router();
import { registrar, upload } from "../controllers/productoController.js";
import { upload as multerUpload } from "../controllers/upload.js";

router.post("/", registrar);
router.post("/upload", multerUpload, upload);

export default router