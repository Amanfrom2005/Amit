import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDb } from './db/connectDb.js';
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5000",
    credentials: true,
}))

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes)

app.listen(PORT, async () => {
    await connectDb();
    console.log(`Server is running on port ${PORT}`);
});