import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB, config } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = config.port;

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

// wait for database to properly connect before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on port", PORT);
    });
});
