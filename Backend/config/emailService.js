import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Usa 465 para conexión segura (SSL/TLS)
    secure: false, // Cambia a true si usas SSL/TLS
    auth: {
        user: process.env.EMAIL_USER, // Tu correo de Gmail
        pass: process.env.EMAIL_PASS, // Contraseña o contraseña de aplicación
    },
    
});

export default transporter;

