const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

/*const MovieSchema = (new mongoose.Schema({
    titulo:{type:String},
    genero:{type:String}
}));

module.exports= mongoose.model('Movie', MovieSchema);*/

module.exports = mongoose.model('Movie', new mongoose.Schema({
    titulo:{type:String},
    genero:{type:String}
}));