
/*const e = require('express');
const express = require('express')
const app = express();
const routesMovie =  require ('./componets/movie/router.js');
const PORT = 7201;

app.use(express.json());
app.use ('/api/movie/', routesMovie);
app.listen(PORT,()=>console.log('Servidor levantado en ' + PORT));*/

/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesback', {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
})
.then(()=> console.log('mongoose conectado'))
.catch( e => console.error('mongoose erroneo', e));

const Schema = mongoose.Schema;

const Movie = mongoose.model('Movie', new mongoose.Schema({
    titulo:{type:String},
    genero:{type:String}
}));


app.use((req,res,next)=>{//MIDLEWARE VALIDACION
    console.log('Ejecutando');
    next();
});
const midleware2 = (req,res,next)=> {//CREA UN MIDDLEWARE COMO FUNCION PARA PODER REUTILIZARLO
    console.log('Ha pasado por aqui');
    next();
};



//////////////////////////////////PELICULAS///////////////////////////////////////////////



app.get('/movies',(req,res)=>{
    res.json(arrMovies);
})
//if (!movie) return res.json({error: elemento no encontrado});


//..BUSCAR POR ID..

app.get('/movie/:id',(req,res)=>{
    const id= req.params.id;
    const movie  = arrMovies.find(movie => movie.id == id);
    res.json(movie);
});

///////////////////////////USUARIO////////////////////////////////////////////////////


const User = mongoose.model('User', new mongoose.Schema({
    name:{type:String},
    password:{type:String}
}));

const arrUsers = [{}];


//..CREAR USUARIO..

app.post('/user',async(req,res)=> {
    const user = new User(req.body);
    await user.save();
    res.json(user);
    
});


//..PERFIL..

app.get('/user/:id',(req,res)=>{
    const id= req.params.id;
    const users1  = arrUsers.find(users1 => users1.id == id);
    res.json(users1);
});

//..DELETE..

app.delete('/user/delete/:id', (req,res)=>{
    let id = req.body.id;
    let i = arrUsers.findIndex((item) => item.id === id);
    arrUsers.splice(i, 1);
    res.send(id + " eliminado"); 
});

//..::PEDIDOS::..

const arrOrders = [];
 
app.post('/order',(req,res)=> {
    if(!getUserById(req.body.idUsuario)) {
        res.status(400);
        return res.json({error: 'El usuario no existe'})
    }
    const fechaEntrega = new Date();
    fechaEntrega.setDay(fechaEntrega.getDay() + 7);
    const order = {
        idPedido: getRandom(1, 1000),
        idUsuario: req.body.idUsuario,
        idPelicula: req.body.idPelicula,
        fechaPedido: new Date(),
        fechaEntrega: fechaEntrega,
    }
    orders.push(order)
    res.json(order);
});*/