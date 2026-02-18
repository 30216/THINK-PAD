import express from "express";
import { updatePost,deletePost,createPost,getAllPosts } from "../controllers/postsController.js";
const router = express.Router();

router.get("/",getAllPosts);
router.post("/",createPost);
router.put("/:id",updatePost);              
router.delete("/:id",deletePost);    
export default router;