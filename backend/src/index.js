import express from "express"
import "dotenv/config"
import cors from "cors"
import http from "http"
import { clerkMiddleware } from "@clerk/express"
import { connectDB } from "./libs/db.js";

const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL

const corsOptions = {
    origin: FRONTEND_URL,
    credentials: true
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(clerkMiddleware())

app.get("/health", (req, res) => {
    res.status(200).json({ success: true })
})

app.listen(PORT, () => {
    connectDB()
    console.log(`server start on http://localhost:${PORT}`)
})
