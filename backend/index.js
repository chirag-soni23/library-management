import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();
const app = express();
const PORT = 5000;

// using middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/user",userRoutes);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    connectDB();
});