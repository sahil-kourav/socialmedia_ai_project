const express = require('express')
const userModel = require('../database/db')
const { registerController, loginController } = require("../controller/auth.controller")

const router = express.Router()

router.post('/register', registerController)
router.post('/login', loginController)

module.exports = router