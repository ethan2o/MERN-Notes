import express, { Router } from "express";
import { getAllNotes, createNote, updateNote, deleteNote} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
// requires a specific endpoint to update/delete
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router