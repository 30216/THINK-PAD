import express from "express";
import { updatePayment,deletePayment,createPayment,getAllPayments } from "../controllers/paymentController.js";
const router = express.Router();

router.get("/",getAllPayments);
router.post("/",createPayment);
router.put("/:id",updatePayment);              
router.delete("/:id",deletePayment);    
export default router;