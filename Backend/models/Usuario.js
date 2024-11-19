import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const usuarioSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    rol: {
        type: String,
        default: 'user',
    },
    token: {
        type: String
    },
    confirmado: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

usuarioSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next(); // No rehacer el hash si la contraseña no ha cambiado
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

usuarioSchema.methods.comprobarPassword = async function(passwordFormulario) {
    const esContraseñaValida = await bcrypt.compare(passwordFormulario, this.password);
    return esContraseñaValida;
};


const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
