
const express = require('express')
const app = express();
const PORT = 3200;
//const bodyParser = require(bodyParser);

app.use(express.json()); //req.body
//app.use(bodyParser.json()); //req.body


let arrMovies = [

    {id:'1', tittle: 'Como perder a un chico en 10 días'},
    {id:'2', tittle: 'Chicas malas'},
    {id:'3', tittle: 'Devuélveme mi suerte'},
    {id:'4', tittle: 'Bar Coyote'},
    {id:'5', tittle: 'Muévete, esto es Nueva York'},
    {id:'6', tittle: 'Una rubia muy legal'},
    {id:'7', tittle: 'Princesa por sorpresa'},
    {id:'8', tittle: 'El sueño de mi vida'},
]

//https 

app.listen(PORT,()=>console.log('Servidor levantado en 3200'));

app.get('/movies',(req,res)=>{
    res.json(arrMovies);
})

//BUSCAR POR ID

app.get('/movies/:id',(req,res)=>{
    const id= req.params.id;
    const movie  = arrMovies.find(movie => movie.id == id);
    res.json(movie);
});

//BUSCAR POT TITULO

app.get('/movie', (req,res)=> {
    let {q} = req.query;
    let movieList =  arrMovies.filter(item => item.tittle.includes(q));
    res.json(movieList);
})

//USUARIO
const arrUsers = [{id:'', user:'', password:''}];


//CREAR USUARIO

app.post('/users',(req,res)=> {
    const {id, user, password} = req.body;
    const users = {id, user, password};
    arrUsers.push(users);
    res.json(users);
});


//PERFIL
app.get('/users/:id',(req,res)=>{
    const id= req.params.id;
    const users1  = arrUsers.find(users1 => users1.id == id);
    res.json(users1);
});

//DELETE

app.delete('/users/delete/:id', (req,res)=>{
    const id= req.params.id;
    const usersDelete  = arrUsers.find(users1 => users1.id == id);
    res.json(usersDelete);
});



//PEDIDOS

app.post('/orders/:order', (req, res) => {

const arrOrders = [

    {order:001, id:1, tittle: 'Como perder a un chico en 10 días'},
    {order:002, id:2, tittle: 'Chicas malas'},
    {order:003, id:3, tittle: 'Devuélveme mi suerte'},
    {order:004, id:4, tittle: 'Bar Coyote'},
    {order:005, id:5, tittle: 'Muévete, esto es Nueva York'},
    {order:006, id:6, tittle: 'Una rubia muy legal'},
    {order:007, id:7, tittle: 'Princesa por sorpresa'},

];

const date1 = new Date();
//const date2 = new Date();
const Devolucion = setDay(date1.getDay()+7);
let order1 = req.params;
let movieChoose = req.body;

res.json(`Order ID: ${order1.order} Pelicula: ${movieChoose} Fecha de alquiler:  ${date1} Fecha de devolución: ${Devolucion}`);
});




//const user = arrUsers.push();

//CREAR AÑADIR
//app.post('/movies',(req,res)=> {
    //const {id, tittle} = req.body;
    //const movie1 = {id, tittle};
    //arrMovies.push(movie1);
    //res.json(movie1);
//})

//MODIFICAR
/*app.post('/movies/:id',(req,res)=>{
    const id = req.params;
    const tittle = req.body;
    let moviesList = arrMovies.filter(movie => movie.id != id);
    let movies = {id, tittle};
    moviesList.push(movies);
    res.json(movies);

})*/