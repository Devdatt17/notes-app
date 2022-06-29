const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routers = require('./routes/index')
const app = express()

const PORT = 5000 || process.env.PORT;

//Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routers)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})