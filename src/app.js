import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();

app.use(morgan('start'));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:'http://localhost:4321'
}))
app.use("/api",authRoutes);
app.use("/api",productRoutes);


export default app;