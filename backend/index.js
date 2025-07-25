import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enhanced CORS configuration
const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5000"].filter(
  Boolean
);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Cookie",
    ],
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Vercel requires module.exports for serverless functions
if (process.env.VERCEL) {
  module.exports = app;
} else {
  // Local development
  app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
  });
}
