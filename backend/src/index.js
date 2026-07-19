import express from "express"
import "dotenv/config"
import cors from "cors"
import http from "http"
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: "*"
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions))

app.listen(PORT,()=>console.log(`server start on http://localhost:${PORT}`))
