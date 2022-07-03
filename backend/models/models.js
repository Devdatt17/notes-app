const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    },
    lastDateModified: {
        required: true,
        type: Date
    }

})

module.exports = mongoose.model('Data',dataSchema)