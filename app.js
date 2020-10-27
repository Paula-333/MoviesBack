
const express = require('express')
const app = express();
const PORT = 6201;


app.use(express.json());

app.use((req,res,next)=>{
    console.log('Entrando');
    next();
});


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

//..::PELICULAS::..

app.listen(PORT,()=>console.log('Servidor levantado en ' + PORT));

app.get('/movies',(req,res)=>{
    res.json(arrMovies);
})

//..BUSCAR POR ID..

app.get('/movies/:id',(req,res)=>{
    const id= req.params.id;
    const movie  = arrMovies.find(movie => movie.id == id);
    res.json(movie);
});

//..BUSCAR POT TITULO..

app.get('/movie', (req,res)=> {
    let {q} = req.query;
    let movieList =  arrMovies.filter(item => item.tittle.includes(q));
    res.json(movieList);
})

//..::USUARIO::..

const arrUsers = [{}];


//..CREAR USUARIO..

app.post('/users',(req,res)=> {
    const {id, user, password} = req.body;
    const users = [{id, user, password}];
    arrUsers.push(users);
    res.json(users);
});


//..PERFIL..

app.get('/users/:id',(req,res)=>{
    const id= req.params.id;
    const users1  = arrUsers.find(users1 => users1.id == id);
    res.json(users1);
});

//..DELETE..


app.delete('/users/delete/:id', (req,res)=>{
    let id = req.body.id;
    let i = arrUsers.findIndex((item) => item.id === id);
    arrUsers.splice(i, 1);
    res.send(id + " eliminado"); 
});

//..::PEDIDOS::..

const arrOrders = [

    {order:'001', tittle: 'Como perder a un chico en 10 días'},
    {order:'002', tittle: 'Chicas malas'},
    {order:'003', tittle: 'Devuélveme mi suerte'},
    {order:'004', tittle: 'Bar Coyote'},
    {order:'005', tittle: 'Muévete, esto es Nueva York'},
    {order:'006', tittle: 'Una rubia muy legal'},
    {order:'007',  ittle: 'Princesa por sorpresa'},

];

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
});


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
