const Order = require ('./model')

//..: CREAR PEDIDO :..// 

module.exports.createOrder = async (req,res)=>{
    const order = new Order (req.body);
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate()+7);
    order.returnDate = returnDate;
    await order.save();
    res.json(order);
}
