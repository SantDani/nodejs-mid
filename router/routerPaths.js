const express = require('express');
const router = express.Router();
const Film = require('./../models/film');
const {request, response} = require("express");

router.get('/', async (request, response) => {
   response.render('index', {title : 'Title Home'});
    console.log('Someone is connect to Home');

});

router.get('/nosotros', (req, res) => {
    res.render('about', {title: 'Nosotros EJS'});
    console.log('Someone is connect to about');
});

router.get('/contacto', (req, res) => {

    res.render('contact', {title: 'Contacto EJS'});
    // console.log('Someone is connect to Contact');

});


module.exports = router;
