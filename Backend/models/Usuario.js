import mongoose from "mongoose";
import bcrypt from "bcrypt"

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
},
{
    timestamps: true
}
);

usuarioSchema.pre("save", async function(next) {
    if(!this.isModified("password")){
        next();
    }   
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

usuarioSchema.methods.comprobarPassword = async function (passwprdFormulario) {
    return await bcrypt.compare(passwprdFormulario, this.password);
}

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;