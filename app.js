
/////////////////..: REQUIRE :..//////////////////

//const e = require('express');
const express = require('express')
const app = express();

const routesMovie = require ('./components/movie/router.js');
const routesUser = require ('./components/user/router.js');
const routesOrder = require ('./components/order/router.js');

const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
//mongodb+srv://admin1:yrTKyfTqZYIFi6cH@cluster0.dp8tm.mongodb.net/moviesback?retryWrites=true&w=majority

const MongoURI = process.env.MongoURI ||'mongodb://localhost:27017/moviesback';
const monguri2 = "mongodb+srv://admin1:yrTKyfTqZYIFi6cH@cluster0.dp8tm.mongodb.net/moviesback?retryWrites=true&w=majority"
mongoose.connect(monguri2,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log('mongoose conectado' + MongoURI))
.catch( e => console.error('mongoose erroneo ', e));
//.then(()=>console.log('conected to Mongodb:'+MongoURI))
//mongoose.connect(MongoURI)

app.use(express.json());
app.use ('/movie/', routesMovie);
app.use ('/order/', routesOrder);
app.use ('/user/', routesUser);

app.listen(PORT,()=>console.log('Servidor levantado en ' + PORT));

['unhandledRejection', 'uncaughtException'].forEach(event => process.on(event, (err) => {
    console.error(`unhandled error: ${err.stack || err}`);
})); //yrTKyfTqZYIFi6cH