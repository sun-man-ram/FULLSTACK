// import express from "express";
const express=require("express");
// import notesRoutes from "./routes/notesRoutes.js";
const notesRoutes = require("./routes/notesRoutes.js");

const app = express();
app.use("/api/notes",notesRoutes);



//end point
// an endpoint is a combination of URL+HTTP method that lies the client 
//interat with a specific resource
// routes
// app.get("/api/notes",(req,res)=>{
//     // send the notes 
// res.status(200).send("you got 20 notes")}
// );


// app.post("/api/notes/hi",(req,res)=>{
//     // 201 is used for created successfully 
//     res.status(201).json({message:"post created successfully"})
// });

// app.put("/api/notes/:id",(req,res)=>{

//     res.status(200).json({message:"post updated successfuly "})
// });

// app.delete("/api/notes/:id",(req,res)=>{

//     res.status(200).json({message:"note deleted successfully"})
// });






app.listen(5001,() =>{
    console.log("server started on PORT: 5001");
});
