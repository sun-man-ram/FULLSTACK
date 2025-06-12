// import express from "express";
const express=require("express");
// import { createNote,deleteNote,getAllNotes,updateNote } from "../controllers/notesController";
const { createNote, deleteNote, getAllNotes, updateNote } = require("../controllers/notesController");

const router=express.Router();


router.get("/",getAllNotes)
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);



// router.post("/",(req,res)=>{
//     res.status(201).json({message:"note created successfully"});
// });
//  export default router;
module.exports=router;



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