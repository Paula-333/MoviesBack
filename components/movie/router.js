
const router = require('express').Router();
const controller = require ('./controller.js');

router.get('/movies', controller.getMovies);
router.get('/findMovie/:id', controller.getMovie);


module.exports = router;
