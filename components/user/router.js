
const router = require('express').Router();
const controller = require ('./controller.js');

router.post('/createUser', controller.createUser);//CREAR USUARIO
router.post('/login', controller.login);//LOGIN
router.get('/findUser/:id', controller.getUser);//BUSCAR PERFIL
router.delete('/remove', controller.removeUser)//BORRAR PERFIL


module.exports = router;
