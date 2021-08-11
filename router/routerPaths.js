const express = require('express');
const router = express.Router();
const Film = require('./../models/film');
const {request, response} = require("express");

router.get('/', async (request, response) => {
   response.render('index', {title : 'Title Home'});
    console.log('Someone is connect to Home');

});

router.get('/films', async (request, response) => {
    let films = []
    // response.render('films', {listFilms: 'HERE list films', films});
    console.log('Someone is connect to films');
    try {
        const films = await Film.find();
        console.log(films);

        response.render('films', {listFilms: 'HERE list films', films});
    } catch (e) {
        console.log(e);
        response.render('films', {listFilms: 'HERE list films', films});
    }
});

router.get('/create-film', (request, response)=> {
    response.render('create-film', {title : 'Create Film'});
})

router.post('/create-film', async (request, response)=> {
    // response.render('create-film', {title : 'Create Film'});
    const body = request.body;

    console.log('Petition FORM')
    console.log(body);

    try{
        const film = new Film(body);

        console.log('film new', film);
        /**
         *  Film.create(body) is possible because we create the schema Film with mongoose
         */
        await Film.create(body);

        response.redirect('films');
    }catch (e) {
        console.error(e);
    }
})

router.get('/nosotros', (req, res) => {
    res.render('about', {title: 'Nosotros EJS'});
    console.log('Someone is connect to about');
});

router.get('/contacto', (req, res) => {

    res.render('contact', {title: 'Contacto EJS'});
    // console.log('Someone is connect to Contact');

});

router.use((req, res, next) => {
    res.status(404).render( '404',{title: 'Page not found 404'});
});


module.exports = router;
