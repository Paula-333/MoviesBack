
const mongoose = require('mongoose');


module.exports= mongoose.model('Order', new mongoose.Schema({

    userId:{type: ObjectId, ref: 'User'},
    movieId:{type: ObjectId, ref: 'Movie'},
    createdAt:{type:Date, default:Date},
    returnDate:{type:Date}
}));



/*const OrderSchema = mongoose.model('Order', new mongoose.Schema({

    userId:{type: mongoose.isValidObjectId, ref: 'User'},
    movieId:{type: mongoose.isValidObjectId, ref: 'Movie'},
    createdAt:{type:Date, default:Date},
    returnDate:{type:Date}
}));*/


