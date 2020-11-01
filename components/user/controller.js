
const User = require('./model')
const jwt = require ('jsonwebtoken')
const secret = 'migatitobonito'


//..: CREAR PERFIL :..//

module.exports.createUser = async (req,res)=>{
    const user = new Model (req.body);
    await user.save();
    res.json(user);
}

//..: TODOS LOS PERFILES :..// Creo que esto no haria falta, lo tengo para comprobar que se buscan los perfiles

module.exports.getUsers = async (req, res) =>{//?tittle=MAtix&duration=90
    //res.json([{id:1, tittle:'titanic'}])
    const query = {}
    if(req.query.name) query.tittle = req.query.name;
    const data = await User.find(query); //si no pone nada busca todas
    res.json(data);
};


//..: BUSCAR PERFIL :..//


module.exports.getUser = async (req,res)=>{

    const data2 = await User.findOne({_id: req.params.id}) //findOne o findByID(?) dentro de uno de estos hay que poner una funcion seguramente con un if, bucle maximo
    res.json(data2);
}


//..: BORRAR PERFIL :..//


module.exports.removeUser = async (req, res) =>{
    const data = await User.deleteOne(req.query.id); //si no pone nada busca todas
    res.json(data);
};

//..: LOGIN :..//
//Creo que hay que meter el JWT en CREAR PERFIL o BUSCAR PERFIL pero por lo que hemos hablado en el descanso es otra cosa
module.exports.login = (req, res,)=>{

    const {email,password} = req.body;
    if (!email || !password ) return res.json({error:'No encuentra el usuario'})
    const data = User.find(e=> e.email === email && e.password === password);
    if (!data) return res.json ({error: 'No es correcto'})
    const token = jwt.sign({user:data.id}, secret, {expiresIn: 60 * 60 *24});
    res.json({token: token, mensaje: 'login correcto'})

    //validar token


}

