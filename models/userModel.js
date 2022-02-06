const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    age: {
        type: Number
    },
    avatar: {
        type: String
    }
} , {timestamps: true})

const User = mongoose.model('User', userSchema )

module.exports = User;