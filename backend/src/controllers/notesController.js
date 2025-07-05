import Note from "../models/Note.js";



export async function getAllNotes(req,res) {

    try {
        const notes=await Note.findOne
    } catch (error) {
        
    }
}


export async function createNote(req,res) {
    res.status(201).json({message:"note created successfully"});

}
export async function deleteNote(req,res){
    res.status(200).json({message:"note deleted successfuly"});
}
export async function updateNote(req,res){
    res.status(200).json({message:"note updated successfuly"});
}
