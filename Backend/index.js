import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js"
import productoRoutes from "./routes/productoRoutes.js"

const app = express()

app.use(express.json());

dotenv.config()
conectarDB();

//Confiurar CORS


// Routing

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/productos", productoRoutes);


const PORT = process.env.PPORT || 4000;

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});