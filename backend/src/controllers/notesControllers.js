import Note from "../models/Notes.js"

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error in getAllNotes method", error);
        res.status(500).json(
            {
                message: "Internal server error."
            }
        )
    };
};

export async function createNote(req, res) {
    try {
        const { title, content } = req.body
        const newNote = new Note({ title, content })

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.log("Error in createNote method", error);
        res.status(500).json(
            {
                message: "Internal server error."
            }
        )
    };
};

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id, 
            { title, content }, 
            { new: true }
        );

        if (!updatedNote) return res.status(404).json(
            {
                message: "Note not found"
            }
        );

        res.status(200).json({note: updatedNote});
    } catch (error) {
        console.log("Error in updateNote method", error);
        res.status(500).json(
            {
                message: "Internal server error."
            }
        )
    }
};

export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(
            req.params.id,
        )
        if (!deletedNote) return res.status(404).json(
            {
                message: "Note not found"
            }
        );
        res.status(200).json(
            {
                message: "Note deleted successfully."
            }
        )
    } catch (error) {
        console.log("Error in deleteNote method", error);
        res.status(500).json(
            {
                message: "Internal server error."
            }
        )
    }
};