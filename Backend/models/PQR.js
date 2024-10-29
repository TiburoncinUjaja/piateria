import mongoose from 'mongoose';
const pqrSchema = mongoose.Schema({
    serial: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    asunto: {
        type: String,
        required: true,
    },
    mensaje: {
        type: String,
        required: true,
    },
    fecha: {
        type: String,
        required: true,
        trim: true,
    },
    estado: { 
        type: String, 
        enum: ['no visto', 'en revisión', 'resuelto'], 
        default: 'no visto' 
    } // Campo de estado
});
const PQR = mongoose.model("PQR",  pqrSchema);
export default PQR;