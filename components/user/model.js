const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
    //userId:{type: mongoose.isValidObjectId, ref: 'User'},
    name:{type:String},
    email:{type:String},
    password:{type:String},
    //role:{type:String, default: 'USER', enum:['ADMIN','USER']}
}));

