require("dotenv").config()
const express = require('express')
const connectDB = require('../src/database/db')
const authRoute = require('./routes/auth.route')
const registerRoute = require('./routes/auth.route')
const loginRoute = require('./routes/auth.route')

const app = express()
app.use(express.json())
connectDB()


app.use('/api/auth', authRoute)
app.use('/register', registerRoute)
app.use('/login', loginRoute)


module.exports = app