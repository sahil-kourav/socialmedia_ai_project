const express = require('express')
const postModel = require('../models/post.model');
const userModel = require('../models/auth.model');
const jwt = require('jsonwebtoken');
// const  createPostController  = require('../controller/createPostController');
const authMiddleware = require('../middleware/auth.middleware')
const multer = require('multer')

const router = express.Router()


const upload = multer({ storage: multer.memoryStorage() })
/* POST /api/post -> [protected] */

router.post('/', authMiddleware,
    upload.single("image"),
    createPostController )
module.exports = router