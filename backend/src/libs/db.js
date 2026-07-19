import mongoose from "mongoose"

export async function connectDB() {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        if (!MONGO_URI) {
            throw new Error("MONGO DB url is required")
        }
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`connected to database [MONGO_DB] with id ${conn.connection.host}`)
    } catch (error) {
        console.log(`MONGO DB connection error ${error.message}`)
        process.exit(1)
    }
}