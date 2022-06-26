let notes = []

//Display all notes
const displayAllNotes = (req,res)=>{
    res.send(notes)
}

//Added new note
const addNewNotes = (req,res)=>{
    notes.push({...req.body})
    res.send(`Note no. ${req.body.id} added to the database`)
}

//Display single note
const displaySingleNote = (req,res)=>{
    res.send(notes.find((note) => note.id == req.params.id))
}

//Update single note
const updateSingleNote = (req,res)=>{
    const updateNote = notes.find((note) => note.id == req.params.id)

    req.body.title ? updateNote.title = req.body.title : updateNote.title
    req.body.message ? updateNote.message = req.body.message : updateNote.message

    res.send(`Note with the id ${updateNote.id} is updated`)
}

//Delete single note
const deleteSingleNote = (req,res)=>{
    notes = notes.filter((note)=> note.id !== req.body.id)
    res.send(`Note with id ${req.body.id} is deleted`)
}
module.exports = {
    displayAllNotes,
    addNewNotes,
    displaySingleNote,
    updateSingleNote,
    deleteSingleNote
}