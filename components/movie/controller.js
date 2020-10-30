
const Model = require('./model')


//..: TODAS LAS PELICULAS :..//


module.exports.getMovies = async (req, res) =>{//?tittle=MAtix&duration=90
    //res.json([{id:1, tittle:'titanic'}])
    const query = {}
    if(req.query.tittle) query.tittle = req.query.tittle;
    if(req.query.genero) query.genero = req.query.genero;
    const data = await Model.find(query); //si no pone nada busca todas
    res.json(data);
};


//..: BUSCAR POR ID :..//


module.exports.getMovie = async (req,res)=>{
    const data2 = await Model.find({id: req.params.id});//findOne(?)
    res.json(data2);
}


//..: CREAR PELICULA :..//

module.exports.createMovie = async (req,res)=>{
    const movie = new Model (req.body);
    await movie.save();
    res.json(movie);
}