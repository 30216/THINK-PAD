import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import postsRoutes from "./routes/postsRoutes.js";
import paymentsRoutes from "./routes/paymentsRoutes.js";
import emailsRoutes from "./routes/emailRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
// Connect to database
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;



// Middleware / Routes
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/notes", notesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/payments", paymentsRoutes);
app.use("/api/emails", emailsRoutes);

// ✅ Only ONE listen call
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
