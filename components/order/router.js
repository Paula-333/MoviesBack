
const router = require('express').Router();
const controller = require ('./controller.js');

router.post('/createOrder', controller.createOrder);

module.exports = router;
