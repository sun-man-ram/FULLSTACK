 async function getAllNotes(req,res) {
    res.status(200).send("You just fetched the notes ");
}


 async function createNote(req,res) {
    res.status(201).json({message:"note created successfully"});

}
 async function deleteNote(req,res){
    res.status(200).json({message:"note deleted successfuly"});
}
 async function updateNote(req,res){
    res.status(200).json({message:"note updated successfuly"});
}

module.exports = {
    getAllNotes,
    createNote,
    deleteNote,
    updateNote
};
