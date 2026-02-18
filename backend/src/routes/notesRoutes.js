import express from "express";
import { updateNote,deleteNote,createNotes,getAllNotes } from "../controllers/notesController.js";
const router = express.Router();

router.get("/",getAllNotes);
router.post("/",createNotes);
router.put("/:id",updateNote);              
router.delete("/:id",deleteNote);    
export default router;