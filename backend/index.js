const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routers = require('./routes/index')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const PORT = process.env.PORT || 5000;

//Database configuration
dotenv.config()

const mongoDBConnection = process.env.DATABASE_URL
mongoose.connect(mongoDBConnection)
const database  = mongoose.connection

database.on('error',(error)=>{
    console.log(error)
})

database.once('connected',()=>{
    console.log(`DATABASE CONNECTION SUCESSFUL`)
})

//Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routers)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})