
const Movie = require('./model')


//..: BUSQUEDA DE TODAS LAS PELICULAS, POR TITULO Y POR GENERO :..//

module.exports.getMovies = async (req, res) =>{ //?tittle=MAtix&duration=90
    const query = {}
    if(req.query.tittle) query.tittle = req.query.tittle;
    if(req.query.genre) query.genre = req.query.genre;
    const data = await Movie.find(query); //si no pone nada busca todas
    res.json(data);
};


//..: BUSCAR POR ID :..//

module.exports.getMovie = async (req,res)=>{
    const data2 = await Movie.findOne({_id: req.params.id});
    res.json(data2);
}


//..: CREAR PELICULA :..//

module.exports.createMovie = async (req,res)=>{
    const movie = new Movie (req.body);
    await movie.save();
    res.json(movie);
}