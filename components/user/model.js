
const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
  
    name:{type:String},
    email:{type:String},
    password:{type:String},
    //role:{type:String, default: 'USER', enum:['ADMIN','USER']}
}));

