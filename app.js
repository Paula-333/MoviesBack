
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

app.listen(4000,()=>console.log('Servidor levantado en 4000'));

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
    let q = req.query;
    let movie2 =  arrMovies.filter(item => item.tittle.includes(q));
    res.json(movie2);
})