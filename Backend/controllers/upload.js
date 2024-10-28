import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Define la ruta específica para guardar las imágenes
const uploadDir = path.join(path.resolve(), 'uploads/images');

fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Guarda las imágenes en la carpeta especificada
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Nombre único para cada archivo
  }
});

const upload = multer({ storage: storage }).single('image');


export {upload}
