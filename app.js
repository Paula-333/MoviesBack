
const express = require('express')
const app = express();
//const bodyParser = require(bodyParser);

app.use(express.json()); //req.body
//app.use(bodyParser.json()); //req.body


let arrMovies = [

    {id:1, tittle: 'Como perder a un chico en 10 días'},
    {id:2, tittle: 'Chicas malas'},
    {id:3, tittle: 'Devuélveme mi suerte'},
    {id:4, tittle: 'Bar Coyote'},
    {id:5, tittle: 'Muévete, esto es Nueva York'},
    {id:6, tittle: 'Una rubia muy legal'},
    {id:7, tittle: 'Princesa por sorpresa'},
    {id:8, tittle: 'El sueño de mi vida'},
]

//https 

app.listen(3000,()=>console.log('Servidor levantado en 3000'));

app.get('/movies',(req,res)=>{
    res.json(arrMovies);
})

//BUSCAR POR ID

app.get('/movies/:id',(req,res)=>{
    const id= req.params.id;
    const movie  = arrMovies.find(movie => movie.id == id);
    res.json(movie);
});

//CREAR AÑADIR
app.post('/movies',(req,res)=> {
    const {id, tittle} = req.body;
    const movie1 = {id, tittle};
    arrMovies.push(movie1);
    res.json(movie1);
})

//MODIFICAR
app.post('/movies/:id',(req,res)=>{
    const id = req.params;
    const tittle = req.body;
    let moviesList = arrMovies.filter(movie => movie.id != id);
    let movies = {id, tittle};
    moviesList.push(movies);
    res.json(movies);

})

/*app.get('/movie', (req,res)=> {
    let {q} = req.query;
    res.json(`${q}"`);
})*/