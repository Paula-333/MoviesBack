
const Model = require('./model')

//..: CREAR PERFIL :..//

module.exports.createUser = async (req,res)=>{
    const user = new Model (req.body);
    await user.save();
    res.json(user);
}


//..: BUSCAR PERFIL :..//


module.exports.getUser = async (req,res)=>{

    const data2 = await Model.find({_id: req.params._id});//poner una funcion?
    res.json(data2);
}


//..: BORRAR PERFIL :..//


module.exports.removeUser = async (req, res) =>{
     const data = await Model.find({});
    res.json(data);
};

//..: LOGIN :..//



