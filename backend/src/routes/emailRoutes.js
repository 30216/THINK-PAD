import express from "express";
import { updateEmail,deleteEmail,createEmail,getAllEmails } from "../controllers/emailController.js";
const router = express.Router();

router.get("/",getAllEmails);
router.post("/",createEmail);
router.put("/:id",updateEmail);              
router.delete("/:id",deleteEmail);    
export default router;