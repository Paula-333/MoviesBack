
/////////////////..: REQUIRE :..//////////////////

//const e = require('express');
const express = require('express')
const app = express();

const routesMovie = require ('./components/movie/router.js');
const routesUser = require ('./components/user/router.js');
const routesOrder = require ('./components/order/router.js');

const PORT = process.env.PORT || 3004;


const mongoose = require('mongoose');
//mongodb+srv://admin1:yrTKyfTqZYIFi6cH@cluster0.dp8tm.mongodb.net/moviesback?retryWrites=true&w=majority

const MongoURI = process.env.MongoURI ||'mongodb://localhost:27017/moviesback';
//const monguri2 = "mongodb+srv://admin1:yrTKyfTqZYIFi6cH@cluster0.dp8tm.mongodb.net/moviesback?retryWrites=true&w=majority"
mongoose.connect(MongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false
})
.then(()=> console.log('mongoose conectado' + MongoURI))
.catch( e => console.error('mongoose erroneo ', e));


app.use(express.json());
app.use ('/movie', routesMovie);
app.use ('/order', routesOrder);
app.use ('/user', routesUser);

app.listen(PORT,()=>console.log('Servidor levantado en ' + PORT));



const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) { //para evitar el error CORS
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"); //permite peticiones con las cabeceras enumeradas
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.get('/', (req, res) => res.send('Welcome'));


['unhandledRejection', 'uncaughtException'].forEach(event => process.on(event, (err) => {
    console.error(`unhandled error: ${err.stack || err}`);
})); 