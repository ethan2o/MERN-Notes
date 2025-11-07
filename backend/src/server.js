import express from "express";
import cors from "cors"
import path from "path"

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB, config } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = config.port;
const __dirname = path.resolve()

app.use(express.json());
app.use(rateLimiter);
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, "../frontend/dist")))
        app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

// wait for database to properly connect before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on port", PORT);
    });
});
