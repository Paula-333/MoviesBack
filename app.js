
/////////////////..: REQUIRE :..//////////////////

const e = require('express');
const express = require('express')
const app = express();
const routesMovie = require ('./components/movie/router.js');
const routesUser = require ('./components/user/router.js');
const routesOrder = require ('./components/order/router.js');
const PORT = 8202;
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/moviesback', {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
})
.then(()=> console.log('mongoose conectado'))
.catch( e => console.error('mongoose erroneo', e));


app.use(express.json());
app.use ('/api/movie/', routesMovie);
app.use ('/api/order/', routesOrder);
app.use ('/api/user/', routesUser);

app.listen(PORT,()=>console.log('Servidor levantado en ' + PORT));
