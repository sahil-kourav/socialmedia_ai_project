require("dotenv").config()
const express = require('express')
const connectDB = require('../src/database/db')
const authRoute = require('./routes/auth.route')
const registerRoute = require('./routes/auth.route')
const loginRoute = require('./routes/auth.route')
const postsRoute = require('./routes/post.route')
const cookieParser = require("cookie-parser");


const app = express()

app.use(express.json())
app.use(cookieParser());
connectDB()


app.use('/api/auth', authRoute)
app.use('/api/posts', postsRoute)

app.use('/register', registerRoute)
app.use('/login', loginRoute)


module.exports = app