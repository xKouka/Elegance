import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const router= express.Router()

dotenv.config();

const app = express();
const port = 3001;

mongoose.connect(process.env.MONGODB_URI, {})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

app.listen(port, () => {
  console.log();
});

//Crud

router.get("/", (req, res) =>{
    res.send("funcionando")
})

app.use(router)