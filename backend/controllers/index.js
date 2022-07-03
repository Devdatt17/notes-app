const { v4: uuidv4 } = require('uuid')
const Models =  require('../models/models')

//Display all notes
const displayAllNotes = async (req,res)=>{
    const data = await Models.find()
    res.json(data)
}

//Added new note
const addNewNotes = async(req,res)=>{
    const data = new Models({
        ...req.body,
        lastModified : Date.now(),
        _id: uuidv4()
    })
    
    await data.save()
    res.send(`New note added to the database`)
}

//Display single note
const displaySingleNote = async (req,res)=>{
    const { id } = req.params
    const singleUser = await Models.findById(id)
    res.send(singleUser)
}

//Update single note
const updateSingleNote = async (req,res)=>{
    const { id } = req.params
    const options = { new : true }

    await Models.findByIdAndUpdate(id,req.body,options)

    res.send(`Note with the id ${req.params.id} is updated`)
}

//Delete single note
const deleteSingleNote = async (req,res)=>{
    const { id } =  req.params
    await Models.findByIdAndDelete(id)
    res.send(`Note with id ${req.params.id} is deleted`)
}
module.exports = {
    displayAllNotes,
    addNewNotes,
    displaySingleNote,
    updateSingleNote,
    deleteSingleNote
}