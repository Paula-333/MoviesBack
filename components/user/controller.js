
const User = require('./model')
const jwt = require ('jsonwebtoken')
const secret = 'migatitobonito'


////////////////..: CREAR PERFIL :..////////////////

module.exports.createUser = async (req,res)=>{
    const user = new Model (req.body);
    await user.save();
    res.json(user);
}


///////////////..: LOGIN :..///////////////

module.exports.login = (req, res, next)=>{
    
    const {email,password} = req.body;
    if (!email || !password ) return res.json({error:'No encuentra el usuario'})

    const data = User.find (e=> e.email === email && e.password === password);
    if (!data) return res.json ({error: 'No es correcto'})

    const token = jwt.sign({user:data.id}, secret, {expiresIn: 60 * 60 *24});
    res.json({token: token, mensaje: 'login correcto'})

    //validar token//Esto creo que es asi no me da ningun error.

    jwt.verify(token, secret, function(err, token) {
        if (err) {
          return res.status(401).send({
            ok: false,
            message: 'Token inválido'
          });
        } else {
          req.token = token
          next()
        }

    });
}



////////////..: BUSCAR PERFIL :..//////////////


module.exports.getUser = async (req,res)=>{

    const data2 = await User.findOne({_id: req.params.id})
    res.json(data2);
}


//////////////////..: BORRAR PERFIL :..////////////////////


module.exports.removeUser = async (req, res) =>{

    const remove = await User.deleteOne(req.query.id);
    res.json(remove);
}