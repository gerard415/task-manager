const express = require('express')
const app = express()
const connectDB = require('./db/connection')
require('dotenv').config() 
const router = require('./routes/routes')
const notFound = require('./middleware/not-found')
const errorHandlermiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/taskmanager',router)
app.use(notFound)
app.use(errorHandlermiddleware)

//server
const port = process.env.PORT || 5000

const start = async ()=>{
    try {
        await connectDB (process.env.MONGO_URI)
        app.listen(port, console.log('server is listening'))
    } catch (error) {
        console.log(error)
    }
}

start()
