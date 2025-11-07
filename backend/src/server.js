import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB, config } from "./config/db.js";

const app = express();

connectDB();

app.use("/api/notes", notesRoutes)

app.listen(config.port, () => {
    console.log("Server started on port", config.port);
});