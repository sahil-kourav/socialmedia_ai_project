const mongoose = require('mongoose')
const userModel = require("../models/auth.model");

const postSchema = new mongoose.Schema({
    image : String,
    caption: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel