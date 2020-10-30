//const Order = require ('./model')

//..: CREAR PEDIDO :..// Esto hay que probarlo por que no tengo ni idea 

module.exports.createOrder = async (req,res)=>{
    const order = new Order (req.body);
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate()+7);
    order.returnDate = returnDate;
    await order.save();
    res.json(order);
}


//new OrderSchema({userId: 'sjhbdhsdbd', })
//const orders = await OrderSchema.find({}).populate('userID');