const mongoose = require('mongoose');

const useSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model("User", useSchema )
module.exports = User;