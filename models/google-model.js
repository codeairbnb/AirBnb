const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create Schema
const userSchema = new Schema({

    user:String,
    googleId:String
});
//create model
const User = mongoose.model('User', userSchema);

 module.exports = User;
