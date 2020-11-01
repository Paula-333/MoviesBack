
const mongoose = require('mongoose');


module.exports= mongoose.model('Order', new mongoose.Schema({
    userId:{type: mongoose.ObjectId},
    movieId:{type: mongoose.ObjectId},
    createdAt:{type:Date, default:Date},
    returnDate:{type:Date}
}));



