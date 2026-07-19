import express from "express"
import "dotenv/config"
import cors from "cors"
import { clerkMiddleware } from "@clerk/express"
import { connectDB } from "./libs/db.js";
import fs from "fs"
import path from "path"

const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL
const publicDir = path.join(import.meta.dirname, "..", "public")


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

if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir))
    app.get("/{*any}", (req, res, next) => {
        res.sendFile(path.join(publicDir, "index.html"), (err) => next(err))
    })
}

app.listen(PORT, () => {
    connectDB()
    console.log(`server start on http://localhost:${PORT}`)
})
