import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";

import notesRoutes from "./src/routes/notesRoutes.js";
import rateLimiter from "./src/middleware/rateLimiter.js";

dotenv.config();

 

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); 
//middleware to parse JSON bodies from incoming requests
app.use(express.json()); 
app.use(rateLimiter); // Apply rate limiting middleware globally
app.use((req,res,next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});
app.use("/api/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the API — server is running successfully 🚀");
});

app.use((err, req, res, next) => {
  console.error("Global Error:", err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});
connectDB().then(() => {

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
});