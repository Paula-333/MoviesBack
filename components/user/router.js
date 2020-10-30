
const router = require('express').Router();
const controller = require ('./controller.js');

router.post('/', controller.createUser);
router.post('/login', controller.login);
router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);//meter login?(?)
router.delete('/', controller.removeUser)


module.exports = router;