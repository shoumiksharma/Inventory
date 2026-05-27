import path from 'path'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import { middleware } from './middleware/authMiddleware.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());
const __dirname = path.resolve();


app.get('/', (req, res) => {
    res.send("Backend is running");
})
app.use("/api/auth", authRoutes);


app.use(middleware);
app.get("/api/protectedRoute", (req, res) => {
    return res.status(200)
              .json({message : "This is a protected route", name : req.name});
})

app.use("/api/product", productRoutes);



app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get((req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
