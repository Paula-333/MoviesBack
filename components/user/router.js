
const router = require('express').Router();
const controller = require ('./controller.js');

router.post('/', controller.createUser);//CREAR USUARIO
router.get('/', controller.getUsers);//TODOS LOS PERFILES
router.post('/login', controller.login);//LOGIN
router.get('/:id', controller.getUser);//BUSCAR PERFIL
router.delete('/', controller.removeUser)//BORRAR PERFIL


module.exports = router;
