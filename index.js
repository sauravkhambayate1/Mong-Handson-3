const express = require('express')
const app = express()
const studentRouter = require('./routes/studentRouter')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotEnv = require('dotenv')
dotEnv.config()

const connect = require('./database/mongoose')

app.use(bodyParser.json())
app.use(studentRouter)


app.listen(process.env.PORT, async() =>{
    console.log(`Server is running on ${process.env.PORT}`)
    await connect()
})
