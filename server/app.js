require('dotenv').config()

const express = require('express')

const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URi, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const blogRouter = require('./routes/blogs')
app.use('/blogs', blogRouter)

app.listen(process.env.PORT, () => console.log('Server has started..'))

