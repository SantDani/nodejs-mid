const express = require('express');
const router = express.Router();

const Film = require('./../models/film');

router.get('/', async (request, response) => {

    try {
        const films = await Film.find();
        console.log(films);

        response.render('films', {listFilms: 'HERE list films', films});
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
