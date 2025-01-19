const express = require('express')

const cors = require('cors')

const dotenv = require('dotenv')

const sql = require('./database/db')

dotenv.config()

const PORT = process.env.PORT

const userRoutes = require('./routes/userRoutes')

const postRoutes = require('./routes/postRoutes')

const commentRoutes = require('./routes/commentRoutes')

const app = express()

const origins = ["http://localhost:5173","http://localhost:5175"];

app.use(cors({
    origin: origins
}));


app.use(express.json())

app.use('/api/users', userRoutes)

app.use('/api/posts', postRoutes)

app.use('/api/comments', commentRoutes)



app.listen(PORT, (req, res) => {
    console.log(`server is listening on  port ${PORT}`)
})