const express = require('express');
const router = express.Router();

const Film = require('./../models/film');

router.get('/', (request, response) =>{
    response.render('films', {listFilms: 'HERE list films'});
});

module.exports = router;
