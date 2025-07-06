import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
const app = express();
app.use(express.json());
connectDB();
app.use("/api/notes", notesRoutes);
app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
