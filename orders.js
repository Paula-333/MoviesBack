
const express = require('express');
const app = express();
app.use(express.json());

app.listen(4000,()=>console.log('Servidor levantado en 4000'));

app.post('/request/order/:id', (req, res) => {

let arrMovies = [

    {order:001, id:1, tittle: 'Como perder a un chico en 10 días'},
    {order:002, id:2, tittle: 'Chicas malas'},
    {order:003, id:3, tittle: 'Devuélveme mi suerte'},
    {order:004, id:4, tittle: 'Bar Coyote'},
    {order:005, id:5, tittle: 'Muévete, esto es Nueva York'},
    {order:006, id:6, tittle: 'Una rubia muy legal'},
    {order:007, id:7, tittle: 'Princesa por sorpresa'},
    {order:008, id:8, tittle: 'El sueño de mi vida'},
];

const Date = new Date();
const fechaDevolucion = setDay(fecha.getDay()+7);

res.send('Order ID: ' + req.params.order + 'Pelicula: ' + req.body.pelicula + Date + 'Tienes que devolver la película: ' + fechaDevolucion);

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