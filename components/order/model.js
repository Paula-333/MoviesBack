
const mongoose = require('mongoose');


module.exports= mongoose.model('Order', new mongoose.Schema({

    userId:{type: mongoose.isValidObjectId, ref: 'User'},
    movieId:{type: mongoose.isValidObjectId, ref: 'Movie'},
    createdAt:{type:Date, default:Date},
    returnDate:{type:Date}
}));

new OrderSchema({userId: 'sjhbdhsdbd', })
const orders = await OrderSchema.find({}).populate('userID');

/*const OrderSchema = mongoose.model('Order', new mongoose.Schema({

    userId:{type: mongoose.isValidObjectId, ref: 'User'},
    movieId:{type: mongoose.isValidObjectId, ref: 'Movie'},
    createdAt:{type:Date, default:Date},
    returnDate:{type:Date}
}));*/


