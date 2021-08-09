const express = require('express');
const router = express.Router();

const Film = require('./../models/film');

router.get('/films', (request, response) =>{
    // response.render('films', {listFilms: 'HERE list films'});

    try {
        // const films = await Film.find();
        // console.log(films);

        response.render('films', {
            listFilms: ' List films'
        });
    }catch (e){
        console.log(e);
    }
});

module.exports = router;
