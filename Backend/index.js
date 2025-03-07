import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js"
import productoRoutes from "./routes/productoRoutes.js"
import pqrRoutes from "./routes/pqrRoutes.js"
import path from "path";
import cors from 'cors';

const app = express()

app.use(express.json());

dotenv.config()
conectarDB();

//Confiurar CORS

// Middleware para analizar JSON y datos URL encoded
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:5173' // Asegúrate de que este sea el puerto correcto de tu frontend
}));

// Routing

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/pqrs", pqrRoutes);
app.use('/uploads/images', express.static(path.join(path.resolve(), 'uploads/images')));

const PORT = process.env.PPORT || 4000;

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});