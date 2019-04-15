const mongoose = require('mongoose');
//registrater schema
const Schema = mongoose.Schema;
const register = new Schema({
    username: {
        type: String,
        required: true
    },

    email :{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    conPassword:{
        type: String,
        required: true
    },
});

const regist = mongoose.model('User', register);
module.exports = regist;