const express = require('express')

const dotenv = require('dotenv')

const sql = require('./database/db')
 
dotenv.config()

const PORT = process.env.PORT

const userRoutes = require('./routes/userRoutes')

const postRoutes = require('./routes/postRoutes')

const app = express()

app.use(express.json())

app.use('/api/users',userRoutes)

app.use('/api/post', postRoutes)

 

app.listen(PORT, (req,res) => {
    console.log(`server is listening on  port ${PORT}`)
})