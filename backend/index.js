import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import attendanceRouter from './routes/attendanceRoutes.js';
dotenv.config();
const app = express();
const PORT = 5000;

// using middleware
app.use(express.json());
app.use(cookieParser());


// routes
app.use("/api/user",userRoutes);
app.use('/api/attendance',attendanceRouter);
app.use((req,res)=>{
    res.send("Hello sanjay")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    connectDB();
});
