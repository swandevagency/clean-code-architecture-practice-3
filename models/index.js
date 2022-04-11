const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username : 'string',
    password : 'string',
    id : 'string'
})

mongoose.model('User',userSchema)