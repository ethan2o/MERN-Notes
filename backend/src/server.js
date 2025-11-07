import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB, config } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = config.port;

connectDB();

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});