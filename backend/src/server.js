import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
const app = express();
// middlewares
app.use(express.json());

app.use(rateLimiter);
// app.use((req,res,next)=>{
//   console.log(`Req method is ${req.method} & Req Url is ${req.url}`);
//   next();
// });


connectDB();
app.use("/api/notes", notesRoutes);
app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
