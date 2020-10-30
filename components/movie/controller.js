
const Movie = require('./model')


//..: TODAS LAS PELICULAS :..//

module.exports.getMovies = async (req, res) =>{ //?tittle=MAtix&duration=90
    const query = {}
    if(req.query.tittle) query.tittle = req.query.tittle;
    //if(req.query.genre) query.genre = req.query.genre;
    const data = await Movie.find(query); //si no pone nada busca todas
    res.json(data);
};


//..: BUSCAR POR ID :..//

module.exports.getMovie = async (req,res)=>{
    const data2 = await Movie.find({id: req.params.id});//findOne o findByID(?) dentro de uno de estos hay que poner una funcion seguramente con un if
    res.json(data2);
}


//..: CREAR PELICULA :..//

module.exports.createMovie = async (req,res)=>{
    const movie = new Movie (req.body);
    await movie.save();
    res.json(movie);
}