
import Usuario from "../models/Usuario.js";
import generarId from "../helpers/generarId.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import transporter from '../config/emailService.js';

const obtenerUsuarioAutenticado = async (req, res) => {
    const { token } = req.headers;  // El token debe ser enviado en el header de la solicitud

    // Verificar si el token es válido
    const usuario = await Usuario.findOne({ token });
    if (!usuario) {
        return res.status(404).json({ msg: "No se encontró el usuario" });
    }

    res.json({
        user: {
            id: usuario._id,
            nombres: usuario.nombres,
            email: usuario.email,
            rol: usuario.rol,
        }
    });
};

export { obtenerUsuarioAutenticado };

const registrar = async (req, res) => {
    //Evitar registros duplicados

    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email });

    if (existeUsuario) {
        const error = new Error("Usuario ya Registrado");
        return res.status(400).json({ msg: error.message });
    }

    try {
        const usuario = new Usuario(req.body)
        usuario.token = generarId();
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);
    } catch (error) {
        console.log(error);
    }
};



const autenticar = async (req, res) => {
    const { email, password } = req.body;



    try {
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(400).json({ msg: "Correo electrónico no encontrado" });
        }

        // Comparar la contraseña con el hash en la base de datos
        const esContrasenaValida = await bcrypt.compare(password, usuario.password);

        if (!esContrasenaValida) {
            return res.status(401).json({ msg: "Contraseña incorrecta" });
        }

        res.status(200).json({
            user: {
                id: usuario._id,
                nombres: usuario.nombres,
                email: usuario.email,
                rol: usuario.rol
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

const enviarCorreo = async (req, res) => {
    const { email } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: "Correo electrónico no encontrado" });
        }

        // Generar un token con vencimiento
        const token = jwt.sign({ email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Crear el enlace de recuperación
        const resetLink = `http://localhost:5173/reset-password/${token}`;

        // Enviar el correo

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: usuario.email,
            subject: 'Recuperación de contraseña',
            html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
            <a href="${resetLink}">${resetLink}</a>`,
        });

        res.status(200).json({ msg: 'Correo enviado con éxito.' });
    } catch (error) {
        console.log(error)
        //console.log(transporter)
        res.status(500).json({ msg: 'Error al enviar el correo.', error });
    }
};



const confirmar = async (req, res) => {
    const { token } = req.params;
    console.log(token)
    const usuarioConfirmar = await Usuario.findOne({ token });
    if (!usuarioConfirmar) {
        const error = new Error("Token no valido");
        return res.status(402).json({ msg: error.message });
    }
    try {
        usuarioConfirmar.confirmado = true;
        usuarioConfirmar.token = ""
        await usuarioConfirmar.save();
        res.json({ msg: "Usuario Confirmado Correctamente" });
    } catch (error) {
        console.log(error);
    }
}

const olvidePassword = async (req, res) => {
    const { email } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message });
    }
    try {
        usuario.token = generarId();
        await usuario.save();
        res.json({ msg: "Hemos enviado un email con las instrucciones" })
    } catch (error) {
        console.log(error);
    }

}

const comprobarToken = async (req, res) => {
    const { token } = req.params;

    const tokenValido = await Usuario.findOne({ token });

    if (tokenValido) {
        res.json({ msg: "Token Valido" })
    } else {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    }
}

const nuevoPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const usuario = await Usuario.findOne({ token });
    if (usuario) {
        usuario.password = password;
        usuario.token = "";
        try {
            await usuario.save();
            res.json({ msg: "Password Modificado Correctamente" })
        } catch (error) {
            console.log(error);
        }
    } else {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });

    }
}
const cambiarContraseña = async (req, res) => {
    const { token } = req.params;
    const { newPassword, confirmPassword } = req.body;
    let decoded = null
    let  email = null

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded.email);
        email = decoded.email;
    } catch (err) {
        //console.log(err)
        return res.status(400).json({ msg:'Token inválido o expirado'});
    }
    
    if (newPassword !== confirmPassword) {
        return res.status(400).json({ msg: "Las contraseñas no coinciden" });
    }

    try {
        
        const usuario = await Usuario.findOne({ email });
        //console.log(usuario)

        if (!usuario) {
            return res.status(400).json({ msg: "Usuario no encontrado" });
        }

        if (usuario.updatedAt && decoded.iat * 1000 < usuario.updatedAt) {
            return res.status(400).json({ msg: "El link ya fue usado" });
        }

        // Actualizar directamente el campo password
        usuario.password = newPassword; // No se hashea aquí porque el middleware lo hará
        await usuario.save(); // Esto ejecutará el middleware pre("save")

        res.status(200).json({ msg: "Contraseña cambiada exitosamente" });

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

const validarUsuario = async (req, res) => {
    const { email, nombre } = req.body;

    try {
        // Buscar al usuario por correo
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(404).json({ msg: "Credenciales incorrectas" });
        }

        // Verificar que el nombre coincida
        if (usuario.nombres !== nombre) {
            return res.status(400).json({ msg: "Credenciales incorrectas" });
        }

        // Validación exitosa
        res.status(200).json({ msg: "Usuario validado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" });
    }
};





export { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, cambiarContraseña, validarUsuario, enviarCorreo }