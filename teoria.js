//INSERTAR PELICULAS EN BASE DE DATOS
/*const script = async ()=>{
    const arrMovies = [{}];
    for(let i=0; i<arrMovies.length; i++) {
        const movie = new Movie (arrMovies[i])
        await movie.save();
    }
}
script().then();*/

//const { Mongoose } = require("mongoose");

//COMO TENIA ANTES EL DATE
//app.get('/orders/:order', (req, res) => {
//const fechaDevolucion = new Date ();
//fechaDevolucion.setDate(fecha.getDate()+7 )
//const fecha = new Date();
//const fecha2 = new Date();
//const devolucion = fecha2.setDate(fecha2.getDate() + 7);
//const order = req.params;
//let movieChoose = req.body;

//res.json(`Order: ${order.order} Movie: ${movieChoose} Date: ${fecha} Date devolution: ${fecha2}`);
//});

//const mongoose = require('mongoose')

//module.exports =mongoose.model('Entity', new Schema({
   // field1: {type:String},
//}));

//const movies = await Movie.find({});
//const movie = new Movie(e);
//await movie.save()

//const Order = mongoose.model('order' new mongoose.Schema({
    //id:{}
    //titulo:{}
//}));


/*const Schema = mongoose.Schema;

const Movie = mongoose.model('Movie', new mongoose.Schema({
    titulo:{type:String},
    genero:{type:String}
}));*/



//components/user/router-user.js
/*const router = require('express').Router();
router.get('/me', checkJWT, service.XXX);
router.XX(XXX)
.....
module.exports = router;*/


// --> este en el app.js
//conts routeUser = require('./components/user/router-user.js)
//app.use('/api/user/', routesUser);
