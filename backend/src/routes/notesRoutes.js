import express, { Router } from "express";
import { getAllNotes, createNote, getNote, updateNote, deleteNote} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
// requires a specific endpoint
router.get("/:id", getNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router