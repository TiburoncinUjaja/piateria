import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true,
        trim: true
    },
    categoria: {
        type: String,
        required: true
    },
    imagen: { 
        type: String, 
        required: true 
    },
    estado: {
        type: Boolean,
        default: true
    },

    
},
{
    timestamps: true
}
);

const Producto = mongoose.model("Producto", productoSchema);
export default Producto;