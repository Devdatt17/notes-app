const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    _id: {
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
    lastModified: {
        required: true,
        type: Date
    }

})

module.exports = mongoose.model('Data',dataSchema)