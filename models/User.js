// holds details about Schema
const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    //pass in fields
    username: String,
    password: String,
    email: String,
    createdAt: String
})

module.exports = model('User', userSchema)