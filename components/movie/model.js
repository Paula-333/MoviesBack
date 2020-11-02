const mongoose = require('mongoose');

module.exports = mongoose.model('Movie', new mongoose.Schema({
    tittle:{type:String},
    genre:{type:String}
}));