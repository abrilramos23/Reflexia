import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';  

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB conectado correctamente"))
.catch(err => console.error("Error al conectar MongoDB:", err));

// Rutas de ejemplo
app.get('/', (req, res) => res.send('API Reflexia funcionando'));

// Levantar servidor
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
