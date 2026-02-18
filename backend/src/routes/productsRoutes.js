import express from "express";
import { updateProduct,deleteProduct,createProduct,getAllProducts } from "../controllers/productsController.js";   
const router = express.Router();

router.get("/",getAllProducts);
router.post("/",createProduct);
router.put("/:id",updateProduct);              
router.delete("/:id",deleteProduct);    
export default router;