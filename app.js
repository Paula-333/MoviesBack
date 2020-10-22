
const express = require('express')
const app = express();

let arrMovies = [

    {id:1, tittle: 'Soy leyenda'},
    {id:2, tittle: 'Soy leyenda'},
    {id:3, tittle: 'Soy leyenda'},
    {id:4, tittle: 'Soy leyenda'},
    {id:5, tittle: 'Soy leyenda'},
    {id:6, tittle: 'Soy leyenda'},
    {id:7, tittle: 'Soy leyenda'},
    {id:8, tittle: 'Soy leyenda'},
]

//https 

app.listen(4201,()=>console.log('Servidor levantado en 4201'));

app.get('/movies',(req,res)=>{
    res.json('ALL')
})

app.get('/movie/:id',(req,res)=>{
    let{id}= req.params;
    res.json(`${id}`);
})

app.get('/movie', (req,res)=> {
    let {q} = req.query;
    res.json(`${q}"`);
})